"use client";

import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronRight, Grip } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
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

import { sections } from "./sections";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";

// Sortable Section wrapper - каждая секция в отдельном Accordion
function SortableSection({
  section,
  children,
  isExpanded,
  onToggle,
}: {
  section: any;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="mb-2"
    >
      <Accordion
        selectionMode="multiple"
        variant="shadow"
        selectedKeys={isExpanded ? [section.key.toString()] : []}
        onSelectionChange={(keys) => {
          const keysArray = Array.from(keys);

          if (keysArray.includes(section.key.toString())) {
            onToggle();
          } else if (isExpanded) {
            onToggle();
          }
        }}
      >
        <AccordionItem
          key={section.key}
          aria-label={section.title}
          title={
            <div className="flex items-center gap-2">
              <div
                {...attributes}
                {...listeners}
                role="button"
                tabIndex={0}
                className="cursor-grab active:cursor-grabbing p-2 md:p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 touch-none"
                aria-label={`Drag ${section.title}`}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                  }
                }}
              >
                <Grip className="h-6 w-6 md:h-5 md:w-5 text-gray-400" />
              </div>
              <span className="text-lg font-semibold">{section.title}</span>
            </div>
          }
          indicator={<ChevronRight />}
        >
          {children}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function SectionsList() {
  const { selectedSections, sectionsOrder, setSectionsOrder } = useCvBuilderStore();

  // Управляемое состояние для открытых аккордеонов
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(["1"]));

  // Храним предыдущее количество секций для определения новой
  const prevSelectedSectionsRef = useRef<string[]>(selectedSections);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Сортируем секции согласно sectionsOrder
  const orderedSections = [...sections].sort((a, b) => {
    const indexA = sectionsOrder.indexOf(a.id);
    const indexB = sectionsOrder.indexOf(b.id);

    return indexA - indexB;
  });

  const visibleSections = orderedSections.filter((section) =>
    selectedSections.includes(section.id)
  );

  // Автоматически открываем только новый аккордеон
  useEffect(() => {
    const prevSections = prevSelectedSectionsRef.current;

    // Находим новую секцию (ту, которая есть в selectedSections, но не было в prevSections)
    const newSection = selectedSections.find((id) => !prevSections.includes(id));

    if (newSection) {
      // Находим ключ новой секции
      const sectionData = sections.find((section) => section.id === newSection);

      if (sectionData) {
        const newKey = String(sectionData.key);

        // Добавляем только новую секцию к открытым
        setExpandedKeys((prev) => {
          const newExpandedKeys = new Set(prev);

          newExpandedKeys.add(newKey);

          return newExpandedKeys;
        });
      }
    }

    // Обновляем ref для следующего сравнения
    prevSelectedSectionsRef.current = selectedSections;
  }, [selectedSections]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = sectionsOrder.indexOf(active.id as string);
      const newIndex = sectionsOrder.indexOf(over.id as string);

      const newOrder = arrayMove(sectionsOrder, oldIndex, newIndex);

      setSectionsOrder(newOrder);
    }
  };

  const handleToggle = (sectionKey: string) => {
    setExpandedKeys((prev) => {
      const newKeys = new Set(prev);

      if (newKeys.has(sectionKey)) {
        newKeys.delete(sectionKey);
      } else {
        newKeys.add(sectionKey);
      }

      return newKeys;
    });
  };

  return (
    <div className="sections-list__component">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={visibleSections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {visibleSections.map((section) => (
            <SortableSection
              key={section.id}
              section={section}
              isExpanded={expandedKeys.has(String(section.key))}
              onToggle={() => handleToggle(String(section.key))}
            >
              {section.component}
            </SortableSection>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default SectionsList;
