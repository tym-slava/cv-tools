import React from "react";

import CommonSwitcher from "@/common-components/CommonSwitcher";
import CommonDeleteSection from "@/common-components/CommonDeleteSection";
import LanguagesList from "@/app/cv-builder/languages-section/LanguagesList";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

const Languages: React.FC = () => {
  const { enabledSections, setSectionEnabled } = useCvBuilderStore();

  return (
    <div className="languages__component">
      <CommonDeleteSection sectionId="languages" />
      <CommonSwitcher
        labelText={"Enable section"}
        isSelected={enabledSections?.["languages"] !== false}
        onChange={(enabled) => setSectionEnabled("languages", enabled)}
      />

      <LanguagesList />
    </div>
  );
};

export default Languages;
