import React from "react";
import { Switch } from "@heroui/react";

interface CommonSwitcherProps {
  labelText: string;
  className?: string;
}

function CommonSwitcher({ labelText, className }: CommonSwitcherProps) {
  return (
    <div className={`common-switcher__component ${className}`}>
      <div className="wrapper flex items-center justify-between mb-4">
        <span className="font-medium text-base">{labelText}</span>
        <Switch
          defaultSelected
          size="sm"
        />
      </div>
    </div>
  );
}

export default CommonSwitcher;
