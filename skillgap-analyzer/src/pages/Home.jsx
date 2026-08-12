import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroVisual from "../components/HeroVisual";

const steps = [
  {
    n: "01",
    title: "Pick a target role",
    copy: "Frontend, backend, data, DevOps — choose where you want to land.",
  },
  {
    n: "02",
    title: "Upload your resume",
    copy: "We read the PDF and map skills with alias-aware matching.",
  },
  {
    n: "03",
    title: "Close the gaps",
    copy: "Get a match score plus a curated learning path for every missing skill.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero: brand + one headline + one line + CTA + full-bleed visual */}
      <section className="relative overflow-hidden">
        <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
          <div className="shell flex flex-col justify-center py-16 lg:py-20">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl"
            >
              Skill<span className="text-[var(--brand)]">Gap</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="mt-6 max-w-xl text-2xl font-semibold leading-snug text-[var(--ink)] sm:text-3xl"
            >
              See the skills standing between you and the role you want.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.45 }}
              className="muted mt-4 max-w-md text-base leading-relaxed sm:text-lg"
            >
              Upload a resume, pick a career target, and get a clear score with a practical learning path.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/analyze" className="btn-primary">
                Analyze my resume
              </Link>
              <a href="#how-it-works" className="btn-ghost">
                How it works
              </a>
            </motion.div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="shell py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-extrabold sm:text-4xl"
        >
          Three steps. Zero fluff.
        </motion.h2>
        <p className="muted mt-3 max-w-xl">
          Built for job seekers who want signal, not another generic checklist.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.article
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--line)] bg-white/55 p-6"
            >
              <p className="font-display text-sm font-bold text-[var(--accent)]">{step.n}</p>
              <h3 className="font-display mt-3 text-xl font-bold">{step.title}</h3>
              <p className="muted mt-2 text-sm leading-relaxed">{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="shell pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--ink)] px-8 py-12 text-white sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
          />
          <h2 className="font-display max-w-xl text-3xl font-extrabold sm:text-4xl">
            Stop guessing what to learn next.
          </h2>
          <p className="mt-4 max-w-lg text-white/75">
            SkillGap compares your resume against real role profiles and hands you a prioritized path forward.
          </p>
          <Link to="/analyze" className="btn-primary mt-8 !bg-[var(--accent)] !shadow-[0_10px_30px_rgba(255,92,26,0.35)]">
            Start analysis
          </Link>
        </div>
      </section>
    </div>
  );
}
