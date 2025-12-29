import React from "react";

import CommonSwitcher from "@/common-components/CommonSwitcher";
import LanguagesList from "@/app/cv-builder/languages-section/LanguagesList";

const Languages: React.FC = () => {
  return (
    <div className="languages__component">
      <CommonSwitcher labelText={"Enable section"} />

      <LanguagesList />
    </div>
  );
};

export default Languages;
