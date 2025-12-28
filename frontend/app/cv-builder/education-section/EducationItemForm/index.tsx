import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input, Form, DatePicker, DateValue } from "@heroui/react";
import { parseDate } from "@internationalized/date";

import CommonTextArea from "@/app/common-components/CommonTextArea";
import CommonAddButton from "@/app/common-components/buttons/CommonAddButton";
import CommonInfoModalItem from "@/app/common-components/CommonInfoModalItem";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

interface Education {
  id: string;
  degree: string;
  specialty: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  isVisible: boolean;
}

interface EducationItemFormProps {
  id: string;
  education: Education;
}

const EducationItemForm: React.FC<EducationItemFormProps> = ({ id, education }) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({ id });
  const { updateEducation, deleteEducation, toggleEducationVisibility } = useCvBuilderStore();

  const [formData, setFormData] = useState({
    degree: education?.degree || "",
    specialty: education?.specialty || "",
    startDate:
      education?.startDate && education.startDate !== "" ? parseDate(education.startDate) : null,
    endDate: education?.endDate && education.endDate !== "" ? parseDate(education.endDate) : null,
    location: education?.location || "",
    description: education?.description || "",
  });

  // Синхронізація з даними зі store при їх зміні
  useEffect(() => {
    setFormData({
      degree: education?.degree || "",
      specialty: education?.specialty || "",
      startDate:
        education?.startDate && education.startDate !== "" ? parseDate(education.startDate) : null,
      endDate: education?.endDate && education.endDate !== "" ? parseDate(education.endDate) : null,
      location: education?.location || "",
      description: education?.description || "",
    });
  }, [education]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    updateEducation(id, { [field]: value });
  };

  const handleDateChange = (field: "startDate" | "endDate", value: DateValue | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    updateEducation(id, { [field]: value?.toString() || "" });
  };

  const handleDescriptionChange = (description: string) => {
    setFormData((prev) => ({ ...prev, description }));
    updateEducation(id, { description });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateEducation(id, {
      ...formData,
      startDate: formData.startDate?.toString() || "",
      endDate: formData.endDate?.toString() || "",
    });
  };

  const handleDelete = () => {
    deleteEducation(id);
  };

  const handleToggleVisibility = () => {
    toggleEducationVisibility(id);
  };

  return (
    <div
      ref={setNodeRef}
      className="education-item-form__component"
      style={style}
      {...attributes}
    >
      <CommonInfoModalItem
        title={education?.degree || "New Entry"}
        dragHandleProps={{ ref: setActivatorNodeRef, ...listeners }}
        isVisible={education?.isVisible ?? true}
        onToggleVisibility={handleToggleVisibility}
        onDelete={handleDelete}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            label="Degree"
            type="text"
            className="w-full mb-4"
            value={formData.degree}
            onChange={(e) => handleInputChange("degree", e.target.value)}
          />
          <Input
            label="Speciality"
            type="text"
            className="w-full mb-4"
            value={formData.specialty}
            onChange={(e) => handleInputChange("specialty", e.target.value)}
          />
          <Input
            label="Location"
            type="text"
            className="w-full mb-4"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
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
          <div className="w-full mb-4">
            <CommonTextArea
              labelText="Description"
              placeholder="Enter your description"
              tooltipContent="Describe your achievements, course projects, projects and other important details during your studies."
              initialValue={formData.description}
              onChange={handleDescriptionChange}
            />
          </div>
        </Form>
      </CommonInfoModalItem>
    </div>
  );
};

export default EducationItemForm;
