"use client";

import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronRight, Grip, Pencil, Check, X } from "lucide-react";
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

import { useCvBuilderStore, DEFAULT_SECTION_TITLES } from "@/store/useCvBuilderStore";

// Inline title editor shown inside the accordion header
function SectionTitleEditor({
  sectionId,
  sectionTitle,
  onSave,
}: {
  sectionId: string;
  sectionTitle: string;
  onSave: (title: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(sectionTitle);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync external title changes when not editing
  useEffect(() => {
    if (!isEditing) setEditValue(sectionTitle);
  }, [sectionTitle, isEditing]);

  // Auto-focus and select all text when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleStartEditing = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setEditValue(sectionTitle);
    setIsEditing(true);
  };

  const handleSave = (e?: React.MouseEvent | React.FocusEvent) => {
    e?.stopPropagation();
    const trimmed = editValue.trim();

    onSave(trimmed || DEFAULT_SECTION_TITLES[sectionId] || sectionTitle);
    setIsEditing(false);
  };

  const handleCancel = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setEditValue(sectionTitle);
    setIsEditing(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") handleCancel();
  };

  // Use span[role="button"] instead of <button> to avoid nested <button> inside AccordionItem trigger
  if (isEditing) {
    return (
      <div
        role="none"
        className="flex items-center gap-1.5 flex-1"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="text"
          aria-label="Edit section title"
          className="text-lg font-semibold bg-transparent border-b-2 border-blue-500 outline-none focus:ring-0 min-w-0 flex-1 dark:text-white text-gray-800 placeholder:text-gray-400"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleInputKeyDown}
          onClick={(e) => e.stopPropagation()}
        />
        <span
          role="button"
          tabIndex={0}
          aria-label="Save title"
          className="p-1 rounded text-green-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer"
          onMouseDown={(e) => {
            e.preventDefault(); // prevent onBlur from firing before this click
            handleSave(e as any);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSave();
            }
          }}
        >
          <Check className="h-4 w-4" />
        </span>
        <span
          role="button"
          tabIndex={0}
          aria-label="Cancel editing"
          className="p-1 rounded text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors focus:outline-none focus:ring-1 focus:ring-red-400 cursor-pointer"
          onMouseDown={(e) => {
            e.preventDefault();
            handleCancel(e as any);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCancel();
            }
          }}
        >
          <X className="h-4 w-4" />
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 group/title flex-1 min-w-0">
      <span className="text-lg font-semibold truncate">{sectionTitle}</span>
      <span
        role="button"
        tabIndex={0}
        aria-label={`Rename section: ${sectionTitle}`}
        className="opacity-0 group-hover/title:opacity-100 focus:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 shrink-0 cursor-pointer"
        onClick={handleStartEditing}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleStartEditing(e);
        }}
      >
        <Pencil className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

// Sortable section wrapper — each section rendered in its own Accordion
function SortableSection({
  section,
  sectionTitle,
  children,
  isExpanded,
  onToggle,
  onTitleChange,
}: {
  section: any;
  sectionTitle: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  onTitleChange: (title: string) => void;
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
        className="bg-white/60 dark:bg-white/5
          border border-gray-200/80 dark:border-white/10
          backdrop-blur-sm
          shadow-sm
          "
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
          aria-label={sectionTitle}
          indicator={<ChevronRight />}
          title={
            <div className="flex items-center gap-2">
              {/* Drag handle */}
              <div
                {...attributes}
                {...listeners}
                role="button"
                tabIndex={0}
                aria-label={`Drag ${sectionTitle}`}
                className="cursor-grab active:cursor-grabbing p-2 md:p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 touch-none shrink-0"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                  }
                }}
              >
                <Grip className="h-6 w-6 md:h-5 md:w-5 text-gray-400" />
              </div>

              {/* Inline title editor */}
              <SectionTitleEditor
                sectionId={section.id}
                sectionTitle={sectionTitle}
                onSave={onTitleChange}
              />
            </div>
          }
        >
          {children}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function SectionsList() {
  const { selectedSections, sectionsOrder, setSectionsOrder, sectionTitles, setSectionTitle } =
    useCvBuilderStore();

  // Controlled state for expanded accordions
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(["1"]));

  // Keep track of previously selected sections to detect newly added ones
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

  // Sort sections according to sectionsOrder
  const orderedSections = [...sections].sort((a, b) => {
    const indexA = sectionsOrder.indexOf(a.id);
    const indexB = sectionsOrder.indexOf(b.id);

    return indexA - indexB;
  });

  const visibleSections = orderedSections.filter((section) =>
    selectedSections.includes(section.id)
  );

  // Auto-expand only the newly added accordion
  useEffect(() => {
    const prevSections = prevSelectedSectionsRef.current;
    const newSection = selectedSections.find((id) => !prevSections.includes(id));

    if (newSection) {
      const sectionData = sections.find((section) => section.id === newSection);

      if (sectionData) {
        const newKey = String(sectionData.key);

        setExpandedKeys((prev) => {
          const newExpandedKeys = new Set(prev);

          newExpandedKeys.add(newKey);

          return newExpandedKeys;
        });
      }
    }

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
          {visibleSections.map((section) => {
            const customTitle =
              sectionTitles?.[section.id] || DEFAULT_SECTION_TITLES[section.id] || section.title;

            return (
              <SortableSection
                key={section.id}
                section={section}
                sectionTitle={customTitle}
                isExpanded={expandedKeys.has(String(section.key))}
                onToggle={() => handleToggle(String(section.key))}
                onTitleChange={(title) => setSectionTitle(section.id, title)}
              >
                {section.component}
              </SortableSection>
            );
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default SectionsList;
