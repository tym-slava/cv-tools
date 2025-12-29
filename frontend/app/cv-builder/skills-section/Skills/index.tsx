import React from "react";

import CommonSwitcher from "@/common-components/CommonSwitcher";
import SkillsList from "@/app/cv-builder/skills-section/SkillsList";

const Skills: React.FC = () => {
  return (
    <div className="skills__component">
      <CommonSwitcher labelText={"Enable section"} />

      <SkillsList />
    </div>
  );
};

export default Skills;
