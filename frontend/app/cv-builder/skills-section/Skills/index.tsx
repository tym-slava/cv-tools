import React from "react";

import CommonSwitcher from "@/common-components/CommonSwitcher";
import CommonDeleteSection from "@/common-components/CommonDeleteSection";
import SkillsList from "@/app/cv-builder/skills-section/SkillsList";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

const Skills: React.FC = () => {
  const { enabledSections, setSectionEnabled } = useCvBuilderStore();

  return (
    <div className="skills__component">
      <CommonDeleteSection sectionId="skills" />
      <CommonSwitcher
        labelText={"Enable section"}
        isSelected={enabledSections?.["skills"] !== false}
        onChange={(enabled) => setSectionEnabled("skills", enabled)}
      />

      <SkillsList />
    </div>
  );
};

export default Skills;
