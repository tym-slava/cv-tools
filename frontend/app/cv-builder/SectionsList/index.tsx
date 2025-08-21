"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronRight } from "lucide-react";

import { sections } from "./sections";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";

function SectionsList() {
  const { selectedSections } = useCvBuilderStore();
  const visibleSections = sections.filter((section) => selectedSections.includes(section.id));

  // console.log("selectedSections", selectedSections);

  return (
    <div className="sections-list__component">
      <Accordion
        selectionMode="multiple"
        variant="shadow"
        defaultExpandedKeys={["1"]}
      >
        {visibleSections.map((section) => (
          <AccordionItem
            key={section.key}
            aria-label={section.title}
            title={
              <div className="flex items-center gap-2 text-lg font-semibold">{section.title}</div>
            }
            indicator={<ChevronRight />}
          >
            {section.component}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default SectionsList;
