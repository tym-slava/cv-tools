import React from "react";
import { Textarea } from "@heroui/react";

import CommonToolTip from "@/app/common-components/CommonToolTip";

interface CommonTextAreaProps {
  labelText?: string;
  tooltipContent?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function CommonTextArea({
  labelText,
  tooltipContent,
  initialValue,
  onChange,
  placeholder = "Enter your description",
}: CommonTextAreaProps) {
  const label = (
    <div className="flex items-center gap-1 text-left">
      <span>{labelText}</span>
      {tooltipContent && <CommonToolTip content={tooltipContent} />}
    </div>
  );

  return (
    <div className="common-textarea__component">
      {labelText && <div className="mb-2">{label}</div>}
      <Textarea
        disableAnimation
        disableAutosize
        classNames={{
          base: "w-full",
          input: "resize-y min-h-[100px]",
        }}
        placeholder={placeholder}
        value={initialValue}
        onValueChange={onChange}
      />
    </div>
  );
}

export default CommonTextArea;
