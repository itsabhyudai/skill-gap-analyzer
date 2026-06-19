import { motion } from "framer-motion";
import ResumeUpload from "../components/ResumeUpload";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Identify Your Skill Gaps 🚀
      </motion.h1>
      <ResumeUpload />
    </div>
  );
};

export default Home;
