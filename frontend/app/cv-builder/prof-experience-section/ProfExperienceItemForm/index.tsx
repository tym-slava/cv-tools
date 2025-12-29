import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input, Form, DatePicker, DateValue } from "@heroui/react";
import { parseDate } from "@internationalized/date";

import CommonTextArea from "@/common-components/CommonTextArea";
import CommonInfoModalItem from "@/common-components/CommonInfoModalItem";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

interface ProfExperience {
  id: string;
  jobTitle: string;
  employer: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  isVisible: boolean;
}

interface ProfExperienceItemFormProps {
  id: string;
  experience: ProfExperience;
}

function ProfExperienceItemForm({ id, experience }: ProfExperienceItemFormProps) {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({ id });
  const { updateProfExperience, deleteProfExperience, toggleProfExperienceVisibility } =
    useCvBuilderStore();

  const [formData, setFormData] = useState({
    jobTitle: experience?.jobTitle || "",
    employer: experience?.employer || "",
    location: experience?.location || "",
    startDate:
      experience?.startDate && experience.startDate !== "" ? parseDate(experience.startDate) : null,
    endDate:
      experience?.endDate && experience.endDate !== "" ? parseDate(experience.endDate) : null,
    description: experience?.description || "",
  });

  // Синхронізація з даними зі store при їх зміні
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
      description: experience?.description || "",
    });
  }, [experience]);

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
        dragHandleProps={{ ref: setActivatorNodeRef, ...listeners }}
        isVisible={experience?.isVisible ?? true}
        onToggleVisibility={handleToggleVisibility}
        onDelete={handleDelete}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            label="Job Title"
            type="text"
            className="w-full mb-4"
            value={formData.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          />
          <Input
            label="Employer"
            type="text"
            className="w-full mb-4"
            value={formData.employer}
            onChange={(e) => handleInputChange("employer", e.target.value)}
          />
          <div className="date-picker-wrapper w-full flex flex-row gap-4 mb-4">
            <DatePicker
              label="Start Date"
              className="w-full"
              value={formData.startDate}
              onChange={(value) => handleDateChange("startDate", value)}
            />
            <DatePicker
              label="End Date"
              className="w-full"
              value={formData.endDate}
              onChange={(value) => handleDateChange("endDate", value)}
            />
          </div>
          <Input
            label="Location"
            type="text"
            className="w-full mb-4"
            value={formData.location}
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
