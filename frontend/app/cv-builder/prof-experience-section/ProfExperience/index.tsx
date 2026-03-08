import React from "react";

import CommonSwitcher from "@/common-components/CommonSwitcher";
import CommonDeleteSection from "@/common-components/CommonDeleteSection";
import ProfExperienceList from "@/app/cv-builder/prof-experience-section/ProfExperienceList";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

function ProfExperience() {
  const { enabledSections, setSectionEnabled } = useCvBuilderStore();

  return (
    <div className="prof-experience__component">
      <CommonDeleteSection sectionId="prof_experience" />
      <CommonSwitcher
        labelText={"Enable section"}
        isSelected={enabledSections?.["prof_experience"] !== false}
        onChange={(enabled) => setSectionEnabled("prof_experience", enabled)}
      />

      <ProfExperienceList />

      {/* <Input
        className="my-4"
        label="Job Title"
        placeholder="Enter Job Title"
        type="text"
      /> */}

      {/* <Input
        className="my-4"
        label="Employer"
        placeholder="Enter Employer"
        type="text"
      /> */}

      {/* <Input
        className="my-4"
        label="City"
        placeholder="Enter City"
        type="text"
      /> */}

      {/* <Input
        className="my-4"
        label="Country"
        placeholder="Enter Country"
        type="text"
      /> */}

      {/* <div className="w-full max-w-xl flex flex-row gap-4">
        <div className="w-full flex flex-col gap-1">
          <DatePicker
            defaultValue={today(getLocalTimeZone()).subtract({ days: 1 })}
            label="Start Date"
            minValue={today(getLocalTimeZone())}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <DatePicker
            defaultValue={today(getLocalTimeZone()).add({ days: 1 })}
            label="End Date"
            maxValue={today(getLocalTimeZone())}
          />
        </div>
      </div> */}

      {/* <CommonAddButton buttonText="Add Experience" /> */}
    </div>
  );
}

export default ProfExperience;
