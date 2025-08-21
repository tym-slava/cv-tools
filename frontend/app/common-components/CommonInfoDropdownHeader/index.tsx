import React, { useState } from "react";
import { Eye, EyeClosed, Grip } from "lucide-react";

interface CommonInfoDropdownHeaderProps {
  title: string;
  setShowDropdown: (show: boolean) => void;
  dragHandleProps?: any;
}

function CommonInfoDropdownHeader(props: CommonInfoDropdownHeaderProps) {
  const { title, setShowDropdown, dragHandleProps } = props;

  const [visibleInfo, setVisibleInfo] = useState(true);

  return (
    <div className="common-info-dropdown-header__component w-full mb-4 flex items-center gap-2 cursor-pointer">
      <div
        className="triger-button w-fit flex-shrink-0"
        {...dragHandleProps}
      >
        <Grip />
      </div>

      <div
        role="button"
        tabIndex={0}
        className="title px-2 text-ellipsis text-left cursor-pointer line-clamp-2 w-full whitespace-pre-wrap leading-[1.2] overflow-hidden text-sm"
        onClick={() => setShowDropdown(true)}
        onKeyDown={(e) => e.key === "Enter" && setShowDropdown(true)}
      >
        <p>{title}</p>
      </div>

      <div
        role="button"
        tabIndex={0}
        className="icon-wrapper flex-shrink-0 ml-auto"
        onClick={() => setVisibleInfo(!visibleInfo)}
      >
        {visibleInfo ? <Eye /> : <EyeClosed />}
      </div>
    </div>
  );
}

export default CommonInfoDropdownHeader;
