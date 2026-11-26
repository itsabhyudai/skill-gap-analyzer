import { motion } from "framer-motion";

/**
 * Full-bleed visual plane for the landing hero — skill constellation map.
 */
export default function HeroVisual() {
  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden grid-noise">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a5c40 0%, #0c3d2e 42%, #12352c 70%, #1a2e28 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(255,92,26,0.45), transparent 40%), radial-gradient(circle at 20% 80%, rgba(184,224,0,0.25), transparent 35%)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        fill="none"
        aria-hidden="true"
      >
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            [120, 140],
            [280, 90],
            [450, 160],
            [620, 110],
            [200, 300],
            [380, 280],
            [560, 320],
            [700, 260],
            [160, 460],
            [340, 430],
            [520, 480],
            [680, 420],
          ].map(([x, y], i) => (
            <motion.circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 7 : 4.5}
              fill={i % 4 === 0 ? "#ff5c1a" : "#b8e000"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ delay: 0.15 + i * 0.05, type: "spring", stiffness: 180 }}
            />
          ))}

          <motion.path
            d="M120 140 L280 90 L450 160 L620 110 M200 300 L380 280 L560 320 L700 260 M160 460 L340 430 L520 480 L680 420 M280 90 L200 300 L160 460 M450 160 L380 280 L340 430 M620 110 L560 320 L520 480"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </motion.g>

        <motion.text
          x="64"
          y="540"
          fill="rgba(255,255,255,0.7)"
          fontFamily="Syne, sans-serif"
          fontSize="18"
          fontWeight="700"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Your skills · mapped to the role
        </motion.text>
      </svg>

      <motion.div
        className="absolute right-8 top-10 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md sm:right-12 sm:top-16"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-white/70">Match score</p>
        <p className="font-display text-4xl font-extrabold">78%</p>
      </motion.div>
    </div>
  );
}
