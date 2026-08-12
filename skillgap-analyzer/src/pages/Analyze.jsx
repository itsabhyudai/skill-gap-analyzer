import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RolePicker from "../components/RolePicker";
import ResumeUpload from "../components/ResumeUpload";
import { getRoles, analyzeResume } from "../lib/api";
import { saveAnalysis } from "../lib/storage";

export default function Analyze() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [roleId, setRoleId] = useState("fullstack");
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getRoles();
        if (!alive) return;
        setRoles(data.roles || []);
        if (data.roles?.length && !data.roles.find((r) => r.id === "fullstack")) {
          setRoleId(data.roles[0].id);
        }
      } catch (err) {
        if (!alive) return;
        setError(err.message || "Could not load roles. Is the API running?");
      } finally {
        if (alive) setLoadingRoles(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!roleId) {
      setError("Select a target role to continue.");
      return;
    }
    if (!file) {
      setError("Upload a PDF resume to continue.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await analyzeResume(file, roleId);
      saveAnalysis(result);
      navigate("/results");
    } catch (err) {
      setError(err.message || "Analysis failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Analyze
        </p>
        <h1 className="font-display mt-2 text-4xl font-extrabold sm:text-5xl">
          Target a role. Upload a resume.
        </h1>
        <p className="muted mt-3 text-lg">
          We extract skills, score your fit, and build a learning path for what is missing.
        </p>
      </motion.div>

      <form onSubmit={onSubmit} className="mt-10 space-y-10">
        <section>
          <h2 className="font-display text-2xl font-bold">1. Choose your target</h2>
          <p className="muted mt-1 text-sm">Role profiles define the skills we score against.</p>
          <div className="mt-5">
            <RolePicker
              roles={roles}
              selectedId={roleId}
              onSelect={setRoleId}
              loading={loadingRoles}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">2. Upload resume</h2>
          <p className="muted mt-1 text-sm">PDF only. Prefer text-based exports over scanned images.</p>
          <div className="mt-5 max-w-2xl">
            <ResumeUpload file={file} onFileChange={setFile} disabled={submitting} />
          </div>
        </section>

        {error && (
          <div
            className="rounded-2xl border border-[rgba(180,35,24,0.25)] bg-[rgba(180,35,24,0.08)] px-4 py-3 text-sm font-medium text-[var(--bad)]"
            role="alert"
          >
            {error}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className="btn-primary" disabled={submitting || loadingRoles}>
            {submitting ? "Analyzing…" : "Run skill-gap analysis"}
          </button>
          <p className="muted text-sm">Usually finishes in a few seconds.</p>
        </div>
      </form>
    </div>
  );
}
