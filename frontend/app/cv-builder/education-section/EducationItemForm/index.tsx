import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input, Form, DateValue } from "@heroui/react";
import { parseDate } from "@internationalized/date";

import CommonTextArea from "@/common-components/CommonTextArea";
import CommonInfoModalItem from "@/common-components/CommonInfoModalItem";
import DateRangePicker from "@/common-components/DateRangePicker";
import { useCvBuilderStore, type Education } from "@/store/useCvBuilderStore";

interface EducationItemFormProps {
  id: string;
  education: Education;
}

const EducationItemForm: React.FC<EducationItemFormProps> = ({ id, education }) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({ id });
  const { updateEducation, deleteEducation, toggleEducationVisibility } = useCvBuilderStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    degree: education?.degree || "",
    specialty: education?.specialty || "",
    startDate:
      education?.startDate && education.startDate !== "" ? parseDate(education.startDate) : null,
    endDate: education?.endDate && education.endDate !== "" ? parseDate(education.endDate) : null,
    isCurrentlyStudying: education?.isCurrentlyStudying || false,
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
      isCurrentlyStudying: education?.isCurrentlyStudying || false,
      location: education?.location || "",
      description: education?.description || "",
    });
  }, [education]);

  // Автоматически открываем модалку для новых элементов
  useEffect(() => {
    if (education?.isNew) {
      setIsModalOpen(true);
      // Убираем флаг isNew после открытия
      updateEducation(id, { isNew: false });
    }
  }, [education?.isNew, id, updateEducation]);

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

  const handlePresentChange = (isPresent: boolean) => {
    setFormData((prev) => ({
      ...prev,
      isCurrentlyStudying: isPresent,
      endDate: isPresent ? null : prev.endDate,
    }));
    updateEducation(id, {
      isCurrentlyStudying: isPresent,
      endDate: isPresent ? "" : formData.endDate?.toString() || "",
    });
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
        isOpen={isModalOpen}
        dragHandleProps={{ ref: setActivatorNodeRef, ...listeners }}
        isVisible={education?.isVisible ?? true}
        onOpenChange={setIsModalOpen}
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
          <div className="mb-4 w-full">
            <DateRangePicker
              startDate={formData.startDate}
              endDate={formData.endDate}
              isPresent={formData.isCurrentlyStudying}
              presentLabel="Currently studying here"
              onStartDateChange={(value) => handleDateChange("startDate", value)}
              onEndDateChange={(value) => handleDateChange("endDate", value)}
              onPresentChange={handlePresentChange}
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
