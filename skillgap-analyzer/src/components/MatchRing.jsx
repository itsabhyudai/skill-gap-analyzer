import { motion } from "framer-motion";

export default function MatchRing({ score = 0, level = "" }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, score)) / 100) * circumference;
  const tone =
    score >= 85 ? "var(--good)" : score >= 65 ? "var(--brand)" : score >= 40 ? "var(--warn)" : "var(--bad)";

  return (
    <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
      <svg width="160" height="160" viewBox="0 0 140 140" className="-rotate-90">
        <circle cx="70" cy="70" r={radius} stroke="rgba(12,31,23,0.1)" strokeWidth="10" fill="none" />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          stroke={tone}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="font-display text-4xl font-extrabold leading-none">{score}%</p>
        <p className="muted mt-1 text-xs font-medium uppercase tracking-wide">{level}</p>
      </div>
    </div>
  );
}
