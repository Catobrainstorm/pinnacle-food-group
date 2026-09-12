import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { getJobById } from "../data/jobs";
import { submitApplication } from "../lib/applications";

const GENERAL_JOB = {
  id: "general",
  title: "General Application",
  department: "General",
  location: "Any Pinnacle Food Group site",
  type: "Various",
};

const STEPS = [
  "Personal Details",
  "Position",
  "Documents",
  "Additional Info",
  "Review",
];

const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Casual", "Contract"];
const REFERRAL_SOURCES = [
  "Company Website",
  "Seek",
  "LinkedIn",
  "Employee Referral",
  "Other",
];

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  employmentType: "",
  availabilityDate: "",
  resume: null,
  coverLetter: null,
  rightToWork: "",
  referralSource: "",
  coverNote: "",
};

function FieldLabel({ children, required }) {
  return (
    <label className="block text-xs tracking-widest uppercase text-stone font-semibold mb-2">
      {children} {required && <span className="text-mustard">*</span>}
    </label>
  );
}

const inputCls =
  "w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:border-forest transition-colors";

export default function ApplyNow() {
  const { jobId } = useParams();
  const job = getJobById(jobId) || GENERAL_JOB;

  const [step, setStep] = useState(0);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState(null);

  const update = (field) => (e) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  function validateStep() {
    setError("");
    if (step === 0) {
      if (!form.fullName || !form.email || !form.phone || !form.location) {
        setError("Please fill in all required fields before continuing.");
        return false;
      }
      if (!/^\S+@\S+\.\S+$/.test(form.email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }
    if (step === 1) {
      if (!form.employmentType || !form.availabilityDate) {
        setError("Please fill in all required fields before continuing.");
        return false;
      }
    }
    if (step === 2) {
      if (!form.resume) {
        setError("A CV / resume upload is required to continue.");
        return false;
      }
    }
    if (step === 3) {
      if (!form.rightToWork || !form.referralSource) {
        setError("Please fill in all required fields before continuing.");
        return false;
      }
    }
    return true;
  }

  function next() {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function back() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");
    try {
      const ref = await submitApplication({
        ...form,
        jobId: job.id,
        position: job.title,
        department: job.department,
        jobLocation: job.location,
      });
      setReferenceNumber(ref);
    } catch (err) {
      setError(
        "Something went wrong submitting your application. Please check your connection and try again. If this keeps happening, contact us at info@pinnaclefoodgroupau.com.au.",
      );
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  // ---------------------------------------------------------------------
  // CONFIRMATION SCREEN
  // ---------------------------------------------------------------------
  if (referenceNumber) {
    return (
      <div className="min-h-[70vh] flex items-center bg-paper">
        <div className="max-w-xl mx-auto px-5 sm:px-8 py-24 text-center">
          <Reveal>
            <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6">
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="eyebrow-dark mb-3">Application Received</p>
            <h1 className="font-display text-3xl sm:text-4xl text-ink mb-4">
              Thank you, {form.fullName.split(" ")[0]}!
            </h1>
            <p className="text-stone leading-relaxed mb-8">
              Your application for <strong>{job.title}</strong> has been
              received. A confirmation email has been sent to{" "}
              <strong>{form.email}</strong>. Please keep your reference number
              below for your records — you'll need it to check your application
              status.
            </p>
            <div className="inline-block px-8 py-4 bg-forest-deep text-cream font-display text-2xl tracking-wide mb-10">
              {referenceNumber}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/careers/status">Check Application Status</Button>
              <Button to="/careers" variant="outline">
                Back to Careers
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* HEADER */}
      <section className="bg-forest-deep pt-32 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-xs text-cream/50 mb-4">
            <Link to="/" className="hover:text-mustard-light transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/careers"
              className="hover:text-mustard-light transition-colors"
            >
              Careers
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/80">Apply</span>
          </p>
          <p className="eyebrow mb-3">Apply Now</p>
          <h1 className="font-display text-3xl sm:text-4xl text-cream mb-2">
            {job.title}
          </h1>
          <p className="text-cream/70 text-sm">
            {job.department} &middot; {job.location} &middot; {job.type}
          </p>
        </div>
      </section>

      {/* PROGRESS */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 -mt-6">
        <div className="bg-white border border-ink/10 shadow-sm px-6 py-5 flex flex-wrap gap-x-6 gap-y-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  i < step
                    ? "bg-forest text-cream"
                    : i === step
                      ? "bg-mustard text-forest-deep"
                      : "bg-ink/10 text-stone"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </span>
              <span
                className={`text-xs uppercase tracking-wide ${i === step ? "text-ink font-semibold" : "text-stone"}`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FORM BODY */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <Reveal className="bg-white border border-ink/10 p-6 sm:p-10">
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-ink mb-2">
                Personal Details
              </h2>
              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <input
                  className={inputCls}
                  value={form.fullName}
                  onChange={update("fullName")}
                  placeholder="Jane Smith"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <FieldLabel required>Email Address</FieldLabel>
                  <input
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@email.com"
                  />
                </div>
                <div>
                  <FieldLabel required>Phone Number</FieldLabel>
                  <input
                    type="tel"
                    className={inputCls}
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="04xx xxx xxx"
                  />
                </div>
              </div>
              <div>
                <FieldLabel required>
                  Current Location (Suburb, State)
                </FieldLabel>
                <input
                  className={inputCls}
                  value={form.location}
                  onChange={update("location")}
                  placeholder="Inverell, NSW"
                />
              </div>
              <div>
                <FieldLabel>LinkedIn Profile (Optional)</FieldLabel>
                <input
                  className={inputCls}
                  value={form.linkedin}
                  onChange={update("linkedin")}
                  placeholder="linkedin.com/in/janesmith"
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-ink mb-2">
                Position Details
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 p-4 bg-paper-tint text-sm text-stone">
                <p>
                  <span className="block text-[11px] uppercase tracking-wide text-stone/60">
                    Position
                  </span>
                  {job.title}
                </p>
                <p>
                  <span className="block text-[11px] uppercase tracking-wide text-stone/60">
                    Department
                  </span>
                  {job.department}
                </p>
                <p>
                  <span className="block text-[11px] uppercase tracking-wide text-stone/60">
                    Location
                  </span>
                  {job.location}
                </p>
              </div>
              <div>
                <FieldLabel required>Preferred Employment Type</FieldLabel>
                <select
                  className={inputCls}
                  value={form.employmentType}
                  onChange={update("employmentType")}
                >
                  <option value="">Select an option</option>
                  {EMPLOYMENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <FieldLabel required>Earliest Availability Date</FieldLabel>
                <input
                  type="date"
                  className={inputCls}
                  value={form.availabilityDate}
                  onChange={update("availabilityDate")}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-ink mb-2">Documents</h2>
              <div>
                <FieldLabel required>CV / Resume (PDF or Word)</FieldLabel>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className={inputCls}
                  onChange={update("resume")}
                />
                {form.resume && (
                  <p className="mt-2 text-xs text-forest">{form.resume.name}</p>
                )}
              </div>
              <div>
                <FieldLabel>Cover Letter (Optional)</FieldLabel>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className={inputCls}
                  onChange={update("coverLetter")}
                />
                {form.coverLetter && (
                  <p className="mt-2 text-xs text-forest">
                    {form.coverLetter.name}
                  </p>
                )}
              </div>
              <p className="text-xs text-stone/70">
                Accepted formats: PDF, DOC, DOCX. Maximum file size 10MB.
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-ink mb-2">
                Additional Information
              </h2>
              <div>
                <FieldLabel required>
                  Do you have the right to work in Australia?
                </FieldLabel>
                <select
                  className={inputCls}
                  value={form.rightToWork}
                  onChange={update("rightToWork")}
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <FieldLabel required>
                  How did you hear about this role?
                </FieldLabel>
                <select
                  className={inputCls}
                  value={form.referralSource}
                  onChange={update("referralSource")}
                >
                  <option value="">Select an option</option>
                  {REFERRAL_SOURCES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <FieldLabel>
                  Anything else you'd like us to know? (Optional)
                </FieldLabel>
                <textarea
                  rows={5}
                  className={inputCls}
                  value={form.coverNote}
                  onChange={update("coverNote")}
                  placeholder="Tell us a little about yourself..."
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-ink mb-2">
                Review Your Application
              </h2>
              <p className="text-sm text-stone mb-4">
                Please check your details below before submitting.
              </p>
              <div className="divide-y divide-ink/10 border border-ink/10 text-sm">
                {[
                  ["Full Name", form.fullName],
                  ["Email", form.email],
                  ["Phone", form.phone],
                  ["Location", form.location],
                  ["LinkedIn", form.linkedin || "—"],
                  ["Position", job.title],
                  ["Employment Type", form.employmentType],
                  ["Availability", form.availabilityDate],
                  ["CV / Resume", form.resume?.name || "—"],
                  ["Cover Letter", form.coverLetter?.name || "Not provided"],
                  ["Right to Work in Australia", form.rightToWork],
                  ["Heard About Us Via", form.referralSource],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 px-4 py-3"
                  >
                    <span className="text-stone/70">{label}</span>
                    <span className="text-ink font-medium text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone/70">
                By submitting, you consent to Pinnacle Food Group storing and
                processing this information as part of our recruitment process,
                in line with our{" "}
                <Link
                  to="/legal#privacy-policy"
                  className="underline hover:text-forest"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="mt-10 flex justify-between">
            <Button
              variant="outline"
              onClick={back}
              className={step === 0 ? "invisible" : ""}
            >
              Back
            </Button>
            {step < STEPS.length - 1 ? (
              <Button onClick={next}>Continue</Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className={submitting ? "opacity-60 pointer-events-none" : ""}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
