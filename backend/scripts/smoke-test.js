/**
 * Smoke test for skill detection + role analysis (no server required).
 */
const assert = require("assert");
const { detectSkills, analyzeAgainstRole } = require("../lib/analyzer");

const sampleResume = `
Jane Doe — Full Stack Developer
Experienced in JavaScript, TypeScript, and React. Built REST APIs with Node.js and Express.
Worked with MongoDB and PostgreSQL. Comfortable with Git, GitHub Actions, Docker, and Agile/Scrum.
Strong communicator; wrote technical docs for stakeholders.
`;

const detected = detectSkills(sampleResume);
const ids = detected.map((s) => s.id);

assert.ok(ids.includes("javascript"), "should detect JavaScript");
assert.ok(ids.includes("typescript"), "should detect TypeScript");
assert.ok(ids.includes("react"), "should detect React");
assert.ok(ids.includes("nodejs"), "should detect Node.js");
assert.ok(ids.includes("mongodb"), "should detect MongoDB");
assert.ok(ids.includes("sql"), "should detect SQL via PostgreSQL");
assert.ok(ids.includes("git"), "should detect Git");
assert.ok(ids.includes("docker"), "should detect Docker");
assert.ok(ids.includes("agile"), "should detect Agile");
assert.ok(ids.includes("communication"), "should detect Communication");

const analysis = analyzeAgainstRole(detected, "fullstack");
assert.ok(analysis.summary.matchScore > 0, "match score should be positive");
assert.ok(analysis.matched.length >= 5, "should match several fullstack skills");
assert.ok(Array.isArray(analysis.learningPath), "learning path should be an array");

const unknown = analyzeAgainstRole(detected, "frontend");
assert.strictEqual(unknown.role.id, "frontend");

console.log("Smoke test passed.");
console.log(
  `Detected ${detected.length} skills · Full-stack match ${analysis.summary.matchScore}% · Gaps ${analysis.summary.missingCount}`
);
