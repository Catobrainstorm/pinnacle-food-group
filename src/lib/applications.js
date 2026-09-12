import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "./firebase";

// ---------------------------------------------------------------------------
// Cloudinary — unsigned upload (no card, no backend server required).
// Fill in the two values below with the ones from your Cloudinary dashboard.
// ---------------------------------------------------------------------------
const CLOUDINARY_CLOUD_NAME = "dlt4odvyn";
const CLOUDINARY_UPLOAD_PRESET = "pinnacle_careers";

// ---------------------------------------------------------------------------
// EmailJS — sends the confirmation email straight from the browser.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = "service_fvfgj0q";
const EMAILJS_TEMPLATE_ID = "template_ep61ddr";
const EMAILJS_PUBLIC_KEY = "eCrjhgqjrC-a-f39R";

/**
 * Uploads a single file to Cloudinary using an unsigned upload preset.
 * Returns the secure URL of the uploaded file, or throws on failure.
 */
export async function uploadDocument(file) {
  if (!file) return null;

  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "careers-applications");

  const res = await fetch(url, { method: "POST", body: formData });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Document upload failed (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return data.secure_url;
}

/**
 * Generates a human-friendly, effectively-unique application reference
 * number, e.g. PFG-2026-4K7QZ2. No server-side counter is needed: the
 * random suffix makes a collision astronomically unlikely for this volume
 * of applications.
 */
export function generateReferenceNumber() {
  const year = new Date().getFullYear();
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no O/0/I/1 confusion
  let suffix = "";
  for (let i = 0; i < 6; i++) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }
  return `PFG-${year}-${suffix}`;
}

/**
 * Full submission pipeline for a Careers application:
 *  1. Upload CV (required) and cover letter (optional) to Cloudinary.
 *  2. Save the application record + document URLs to Firestore.
 *  3. Send a confirmation email to the applicant via EmailJS.
 *
 * `form` is the flat object collected across the ApplyNow steps.
 * Returns the generated reference number on success.
 */
export async function submitApplication(form) {
  const referenceNumber = generateReferenceNumber();

  const [resumeUrl, coverLetterUrl] = await Promise.all([
    uploadDocument(form.resume),
    form.coverLetter ? uploadDocument(form.coverLetter) : Promise.resolve(null),
  ]);

  // The reference number IS the Firestore document ID (instead of an
  // auto-generated one). This lets the "Check Application Status" page
  // fetch a single application by its unguessable reference code without
  // needing any read access to the rest of the collection — see the
  // security rules that go with this.
  await setDoc(doc(db, "applications", referenceNumber), {
    referenceNumber,
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    location: form.location,
    linkedin: form.linkedin || "",
    jobId: form.jobId,
    position: form.position,
    department: form.department,
    jobLocation: form.jobLocation,
    employmentType: form.employmentType,
    availabilityDate: form.availabilityDate,
    rightToWork: form.rightToWork,
    referralSource: form.referralSource,
    coverNote: form.coverNote,
    resumeUrl,
    coverLetterUrl,
    status: "received",
    submittedAt: serverTimestamp(),
  });

  // The confirmation email is a nice-to-have on top of the application
  // already being safely saved above. If EmailJS is misconfigured or down,
  // that should never block the applicant from getting their reference
  // number — so failures here are logged, not thrown.
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: form.email,
        applicant_name: form.fullName,
        applicant_email: form.email,
        position: form.position,
        department: form.department,
        location: form.jobLocation,
        reference_number: referenceNumber,
      },
      { publicKey: EMAILJS_PUBLIC_KEY },
    );
  } catch (emailErr) {
    // eslint-disable-next-line no-console
    console.error(
      "Confirmation email failed to send (application was still saved):",
      emailErr,
    );
  }

  return referenceNumber;
}

/**
 * Looks up a single application by its reference number for the
 * "Check Application Status" page. Returns the application data, or
 * null if no application exists with that reference number.
 */
export async function getApplicationByReference(referenceNumber) {
  const cleaned = referenceNumber.trim().toUpperCase();
  const snap = await getDoc(doc(db, "applications", cleaned));
  if (!snap.exists()) return null;
  return snap.data();
}
