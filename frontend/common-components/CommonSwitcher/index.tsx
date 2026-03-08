import React from "react";
import { Switch } from "@heroui/react";

interface CommonSwitcherProps {
  labelText: string;
  className?: string;
  isSelected?: boolean;
  onChange?: (enabled: boolean) => void;
}

function CommonSwitcher({ labelText, className, isSelected = true, onChange }: CommonSwitcherProps) {
  return (
    <div className={`common-switcher__component ${className ?? ""}`}>
      <div className="wrapper flex items-center justify-between mb-4">
        <span className="font-medium text-base">{labelText}</span>
        <Switch
          isSelected={isSelected}
          size="sm"
          onValueChange={onChange}
        />
      </div>
    </div>
  );
}

export default CommonSwitcher;
