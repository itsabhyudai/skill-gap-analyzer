import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ResumeUpload = ({ onAnalyze }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      onAnalyze(response.data); // Pass skills to parent component
    } catch (error) {
      console.error("Error analyzing resume:", error);
    }

    setLoading(false);
  };

  return (
    <motion.div 
      className="p-6 bg-white shadow-md rounded-lg w-96 text-center border border-gray-300"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Upload Your Resume (PDF)
      </h2>

      {/* File Upload */}
      <label className="cursor-pointer border-2 border-dashed border-gray-400 p-4 w-full block rounded-md hover:bg-gray-50 transition-all">
        <input 
          type="file" 
          accept=".pdf" 
          onChange={handleFileChange} 
          className="hidden"
        />
        <p className="text-gray-500">Click to upload file</p>
      </label>

      {/* File Name */}
      {file && <p className="text-green-600 mt-3 font-medium">✔ {file.name}</p>}

      {/* Analyze Button */}
      {file && (
        <motion.button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </motion.button>
      )}
    </motion.div>
  );
};

export default ResumeUpload;
