const express = require("express");
const cors = require("cors");
const multer = require("multer");

const { skills } = require("./data/skills");
const { roles } = require("./data/roles");
const { detectSkills, analyzeAgainstRole } = require("./lib/analyzer");
const { extractPdfText } = require("./lib/pdf");

const app = express();
const PORT = process.env.PORT || 5000;
const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_BYTES },
  fileFilter: (_req, file, cb) => {
    const isPdf =
      file.mimetype === "application/pdf" ||
      (file.originalname || "").toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      return cb(new Error("Only PDF resumes are supported"));
    }
    cb(null, true);
  },
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "skillgap-api",
    version: "2.0.0",
    skills: skills.length,
    roles: roles.length,
  });
});

app.get("/api/roles", (_req, res) => {
  res.json({
    roles: roles.map((role) => ({
      id: role.id,
      name: role.name,
      tagline: role.tagline,
      description: role.description,
      skillCount: role.skillIds.filter((id) =>
        skills.some((s) => s.id === id)
      ).length,
      skills: role.skillIds
        .map((id) => skills.find((s) => s.id === id))
        .filter(Boolean)
        .map((s) => ({ id: s.id, name: s.name, category: s.category })),
    })),
  });
});

app.get("/api/skills", (_req, res) => {
  res.json({
    skills: skills.map((s) => ({
      id: s.id,
      name: s.name,
      category: s.category,
    })),
  });
});

app.post("/api/analyze", (req, res) => {
  upload.single("resume")(req, res, async (err) => {
    if (err) {
      const message =
        err.code === "LIMIT_FILE_SIZE"
          ? "File too large. Maximum size is 5 MB."
          : err.message || "Upload failed";
      return res.status(400).json({ error: message });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No resume uploaded. Please attach a PDF." });
    }

    const roleId = (req.body.roleId || req.query.roleId || "").trim() || null;
    if (roleId && !roles.some((r) => r.id === roleId)) {
      return res.status(400).json({ error: `Unknown role: ${roleId}` });
    }

    try {
      const parsed = await extractPdfText(req.file.buffer);
      const resumeText = parsed.text || "";

      if (!resumeText.trim()) {
        return res.status(422).json({
          error:
            "Could not extract text from this PDF. Try a text-based resume (not a scanned image).",
        });
      }

      const detected = detectSkills(resumeText);
      const analysis = analyzeAgainstRole(detected, roleId);

      res.json({
        meta: {
          fileName: req.file.originalname,
          fileSize: req.file.size,
          pages: parsed.numpages || null,
          analyzedAt: new Date().toISOString(),
        },
        ...analysis,
      });
    } catch (error) {
      console.error("Analyze error:", error);
      res.status(500).json({
        error: "Failed to analyze resume. Ensure the file is a valid PDF.",
      });
    }
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Unexpected server error" });
});

app.listen(PORT, () => {
  console.log(`SkillGap API running on http://localhost:${PORT}`);
});
