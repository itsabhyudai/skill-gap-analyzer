import { motion } from "framer-motion";
import SkillAnalysis from "../components/SkillAnalysis";

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1 
        className="text-3xl font-bold text-gray-800 text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skill Analysis Report
      </motion.h1>
      <SkillAnalysis />
    </div>
  );
};

export default Analysis;
