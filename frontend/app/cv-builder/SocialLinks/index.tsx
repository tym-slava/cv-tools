import React from "react";
import { Input } from "@heroui/react";

import CommonSwitcher from "@/common-components/CommonSwitcher";

function SocialLinks() {
  return (
    <div className="social-links__component">
      <CommonSwitcher labelText={"Enable section"} />
      <Input
        label="Section Title"
        type="text"
      />
    </div>
  );
}

export default SocialLinks;
