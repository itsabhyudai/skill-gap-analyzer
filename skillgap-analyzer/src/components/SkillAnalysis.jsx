import { motion } from "framer-motion";

function SkillList({ title, items, tone }) {
  const border =
    tone === "good"
      ? "border-[var(--good)]"
      : tone === "bad"
        ? "border-[var(--bad)]"
        : "border-[var(--brand)]";

  const heading =
    tone === "good"
      ? "text-[var(--good)]"
      : tone === "bad"
        ? "text-[var(--bad)]"
        : "text-[var(--brand)]";

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`surface rounded-2xl border-l-4 p-6 ${border}`}
    >
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h3 className={`font-display text-xl font-bold ${heading}`}>{title}</h3>
        <span className="muted text-sm">{items.length}</span>
      </div>

      {items.length === 0 ? (
        <p className="muted text-sm">Nothing here yet.</p>
      ) : (
        <ul className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <li
              key={skill.id || skill.name}
              className="rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-sm font-medium"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  );
}

export default function SkillAnalysis({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <SkillList title="Matched" items={analysis.matched || []} tone="good" />
      <SkillList title="Skill gaps" items={analysis.missing || []} tone="bad" />
      <SkillList title="Bonus skills" items={analysis.bonus || []} tone="brand" />
    </div>
  );
}
