import { motion } from "framer-motion";

const SkillAnalysis = ({ skills }) => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* Detected Skills */}
      <motion.div 
        className="w-96 bg-white shadow-lg p-6 rounded-lg border-l-4 border-green-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-3 text-green-600">Detected Skills</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {skills.detected.map((skill, index) => (
            <motion.li 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              className="transition-all cursor-pointer"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Skill Gaps */}
      <motion.div 
        className="w-96 bg-white shadow-lg p-6 rounded-lg border-l-4 border-red-500"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-3 text-red-600">Skill Gaps</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {skills.missing.map((skill, index) => (
            <motion.li 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              className="transition-all cursor-pointer"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SkillAnalysis;
