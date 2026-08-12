const { skills } = require("../data/skills");
const { roles } = require("../data/roles");
const { recommendations } = require("../data/recommendations");

/**
 * Escape special regex characters in a string.
 */
function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Build a word-boundary-aware pattern for an alias.
 * Treat letters/digits as part of tokens so "java" does not match inside "javascript",
 * while still allowing punctuation such as "React." or "Node.js,".
 */
function aliasPattern(alias) {
  const trimmed = alias.trim().toLowerCase();
  const escaped = escapeRegex(trimmed);
  return new RegExp(`(?:^|[^a-z0-9])${escaped}(?:$|[^a-z0-9])`, "i");
}

/**
 * Detect which catalog skills appear in resume text.
 */
function detectSkills(resumeText) {
  const text = ` ${resumeText.toLowerCase()} `;
  const detected = [];

  for (const skill of skills) {
    const aliases = [skill.name, ...(skill.aliases || [])];
    const matched = aliases.some((alias) => aliasPattern(alias).test(text));
    if (matched) {
      detected.push({
        id: skill.id,
        name: skill.name,
        category: skill.category,
      });
    }
  }

  return detected;
}

/**
 * Analyze detected skills against a target role (or the full catalog).
 */
function analyzeAgainstRole(detected, roleId) {
  const detectedIds = new Set(detected.map((s) => s.id));
  const role = roleId ? roles.find((r) => r.id === roleId) : null;

  const targetSkillIds = role
    ? role.skillIds.filter((id) => skills.some((s) => s.id === id))
    : skills.map((s) => s.id);

  const required = targetSkillIds
    .map((id) => skills.find((s) => s.id === id))
    .filter(Boolean)
    .map((s) => ({ id: s.id, name: s.name, category: s.category }));

  const matched = required.filter((s) => detectedIds.has(s.id));
  const missing = required.filter((s) => !detectedIds.has(s.id));
  const bonus = detected.filter((s) => !targetSkillIds.includes(s.id));

  const matchScore =
    required.length === 0
      ? 0
      : Math.round((matched.length / required.length) * 100);

  const learningPath = missing.map((skill) => ({
    skillId: skill.id,
    skillName: skill.name,
    category: skill.category,
    resources: recommendations[skill.id] || [
      {
        title: `Search learning resources for ${skill.name}`,
        url: `https://www.google.com/search?q=${encodeURIComponent(skill.name + " tutorial")}`,
        type: "Search",
        provider: "Web",
      },
    ],
  }));

  return {
    role: role
      ? {
          id: role.id,
          name: role.name,
          tagline: role.tagline,
          description: role.description,
        }
      : {
          id: "general",
          name: "General Tech Profile",
          tagline: "Broad scan across the full skill catalog",
          description:
            "Compares your resume against every skill we track — useful for a baseline inventory.",
        },
    summary: {
      matchScore,
      requiredCount: required.length,
      matchedCount: matched.length,
      missingCount: missing.length,
      bonusCount: bonus.length,
      level:
        matchScore >= 85
          ? "Strong fit"
          : matchScore >= 65
            ? "Solid foundation"
            : matchScore >= 40
              ? "Growing"
              : "Early stage",
    },
    matched,
    missing,
    bonus,
    learningPath,
    allDetected: detected,
  };
}

module.exports = { detectSkills, analyzeAgainstRole };
