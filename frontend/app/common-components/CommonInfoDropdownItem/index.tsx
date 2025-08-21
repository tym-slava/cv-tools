import React, { useState } from "react";

import CommonInfoDropdownHeader from "@/app/common-components/CommonInfoDropdownHeader";

interface Props {
  title: string;
  children: React.ReactNode;
  dragHandleProps?: any;
}

function CommonInfoDropdownItem({ title, children, dragHandleProps }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="common-info-dropdown-item__component">
      <CommonInfoDropdownHeader
        setShowDropdown={() => setShowDropdown(!showDropdown)}
        title={title}
        dragHandleProps={dragHandleProps}
      />

      {showDropdown && <div className="dropdown-area">{children}</div>}
    </div>
  );
}

export default CommonInfoDropdownItem;
