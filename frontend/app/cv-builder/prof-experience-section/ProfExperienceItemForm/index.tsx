import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input, Form, DateValue } from "@heroui/react";
import { parseDate } from "@internationalized/date";

import CommonTextArea from "@/common-components/CommonTextArea";
import CommonInfoModalItem from "@/common-components/CommonInfoModalItem";
import DateRangePicker from "@/common-components/DateRangePicker";
import { useCvBuilderStore, type ProfExperience } from "@/store/useCvBuilderStore";

interface ProfExperienceItemFormProps {
  id: string;
  experience: ProfExperience;
}

function ProfExperienceItemForm({ id, experience }: ProfExperienceItemFormProps) {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({ id });
  const { updateProfExperience, deleteProfExperience, toggleProfExperienceVisibility } =
    useCvBuilderStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    jobTitle: experience?.jobTitle || "",
    employer: experience?.employer || "",
    location: experience?.location || "",
    startDate:
      experience?.startDate && experience.startDate !== "" ? parseDate(experience.startDate) : null,
    endDate:
      experience?.endDate && experience.endDate !== "" ? parseDate(experience.endDate) : null,
    isCurrentlyWorking: experience?.isCurrentlyWorking || false,
    description: experience?.description || "",
  });

  // Sync form data with store on external changes
  useEffect(() => {
    setFormData({
      jobTitle: experience?.jobTitle || "",
      employer: experience?.employer || "",
      location: experience?.location || "",
      startDate:
        experience?.startDate && experience.startDate !== ""
          ? parseDate(experience.startDate)
          : null,
      endDate:
        experience?.endDate && experience.endDate !== "" ? parseDate(experience.endDate) : null,
      isCurrentlyWorking: experience?.isCurrentlyWorking || false,
      description: experience?.description || "",
    });
  }, [experience]);

  // Auto-open modal for newly added items
  useEffect(() => {
    if (experience?.isNew) {
      setIsModalOpen(true);
      // Clear the isNew flag after opening
      updateProfExperience(id, { isNew: false });
    }
  }, [experience?.isNew, id, updateProfExperience]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    updateProfExperience(id, { [field]: value });
  };

  const handleDateChange = (field: "startDate" | "endDate", value: DateValue | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    updateProfExperience(id, { [field]: value?.toString() || "" });
  };

  const handlePresentChange = (isPresent: boolean) => {
    setFormData((prev) => ({
      ...prev,
      isCurrentlyWorking: isPresent,
      endDate: isPresent ? null : prev.endDate,
    }));
    updateProfExperience(id, {
      isCurrentlyWorking: isPresent,
      endDate: isPresent ? "" : formData.endDate?.toString() || "",
    });
  };

  const handleDescriptionChange = (description: string) => {
    setFormData((prev) => ({ ...prev, description }));
    updateProfExperience(id, { description });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfExperience(id, {
      ...formData,
      startDate: formData.startDate?.toString() || "",
      endDate: formData.endDate?.toString() || "",
    });
  };

  const handleDelete = () => {
    deleteProfExperience(id);
  };

  const handleToggleVisibility = () => {
    toggleProfExperienceVisibility(id);
  };

  return (
    <div
      ref={setNodeRef}
      className="prof-experience-item-form__component"
      style={style}
      {...attributes}
    >
      <CommonInfoModalItem
        title={experience?.jobTitle || "New Entry"}
        isOpen={isModalOpen}
        dragHandleProps={{ ref: setActivatorNodeRef, ...listeners }}
        isVisible={experience?.isVisible ?? true}
        onOpenChange={setIsModalOpen}
        onToggleVisibility={handleToggleVisibility}
        onDelete={handleDelete}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            label="Job Title"
            type="text"
            className="w-full mb-4"
            value={formData.jobTitle}
            classNames={{ inputWrapper: "bg-white/50 dark:bg-white/5" }}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          />
          <Input
            label="Employer"
            type="text"
            className="w-full mb-4"
            value={formData.employer}
            classNames={{ inputWrapper: "bg-white/50 dark:bg-white/5" }}
            onChange={(e) => handleInputChange("employer", e.target.value)}
          />
          <div className="mb-4 w-full">
            <DateRangePicker
              startDate={formData.startDate}
              endDate={formData.endDate}
              isPresent={formData.isCurrentlyWorking}
              onStartDateChange={(value) => handleDateChange("startDate", value)}
              onEndDateChange={(value) => handleDateChange("endDate", value)}
              onPresentChange={handlePresentChange}
            />
          </div>
          <Input
            label="Location"
            type="text"
            className="w-full mb-4"
            value={formData.location}
            classNames={{ inputWrapper: "bg-white/50 dark:bg-white/5" }}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
          <div className="w-full mb-4">
            <CommonTextArea
              labelText="Description"
              placeholder="Enter your description"
              tooltipContent="Describe what you did: your responsibilities, the projects you were in charge of, and the improvements or results you achieved. This will help demonstrate your experience to employers."
              initialValue={formData.description}
              onChange={handleDescriptionChange}
            />
          </div>
        </Form>
      </CommonInfoModalItem>
    </div>
  );
}

export default ProfExperienceItemForm;
