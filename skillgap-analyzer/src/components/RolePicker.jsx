import { motion } from "framer-motion";

export default function RolePicker({ roles, selectedId, onSelect, loading }) {
  if (loading) {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="surface h-36 animate-pulse rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {roles.map((role, index) => {
        const active = selectedId === role.id;
        return (
          <motion.button
            key={role.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            onClick={() => onSelect(role.id)}
            className={`rounded-2xl p-5 text-left transition ${
              active
                ? "bg-[var(--brand)] text-white shadow-lg shadow-[rgba(10,92,64,0.28)]"
                : "surface hover:-translate-y-0.5 hover:bg-white/90"
            }`}
          >
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${active ? "text-white/70" : "text-[var(--accent)]"}`}>
              {role.skillCount} skills
            </p>
            <h3 className="font-display mt-2 text-xl font-bold">{role.name}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${active ? "text-white/85" : "muted"}`}>
              {role.tagline}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
}
