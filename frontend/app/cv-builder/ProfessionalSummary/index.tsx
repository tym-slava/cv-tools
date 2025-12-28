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
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import CommonSwitcher from "@/app/common-components/CommonSwitcher";
import CommonTextArea from "@/app/common-components/CommonTextArea";
import CommonInfoModalItem from "@/app/common-components/CommonInfoModalItem";
import CommonAddButton from "@/app/common-components/buttons/CommonAddButton";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

interface ProfessionalSummary {
  id: string;
  title: string;
  description: string;
  isVisible: boolean;
}

interface SortableItemProps {
  id: string;
  summary: ProfessionalSummary;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, summary }) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({ id });
  const {
    updateProfessionalSummary,
    deleteProfessionalSummary,
    toggleProfessionalSummaryVisibility,
  } = useCvBuilderStore();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDescriptionChange = (description: string) => {
    updateProfessionalSummary(id, { description });
  };

  const handleDelete = () => {
    deleteProfessionalSummary(id);
  };

  const handleToggleVisibility = () => {
    toggleProfessionalSummaryVisibility(id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <CommonInfoModalItem
        title={summary.description || "New Entry"}
        dragHandleProps={{ ref: setActivatorNodeRef, ...listeners }}
        isVisible={summary.isVisible}
        onToggleVisibility={handleToggleVisibility}
        onDelete={handleDelete}
      >
        <div className="my-4">
          <CommonTextArea
            labelText="Description"
            tooltipContent="Craft 2–4 punchy sentences that capture attention! Highlight your role, experience, and most importantly — showcase your top achievements, standout qualities, and key skills."
            initialValue={summary.description}
            onChange={handleDescriptionChange}
          />
        </div>
      </CommonInfoModalItem>
    </div>
  );
};

const ProfessionalSummary: React.FC = () => {
  const { professionalSummary, addProfessionalSummary, reorderProfessionalSummary } =
    useCvBuilderStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = professionalSummary.findIndex((item) => item.id === active.id);
      const newIndex = professionalSummary.findIndex((item) => item.id === over?.id);

      reorderProfessionalSummary(arrayMove(professionalSummary, oldIndex, newIndex));
    }
  };

  const handleAddSummary = () => {
    addProfessionalSummary({
      title: "New Entry",
      description: "",
      isVisible: true,
    });
  };

  return (
    <div className="professional-summary__component">
      <CommonSwitcher
        labelText="Enable section"
        className="mb-6"
      />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={professionalSummary.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {professionalSummary.map((summary) => (
            <SortableItem
              key={summary.id}
              id={summary.id}
              summary={summary}
            />
          ))}
        </SortableContext>
      </DndContext>

      <CommonAddButton
        buttonText="Add new summary"
        onClick={handleAddSummary}
      />
    </div>
  );
};

export default ProfessionalSummary;
