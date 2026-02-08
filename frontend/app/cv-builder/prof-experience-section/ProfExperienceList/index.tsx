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

import ProfExperienceItemForm from "@/app/cv-builder/prof-experience-section/ProfExperienceItemForm";
// import CommonSwitcher from "@/app/common-components/CommonSwitcher";
import CommonAddButton from "@/common-components/buttons/CommonAddButton";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

const ProfExperienceList: React.FC = () => {
  const { profExperience, addProfExperience, reorderProfExperience } = useCvBuilderStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = profExperience.findIndex((item) => item.id === active.id);
      const newIndex = profExperience.findIndex((item) => item.id === over?.id);

      reorderProfExperience(arrayMove(profExperience, oldIndex, newIndex));
    }
  };

  const handleAddExperience = () => {
    addProfExperience({
      jobTitle: "",
      employer: "",
      location: "",
      startDate: "",
      endDate: "",
      isCurrentlyWorking: false,
      description: "",
      isVisible: true,
    });
  };

  return (
    <div className="prof-experience-list__component">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={profExperience.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {profExperience.map((experience) => (
            <ProfExperienceItemForm
              key={experience.id}
              id={experience.id}
              experience={experience}
            />
          ))}
        </SortableContext>
      </DndContext>

      <div className="w-full mb-4 flex justify-end">
        <CommonAddButton
          buttonText="Add new experience"
          onClick={handleAddExperience}
        />
      </div>
    </div>
  );
};

export default ProfExperienceList;
