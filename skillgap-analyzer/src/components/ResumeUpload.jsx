import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MAX_MB = 5;

export default function ResumeUpload({ file, onFileChange, disabled }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [localError, setLocalError] = useState("");

  const validateAndSet = (nextFile) => {
    setLocalError("");
    if (!nextFile) return;

    const isPdf =
      nextFile.type === "application/pdf" ||
      nextFile.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      setLocalError("Please upload a PDF resume.");
      onFileChange(null);
      return;
    }

    if (nextFile.size > MAX_MB * 1024 * 1024) {
      setLocalError(`File is too large. Max ${MAX_MB} MB.`);
      onFileChange(null);
      return;
    }

    onFileChange(nextFile);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files?.[0];
    validateAndSet(dropped);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={`rounded-2xl border-2 border-dashed p-8 text-center transition ${
          dragOver
            ? "border-[var(--brand)] bg-[rgba(10,92,64,0.08)]"
            : "border-[var(--line)] bg-white/50"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          disabled={disabled}
          onChange={(e) => validateAndSet(e.target.files?.[0] || null)}
        />

        <p className="font-display text-xl font-bold">Drop your resume PDF</p>
        <p className="muted mt-2 text-sm">or click to browse · max {MAX_MB} MB · text-based PDFs work best</p>

        <button
          type="button"
          className="btn-ghost mt-5"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
        >
          Choose file
        </button>

        {file && (
          <p className="mt-4 text-sm font-medium text-[var(--good)]">
            Ready: {file.name} ({(file.size / 1024).toFixed(0)} KB)
          </p>
        )}
      </motion.div>

      {localError && (
        <p className="mt-3 text-sm font-medium text-[var(--bad)]" role="alert">
          {localError}
        </p>
      )}
    </div>
  );
}
