import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { getApplicationByReference } from "../lib/applications";
import { usePageTitle } from "../hooks/usePageTitle";

const STATUS_LABELS = {
  received: {
    label: "Application Received",
    color: "bg-forest/10 text-forest",
  },
  reviewing: { label: "Under Review", color: "bg-mustard/15 text-mustard" },
  interview: { label: "Interview Stage", color: "bg-navy/10 text-navy" },
  offer: { label: "Offer Extended", color: "bg-forest/10 text-forest" },
  unsuccessful: {
    label: "Not Successful This Time",
    color: "bg-ink/10 text-stone",
  },
};

export default function ApplicationStatus() {
  usePageTitle("Check Application Status");
  const [refInput, setRefInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    if (!refInput.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const app = await getApplicationByReference(refInput);
      if (!app) {
        setError(
          "No application found with that reference number. Please double-check and try again.",
        );
      } else {
        setResult(app);
      }
    } catch (err) {
      setError(
        "Something went wrong looking up your application. Please try again in a moment.",
      );
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const statusInfo = result
    ? STATUS_LABELS[result.status] || STATUS_LABELS.received
    : null;

  return (
    <div className="min-h-screen bg-paper">
      <section className="bg-forest-deep pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
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
            <span className="text-cream/80">Application Status</span>
          </p>
          <p className="eyebrow mb-3">Careers</p>
          <h1 className="font-display text-3xl sm:text-4xl text-cream mb-3">
            Check Your Application Status
          </h1>
          <p className="text-cream/70 text-sm sm:text-base">
            Enter the reference number you received when you submitted your
            application.
          </p>
        </div>
      </section>

      <div className="max-w-xl mx-auto px-5 sm:px-8 -mt-8 pb-24">
        <Reveal className="bg-white border border-ink/10 shadow-sm p-6 sm:p-8">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              className="flex-1 border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:border-forest transition-colors uppercase"
              placeholder="e.g. PFG-2026-4K7QZ2"
              value={refInput}
              onChange={(e) => setRefInput(e.target.value)}
            />
            <Button className={loading ? "opacity-60 pointer-events-none" : ""}>
              {loading ? "Searching..." : "Check Status"}
            </Button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-sm text-red-700">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-8 pt-8 border-t border-ink/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone/60 mb-1">
                    Reference Number
                  </p>
                  <p className="font-display text-xl text-ink">
                    {result.referenceNumber}
                  </p>
                </div>
                <span
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide rounded-full ${statusInfo.color}`}
                >
                  {statusInfo.label}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone/70">Applicant</span>
                  <span className="text-ink font-medium">
                    {result.fullName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone/70">Position</span>
                  <span className="text-ink font-medium">
                    {result.position}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone/70">Department</span>
                  <span className="text-ink font-medium">
                    {result.department}
                  </span>
                </div>
              </div>
              <p className="mt-6 text-xs text-stone/70 leading-relaxed">
                Our recruitment team will update your status as your application
                progresses. If you have questions, contact us at{" "}
                <a
                  href="mailto:info@pinnaclefoodgroupau.com.au"
                  className="underline hover:text-forest"
                >
                  info@pinnaclefoodgroupau.com.au
                </a>
                .
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}
