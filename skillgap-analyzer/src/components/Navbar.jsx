import { FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold flex items-center">
        <FaChartBar className="mr-2 text-blue-400" />
        SkillGap Analyzer
      </h1>
      <ul className="flex gap-6 text-lg">
        <li className="hover:text-blue-400 cursor-pointer transition-all">Home</li>
        <li className="hover:text-blue-400 cursor-pointer transition-all">Upload Resume</li>
        <li className="hover:text-blue-400 cursor-pointer transition-all">Analysis</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
