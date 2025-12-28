import React from "react";

import CommonSwitcher from "@/app/common-components/CommonSwitcher";
import EducationList from "@/app/cv-builder/education-section/EducationList";

const Education: React.FC = () => {
  return (
    <div className="education__component">
      <CommonSwitcher labelText={"Enable section"} />

      <EducationList />
    </div>
  );
};

export default Education;
