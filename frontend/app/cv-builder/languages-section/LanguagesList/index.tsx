import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import LanguageItemForm from "@/app/cv-builder/languages-section/LanguageItemForm";
import CommonAddButton from "@/common-components/buttons/CommonAddButton";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

const LanguagesList: React.FC = () => {
  const { languages, addLanguage, reorderLanguages } = useCvBuilderStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = languages.findIndex((item) => item.id === active.id);
      const newIndex = languages.findIndex((item) => item.id === over?.id);

      reorderLanguages(arrayMove(languages, oldIndex, newIndex));
    }
  };

  const handleAddLanguage = () => {
    addLanguage({
      language: "",
      level: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="languages-list__component">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={languages.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {languages.map((lang) => (
            <LanguageItemForm
              key={lang.id}
              id={lang.id}
              language={lang}
            />
          ))}
        </SortableContext>
      </DndContext>

      <div className="w-full mb-4 flex justify-end">
        <CommonAddButton
          buttonText="Add language"
          onClick={handleAddLanguage}
        />
      </div>
    </div>
  );
};

export default LanguagesList;
