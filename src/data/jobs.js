// Placeholder current openings — replace with the client's real, current
// vacancies before launch. Structure (id, title, department, location,
// type, summary) is what Careers.jsx and ApplyNow.jsx both read from.
export const JOBS = [
  {
    id: "production-operator-inverell",
    title: "Production Operator",
    department: "Operations",
    location: "Inverell, NSW",
    type: "Full-time",
    summary:
      "Join our production floor team, operating and monitoring processing equipment to meet daily output and quality targets.",
  },
  {
    id: "quality-assurance-officer-tamworth",
    title: "Quality Assurance Officer",
    department: "Quality & Food Safety",
    location: "Tamworth, NSW",
    type: "Full-time",
    summary:
      "Support day-to-day quality checks, documentation and compliance activities across our Tamworth facility.",
  },
  {
    id: "logistics-coordinator-brisbane",
    title: "Logistics Coordinator",
    department: "Supply Chain",
    location: "Brisbane, QLD",
    type: "Full-time",
    summary:
      "Coordinate inbound and outbound freight schedules, working closely with our distribution partners and warehouse team.",
  },
];

export function getJobById(id) {
  return JOBS.find((j) => j.id === id) || null;
}
