import { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeUpload from "./components/ResumeUpload";
import SkillAnalysis from "./components/SkillAnalysis";

function App() {
  const [skills, setSkills] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center gap-8 p-6">
        <ResumeUpload onAnalyze={setSkills} />
        {skills && <SkillAnalysis skills={skills} />}
      </div>
    </div>
  );
}

export default App;
