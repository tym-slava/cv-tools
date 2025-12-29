import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input, Form, Select, SelectItem } from "@heroui/react";

import CommonTextArea from "@/common-components/CommonTextArea";
import CommonInfoModalItem from "@/common-components/CommonInfoModalItem";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

interface LanguageItemFormProps {
  id: string;
  language: {
    id: string;
    language: string;
    level: string;
    additionalInfo: string;
    isVisible?: boolean;
  };
}

const languageLevels = [
  { key: "A1", label: "A1 - Початковий" },
  { key: "A2", label: "A2 - Елементарний" },
  { key: "B1", label: "B1 - Середній" },
  { key: "B2", label: "B2 - Вище середнього" },
  { key: "C1", label: "C1 - Просунутий" },
  { key: "C2", label: "C2 - Досконалий" },
  { key: "Native", label: "Рідна мова" },
];

const LanguageItemForm: React.FC<LanguageItemFormProps> = ({ id, language }) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({ id });
  const { updateLanguage, deleteLanguage, toggleLanguageVisibility } = useCvBuilderStore();

  const [formData, setFormData] = useState({
    language: language?.language || "",
    level: language?.level || "",
    additionalInfo: language?.additionalInfo || "",
  });

  // Синхронізація з даними зі store при їх зміні
  useEffect(() => {
    setFormData({
      language: language?.language || "",
      level: language?.level || "",
      additionalInfo: language?.additionalInfo || "",
    });
  }, [language]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    updateLanguage(id, { [field]: value });
  };

  const handleAdditionalInfoChange = (additionalInfo: string) => {
    setFormData((prev) => ({ ...prev, additionalInfo }));
    updateLanguage(id, { additionalInfo });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateLanguage(id, formData);
  };

  const handleDelete = () => {
    deleteLanguage(id);
  };

  const handleToggleVisibility = () => {
    toggleLanguageVisibility(id);
  };

  return (
    <div
      ref={setNodeRef}
      className="language-item-form__component"
      style={style}
      {...attributes}
    >
      <CommonInfoModalItem
        title={language?.language || "New Entry"}
        dragHandleProps={{ ref: setActivatorNodeRef, ...listeners }}
        isVisible={language?.isVisible ?? true}
        onToggleVisibility={handleToggleVisibility}
        onDelete={handleDelete}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            label="Language"
            type="text"
            className="w-full mb-4"
            value={formData.language}
            onChange={(e) => handleInputChange("language", e.target.value)}
          />
          <Select
            label="Level"
            placeholder="Оберіть рівень"
            className="w-full mb-4"
            selectedKeys={formData.level ? [formData.level] : []}
            onSelectionChange={(keys) => {
              const selected = Array.from(keys)[0] as string;

              handleInputChange("level", selected || "");
            }}
          >
            {languageLevels.map((level) => (
              <SelectItem key={level.key}>{level.label}</SelectItem>
            ))}
          </Select>
          <div className="w-full mb-4">
            <CommonTextArea
              labelText="Additional information"
              placeholder="Додаткова інформація про володіння мовою"
              tooltipContent="Опишіть свій досвід використання мови, сертифікати, або інші важливі деталі."
              initialValue={formData.additionalInfo}
              onChange={handleAdditionalInfoChange}
            />
          </div>
        </Form>
      </CommonInfoModalItem>
    </div>
  );
};

export default LanguageItemForm;
