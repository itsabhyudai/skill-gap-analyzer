import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MatchRing from "../components/MatchRing";
import SkillAnalysis from "../components/SkillAnalysis";
import Recommendations from "../components/Recommendations";
import { loadAnalysis, getHistory } from "../lib/storage";

export default function Results() {
  const [analysis, setAnalysis] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setAnalysis(loadAnalysis());
    setHistory(getHistory());
  }, []);

  if (!analysis) {
    return (
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">No analysis yet</h1>
        <p className="muted mt-3 max-w-md">
          Upload a resume and pick a role to generate your match score and learning path.
        </p>
        <Link to="/analyze" className="btn-primary mt-8">
          Go to Analyze
        </Link>

        {history.length > 0 && (
          <div className="mt-12 w-full max-w-lg text-left">
            <h2 className="font-display text-lg font-bold">Recent on this device</h2>
            <ul className="mt-3 space-y-2">
              {history.map((item) => (
                <li
                  key={item.id}
                  className="surface flex items-center justify-between rounded-xl px-4 py-3 text-sm"
                >
                  <span>
                    {item.fileName} · {item.roleName}
                  </span>
                  <span className="font-semibold text-[var(--brand)]">{item.matchScore}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  const { summary, role, meta, learningPath } = analysis;

  return (
    <div className="shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Results
          </p>
          <h1 className="font-display mt-2 text-4xl font-extrabold sm:text-5xl">
            {role?.name || "Your analysis"}
          </h1>
          <p className="muted mt-3 text-lg">{role?.tagline}</p>
          <p className="muted mt-2 text-sm">
            {meta?.fileName}
            {meta?.analyzedAt
              ? ` · ${new Date(meta.analyzedAt).toLocaleString()}`
              : ""}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/analyze" className="btn-ghost">
            Run another
          </Link>
          <a href="#learning-path" className="btn-primary">
            View learning path
          </a>
        </div>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[220px_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="surface flex flex-col items-center rounded-2xl p-6"
        >
          <MatchRing score={summary?.matchScore || 0} level={summary?.level || ""} />
          <dl className="mt-4 grid w-full grid-cols-2 gap-3 text-center text-sm">
            <div className="rounded-xl bg-white/60 p-3">
              <dt className="muted">Matched</dt>
              <dd className="font-display text-xl font-bold">{summary?.matchedCount ?? 0}</dd>
            </div>
            <div className="rounded-xl bg-white/60 p-3">
              <dt className="muted">Gaps</dt>
              <dd className="font-display text-xl font-bold">{summary?.missingCount ?? 0}</dd>
            </div>
            <div className="rounded-xl bg-white/60 p-3">
              <dt className="muted">Required</dt>
              <dd className="font-display text-xl font-bold">{summary?.requiredCount ?? 0}</dd>
            </div>
            <div className="rounded-xl bg-white/60 p-3">
              <dt className="muted">Bonus</dt>
              <dd className="font-display text-xl font-bold">{summary?.bonusCount ?? 0}</dd>
            </div>
          </dl>
        </motion.div>

        <div className="space-y-4">
          <SkillAnalysis analysis={analysis} />
        </div>
      </div>

      <section id="learning-path" className="mt-14">
        <h2 className="font-display text-3xl font-extrabold">Learning path</h2>
        <p className="muted mt-2 max-w-2xl">
          Prioritized resources for each missing skill — docs, courses, and guides you can start today.
        </p>
        <div className="mt-6">
          <Recommendations learningPath={learningPath || []} />
        </div>
      </section>
    </div>
  );
}
