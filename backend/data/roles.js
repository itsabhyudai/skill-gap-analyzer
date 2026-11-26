/**
 * Target career roles and the skills each typically requires.
 */
const roles = [
  {
    id: "frontend",
    name: "Frontend Engineer",
    tagline: "Ship polished interfaces people love to use",
    description:
      "Build responsive web UIs with modern component frameworks, accessibility, and performance in mind.",
    skillIds: [
      "javascript",
      "typescript",
      "html-css",
      "react",
      "git",
      "testing",
      "rest-apis",
      "communication",
      "agile",
    ],
  },
  {
    id: "backend",
    name: "Backend Engineer",
    tagline: "Design reliable APIs and data systems",
    description:
      "Own server-side logic, databases, APIs, and the services that keep products running.",
    skillIds: [
      "javascript",
      "nodejs",
      "python",
      "sql",
      "mongodb",
      "rest-apis",
      "docker",
      "git",
      "testing",
      "system-design",
    ],
  },
  {
    id: "fullstack",
    name: "Full-Stack Engineer",
    tagline: "Deliver features end-to-end",
    description:
      "Bridge UI and APIs — from React screens to Node services and production deploys.",
    skillIds: [
      "javascript",
      "typescript",
      "react",
      "nodejs",
      "html-css",
      "sql",
      "mongodb",
      "rest-apis",
      "git",
      "docker",
      "testing",
      "agile",
    ],
  },
  {
    id: "devops",
    name: "DevOps / Cloud Engineer",
    tagline: "Automate delivery and keep systems healthy",
    description:
      "Containers, CI/CD, cloud infrastructure, and operational excellence at scale.",
    skillIds: [
      "docker",
      "kubernetes",
      "aws",
      "ci-cd",
      "linux",
      "git",
      "python",
      "system-design",
      "sql",
      "communication",
    ],
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    tagline: "Turn data into decisions and models",
    description:
      "Analyze datasets, build ML models, and communicate insights that drive product strategy.",
    skillIds: [
      "python",
      "sql",
      "machine-learning",
      "data-analysis",
      "data-structures",
      "algorithms",
      "communication",
      "git",
      "aws",
    ],
  },
  {
    id: "software-engineer",
    name: "Software Engineer",
    tagline: "Strong foundations for any product team",
    description:
      "A balanced profile covering languages, CS fundamentals, collaboration, and shipping quality code.",
    skillIds: [
      "javascript",
      "python",
      "sql",
      "git",
      "data-structures",
      "algorithms",
      "rest-apis",
      "testing",
      "system-design",
      "agile",
      "communication",
    ],
  },
];

module.exports = { roles };
