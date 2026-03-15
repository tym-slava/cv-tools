import React from "react";

import CommonSwitcher from "@/common-components/CommonSwitcher";
import CommonDeleteSection from "@/common-components/CommonDeleteSection";
import EducationList from "@/app/cv-builder/education-section/EducationList";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

const Education: React.FC = () => {
  const { enabledSections, setSectionEnabled } = useCvBuilderStore();

  return (
    <div className="education__component">
      <CommonDeleteSection sectionId="education" />
      <CommonSwitcher
        labelText={"Enable section"}
        isSelected={enabledSections?.["education"] !== false}
        onChange={(enabled) => setSectionEnabled("education", enabled)}
      />

      <EducationList />
    </div>
  );
};

export default Education;
