const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer: Handles file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Sample Skill Database (Replace with real DB later)
const skillDatabase = [
  "JavaScript", "React", "Node.js", "MongoDB",
  "Python", "Django", "SQL", "TypeScript",
  "Data Structures", "Algorithms"
];

// Endpoint to upload & analyze resume
app.post("/upload", upload.single("resume"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  try {
    const pdfText = await pdfParse(req.file.buffer);
    const resumeText = pdfText.text.toLowerCase();

    // Extract skills from resume
    const detectedSkills = skillDatabase.filter(skill => resumeText.includes(skill.toLowerCase()));

    // Find missing skills
    const missingSkills = skillDatabase.filter(skill => !detectedSkills.includes(skill));

    res.json({ detected: detectedSkills, missing: missingSkills });
  } catch (error) {
    res.status(500).json({ error: "Error analyzing resume" });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
