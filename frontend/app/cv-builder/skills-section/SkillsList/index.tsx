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

import SkillItemForm from "@/app/cv-builder/skills-section/SkillItemForm";
import CommonAddButton from "@/common-components/buttons/CommonAddButton";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

const SkillsList: React.FC = () => {
  const { skills, addSkill, reorderSkills } = useCvBuilderStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = skills.findIndex((item) => item.id === active.id);
      const newIndex = skills.findIndex((item) => item.id === over?.id);

      reorderSkills(arrayMove(skills, oldIndex, newIndex));
    }
  };

  const handleAddSkill = () => {
    addSkill({
      skill: "",
      level: "",
      information: "",
    });
  };

  return (
    <div className="skills-list__component">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={skills.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {skills.map((skill) => (
            <SkillItemForm
              key={skill.id}
              id={skill.id}
              skill={skill}
            />
          ))}
        </SortableContext>
      </DndContext>

      <div className="w-full mb-4 flex justify-end">
        <CommonAddButton
          buttonText="Add skill"
          onClick={handleAddSkill}
        />
      </div>
    </div>
  );
};

export default SkillsList;
