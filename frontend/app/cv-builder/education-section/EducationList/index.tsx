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

import EducationItemForm from "@/app/cv-builder/education-section/EducationItemForm";
import CommonAddButton from "@/common-components/buttons/CommonAddButton";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

const EducationList: React.FC = () => {
  const { education, addEducation, reorderEducation } = useCvBuilderStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = education.findIndex((item) => item.id === active.id);
      const newIndex = education.findIndex((item) => item.id === over?.id);

      reorderEducation(arrayMove(education, oldIndex, newIndex));
    }
  };

  const handleAddEducation = () => {
    addEducation({
      degree: "",
      specialty: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="education-list__component">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={education.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {education.map((edu) => (
            <EducationItemForm
              key={edu.id}
              id={edu.id}
              education={edu}
            />
          ))}
        </SortableContext>
      </DndContext>

      <CommonAddButton
        buttonText="Add education"
        onClick={handleAddEducation}
      />
    </div>
  );
};

export default EducationList;
