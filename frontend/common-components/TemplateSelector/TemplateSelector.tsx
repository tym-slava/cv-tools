"use client";

import React from "react";
import { Select, SelectItem } from "@heroui/react";
import { Layout } from "lucide-react";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";
import { TemplateId } from "@/templates";

interface TemplateOption {
  id: TemplateId;
  name: string;
  description: string;
}

const templateOptions: TemplateOption[] = [
  {
    id: "elegant",
    name: "Elegant",
    description: "Light header with classic serif typography",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design",
  },
  {
    id: "standart",
    name: "Standard",
    description: "Classic professional style",
  },
];

const TemplateSelector: React.FC = () => {
  const selectedTemplate = useCvBuilderStore((state) => state.selectedTemplate);
  const setSelectedTemplate = useCvBuilderStore((state) => state.setSelectedTemplate);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = e.target.value as TemplateId;

    if (selectedKey) {
      setSelectedTemplate(selectedKey);
    }
  };

  return (
    <Select
      disallowEmptySelection
      label="CV Template"
      placeholder="Select a template"
      selectedKeys={[selectedTemplate]}
      className="max-w-xs"
      // labelPlacement="outside"
      classNames={{
        trigger: "min-h-[48px] h-[48px]",
        label: "font-normal",
      }}
      startContent={
        <Layout
          size={18}
          className="text-default-400"
        />
      }
      onChange={handleSelectionChange}
    >
      {templateOptions.map((template) => (
        <SelectItem
          key={template.id}
          description={template.description}
          classNames={{
            base: "py-3",
            title: "font-semibold",
          }}
        >
          {template.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default TemplateSelector;
