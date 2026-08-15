/**
 * ─────────────────────────────────────────────────────────────
 *  Selected Work — EDIT THIS FILE to add your real projects.
 *
 *  Each entry renders as a case-study card in the "Selected
 *  Work" section. Fill in the fields below; entries marked
 *  `isPlaceholder: true` show a small "placeholder" tag so you
 *  can spot them at a glance. Remove the flag when real.
 *
 *  JEPANGKU ships as an example (from the brand guidelines).
 * ─────────────────────────────────────────────────────────────
 */

export type Project = {
  /** Short project name, e.g. "JEPANGKU" */
  name: string;
  /** Category, e.g. "LEARNING PLATFORM" */
  type: string;
  /** Tech stack, e.g. "REACT · GO · POSTGRESQL" */
  stack: string;
  status: "COMPLETED" | "IN PROGRESS";
  /** Year delivered, e.g. "2024" */
  year: string;
  /** The business problem — keep it jargon-free */
  problem: string;
  /** The measurable outcome */
  outcome: string;
  /** Kris's role, e.g. "FULL-STACK DEVELOPMENT" */
  role: string;
  /** Mark true until real content is added */
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    name: "JEPANGKU",
    type: "LEARNING PLATFORM",
    stack: "REACT · GO · POSTGRESQL",
    status: "COMPLETED",
    year: "—",
    problem:
      "Language learners needed a structured way to practice and track progress online.",
    outcome:
      "A complete learning platform with progress tracking that keeps students engaged and coming back.",
    role: "FULL-STACK DEVELOPMENT",
    isPlaceholder: true,
  },
  {
    name: "YOUR PROJECT",
    type: "E.G. COMPANY WEBSITE",
    stack: "REACT · NEXT.JS",
    status: "COMPLETED",
    year: "2024",
    problem: "Describe the client's problem here — what were they struggling with?",
    outcome: "Describe the outcome — what improved after the project shipped?",
    role: "E.G. DESIGN + DEVELOPMENT",
    isPlaceholder: true,
  },
  {
    name: "YOUR PROJECT",
    type: "E.G. ADMIN DASHBOARD",
    stack: "REACT · NODE.JS · POSTGRESQL",
    status: "COMPLETED",
    year: "2024",
    problem: "Describe the client's problem here — what were they struggling with?",
    outcome: "Describe the outcome — what improved after the project shipped?",
    role: "E.G. FULL-STACK DEVELOPMENT",
    isPlaceholder: true,
  },
  {
    name: "YOUR PROJECT",
    type: "E.G. CUSTOM SOFTWARE",
    stack: "REACT · GO · POSTGRESQL",
    status: "COMPLETED",
    year: "2023",
    problem: "Describe the client's problem here — what were they struggling with?",
    outcome: "Describe the outcome — what improved after the project shipped?",
    role: "E.G. BACKEND + INTEGRATION",
    isPlaceholder: true,
  },
];
