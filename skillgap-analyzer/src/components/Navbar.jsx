import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/analyze", label: "Analyze" },
  { to: "/results", label: "Results" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(244,247,244,0.82)] backdrop-blur-md"
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-[var(--ink)] sm:text-2xl">
          Skill<span className="text-[var(--brand)]">Gap</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-medium transition sm:px-4 ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "text-[var(--muted)] hover:bg-white/70 hover:text-[var(--ink)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/analyze" className="btn-primary ml-1 hidden !px-4 !py-2 sm:inline-flex">
            Start free
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
