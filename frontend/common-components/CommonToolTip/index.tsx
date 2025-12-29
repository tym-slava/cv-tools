import React, { useState } from "react";
import { Tooltip } from "@heroui/react";
import { CircleHelp } from "lucide-react";

interface CommonToolTipProps {
  content: string;
}

function isMobile() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(pointer: coarse)").matches;
}

function CommonToolTip({ content }: CommonToolTipProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (isMobile()) setOpen((prev) => !prev);
  };

  return (
    <div className="common-tooltip__component h-auto active:border-none">
      <Tooltip
        content={content}
        isOpen={isMobile() ? open : undefined}
        radius="sm"
        showArrow={true}
        shadow="lg"
        className=" max-w-xs p-4 text-tiny text-center"
        onOpenChange={setOpen}
      >
        <CircleHelp
          className="w-[16px] cursor-pointer border-transparent"
          onClick={handleClick}
        />
      </Tooltip>
    </div>
  );
}

export default CommonToolTip;
