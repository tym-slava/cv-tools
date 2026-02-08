import React from "react";
import { DatePicker, Checkbox, DateValue } from "@heroui/react";

interface DateRangePickerProps {
  startDate: DateValue | null;
  endDate: DateValue | null;
  isPresent?: boolean;
  onStartDateChange: (value: DateValue | null) => void;
  onEndDateChange: (value: DateValue | null) => void;
  onPresentChange?: (value: boolean) => void;
  startLabel?: string;
  endLabel?: string;
  presentLabel?: string;
  showPresent?: boolean;
}

function DateRangePicker({
  startDate,
  endDate,
  isPresent = false,
  onStartDateChange,
  onEndDateChange,
  onPresentChange,
  startLabel = "Start Date",
  endLabel = "End Date",
  presentLabel = "Present",
  showPresent = true,
}: DateRangePickerProps) {
  const handlePresentChange = (checked: boolean) => {
    if (onPresentChange) {
      onPresentChange(checked);
    }
    if (checked) {
      onEndDateChange(null);
    }
  };

  return (
    <div className="date-range-picker__component w-full flex flex-col sm:flex-row gap-4">
      <DatePicker
        label={startLabel}
        className="w-full"
        value={startDate}
        onChange={onStartDateChange}
      />

      <div className="flex flex-col gap-2 w-full">
        <DatePicker
          label={endLabel}
          className="w-full"
          value={endDate}
          isDisabled={isPresent}
          onChange={onEndDateChange}
        />

        {showPresent && (
          <div className="text-right">
            <Checkbox
              size="sm"
              isSelected={isPresent}
              onValueChange={handlePresentChange}
            >
              {presentLabel}
            </Checkbox>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateRangePicker;
