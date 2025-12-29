import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input, Form, Select, SelectItem } from "@heroui/react";

import CommonTextArea from "@/common-components/CommonTextArea";
import CommonInfoModalItem from "@/common-components/CommonInfoModalItem";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

interface SkillItemFormProps {
  id: string;
  skill: {
    id: string;
    skill: string;
    level: string;
    information: string;
    isVisible?: boolean;
  };
}

const skillLevels = [
  { key: "Beginner", label: "Beginner" },
  { key: "Amateur", label: "Amateur" },
  { key: "Competent", label: "Competent" },
  { key: "Proficient", label: "Proficient" },
  { key: "Expert", label: "Expert" },
];

const SkillItemForm: React.FC<SkillItemFormProps> = ({ id, skill }) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({ id });
  const { updateSkill, deleteSkill, toggleSkillVisibility } = useCvBuilderStore();

  const [formData, setFormData] = useState({
    skill: skill?.skill || "",
    level: skill?.level || "",
    information: skill?.information || "",
  });

  // Синхронізація з даними зі store при їх зміні
  useEffect(() => {
    setFormData({
      skill: skill?.skill || "",
      level: skill?.level || "",
      information: skill?.information || "",
    });
  }, [skill]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    updateSkill(id, { [field]: value });
  };

  const handleInformationChange = (information: string) => {
    setFormData((prev) => ({ ...prev, information }));
    updateSkill(id, { information });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSkill(id, formData);
  };

  const handleDelete = () => {
    deleteSkill(id);
  };

  const handleToggleVisibility = () => {
    toggleSkillVisibility(id);
  };

  return (
    <div
      ref={setNodeRef}
      className="skill-item-form__component"
      style={style}
      {...attributes}
    >
      <CommonInfoModalItem
        title={skill?.skill || "New Entry"}
        dragHandleProps={{ ref: setActivatorNodeRef, ...listeners }}
        isVisible={skill?.isVisible ?? true}
        onToggleVisibility={handleToggleVisibility}
        onDelete={handleDelete}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            label="Skill"
            type="text"
            placeholder="Enter Skill"
            className="w-full mb-4"
            value={formData.skill}
            onChange={(e) => handleInputChange("skill", e.target.value)}
          />
          <div className="w-full mb-4">
            <CommonTextArea
              labelText="Information / Sub-skills"
              placeholder="Enter information or sub-skills"
              tooltipContent="Опишіть деталі навички, підкатегорії або додаткову інформацію."
              initialValue={formData.information}
              onChange={handleInformationChange}
            />
          </div>
          <Select
            label="Skill level"
            placeholder="Select skill level"
            className="w-full mb-4"
            selectedKeys={formData.level ? [formData.level] : []}
            onSelectionChange={(keys) => {
              const selected = Array.from(keys)[0] as string;

              handleInputChange("level", selected || "");
            }}
          >
            {skillLevels.map((level) => (
              <SelectItem key={level.key}>{level.label}</SelectItem>
            ))}
          </Select>
        </Form>
      </CommonInfoModalItem>
    </div>
  );
};

export default SkillItemForm;
