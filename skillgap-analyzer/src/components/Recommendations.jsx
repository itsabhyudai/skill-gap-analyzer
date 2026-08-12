import { motion } from "framer-motion";

export default function Recommendations({ learningPath = [] }) {
  if (!learningPath.length) {
    return (
      <div className="surface rounded-2xl p-8 text-center">
        <h3 className="font-display text-2xl font-bold">You are fully covered</h3>
        <p className="muted mt-2">
          No critical gaps for this role. Keep sharpening depth and shipping projects.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {learningPath.map((item, index) => (
        <motion.article
          key={item.skillId}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="surface rounded-2xl p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-xl font-bold">{item.skillName}</h3>
            <span className="rounded-full bg-[rgba(10,92,64,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand)]">
              {item.category}
            </span>
          </div>

          <ul className="mt-4 space-y-3">
            {(item.resources || []).map((resource) => (
              <li key={resource.url}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col rounded-xl border border-[var(--line)] bg-white/60 px-4 py-3 transition hover:border-[var(--brand)] hover:bg-white sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium group-hover:text-[var(--brand)]">{resource.title}</p>
                    <p className="muted text-sm">
                      {resource.provider} · {resource.type}
                    </p>
                  </div>
                  <span className="mt-2 text-sm font-semibold text-[var(--accent)] sm:mt-0">
                    Open →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
