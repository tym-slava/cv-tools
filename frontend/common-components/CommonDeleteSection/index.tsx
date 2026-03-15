import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@heroui/react";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";
import CommonModal from "@/common-components/CommonModal";

interface CommonDeleteSectionProps {
  sectionId: string;
  className?: string;
}

const CommonDeleteSection: React.FC<CommonDeleteSectionProps> = ({ sectionId, className }) => {
  const { selectedSections, setSelectedSections, clearSectionData } = useCvBuilderStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmDelete = () => {
    setSelectedSections(selectedSections.filter((id) => id !== sectionId));
    clearSectionData(sectionId);
  };

  return (
    <>
      <div
        className={`common-delete-section__component flex items-center justify-between mb-4 ${className ?? ""}`}
      >
        <span className="font-medium text-base text-gray-700 dark:text-gray-300">
          Delete section
        </span>
        <Button
          isIconOnly
          aria-label={`Delete section ${sectionId}`}
          color="danger"
          size="md"
          variant="light"
          onPress={() => setIsModalOpen(true)}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>

      <CommonModal
        isOpen={isModalOpen}
        title="Delete Section"
        confirmLabel="Yes, delete section"
        confirmColor="danger"
        cancelLabel="No, keep it"
        onOpenChange={setIsModalOpen}
        onConfirm={handleConfirmDelete}
      >
        <div className="space-y-3">
          <p className="text-base text-gray-700 dark:text-gray-300">
            Are you sure you want to delete this section?
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All data within this section will be{" "}
            <span className="font-semibold text-danger">permanently removed</span> and cannot be
            recovered. You can always re-add the section later, but you will need to fill it in from
            scratch.
          </p>
        </div>
      </CommonModal>
    </>
  );
};

export default CommonDeleteSection;
