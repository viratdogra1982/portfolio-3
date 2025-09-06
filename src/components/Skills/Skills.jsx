import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const allSkills = SkillsInfo.flatMap((category) => category.skills);

  const half = Math.ceil(allSkills.length / 2);
  const topRowSkills = allSkills.slice(0, half);
  const bottomRowSkills = allSkills.slice(half);

const renderSkillsRow = (skills, animation) => (
  <div className="overflow-hidden relative w-full py-4">
    <div
      className={`flex gap-8 animate-${animation}`}
      style={{ width: "max-content" }}
    >
      {[...skills, ...skills].map((skill, index) => (
        <div
          key={skill.name + index}
          className="flex items-center gap-3 bg-[#0F1624] px-6 py-4 rounded-2xl shadow-lg 
                     transform transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_0_20px_rgba(130,69,236,0.5)]"
        >
          <img src={skill.logo} alt={skill.name} className="w-9 h-9" />
          <span className="text-white text-lg font-semibold">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

  return (
    <section
      id="skills"
      className="py-24 pb-24  font-sans relative"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills & expertise honed through various projects
        </p>
      </div>

      {}
      {renderSkillsRow(topRowSkills, "scroll-left")}

      {}
      {renderSkillsRow(bottomRowSkills, "scroll-right")}

      {}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    
    
    </section>
  );
};

export default Skills;