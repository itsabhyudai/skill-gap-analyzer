import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] py-10">
      <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">
            Skill<span className="text-[var(--brand)]">Gap</span>
          </p>
          <p className="muted mt-1 text-sm">
            Know where you stand. Close the gap with intent.
          </p>
        </div>
        <div className="flex gap-5 text-sm text-[var(--muted)]">
          <Link to="/analyze" className="hover:text-[var(--ink)]">
            Analyze resume
          </Link>
          <a
            href="https://github.com/itsabhyudai/skill-gap-analyzer"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--ink)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
