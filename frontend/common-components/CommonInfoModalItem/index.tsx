import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@heroui/react";
import { Eye, EyeClosed, GripVertical, Trash2 } from "lucide-react";

interface Props {
  title: string;
  children: React.ReactNode;
  dragHandleProps?: any;
  onDelete?: () => void;
  isVisible?: boolean;
  onToggleVisibility?: () => void;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

const CommonInfoModalItem: React.FC<Props> = ({
  title,
  children,
  dragHandleProps,
  onDelete,
  isVisible = true,
  onToggleVisibility,
  isOpen: externalIsOpen,
  onOpenChange: externalOnOpenChange,
}) => {
  const disclosure = useDisclosure();

  // Use external control if provided, otherwise fall back to internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : disclosure.isOpen;
  const onOpen = externalOnOpenChange ? () => externalOnOpenChange(true) : disclosure.onOpen;
  const handleOpenChange = () => {
    if (externalOnOpenChange) {
      externalOnOpenChange(!isOpen);
    } else {
      disclosure.onOpenChange();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      handleOpenChange();
    }
  };

  return (
    <>
      <div className="common-info-modal-item__component w-full mb-4 flex items-center gap-2">
        <div
          className="triger-button w-fit flex-shrink-0"
          {...dragHandleProps}
        >
          <GripVertical className="cursor-grab active:cursor-grabbing" />
        </div>

        <button
          type="button"
          className="title flex-1 min-w-0 px-2 text-ellipsis text-left cursor-pointer line-clamp-2 whitespace-pre-wrap leading-[1.2] overflow-hidden text-sm bg-transparent border-none p-0 hover:text-primary transition-colors"
          tabIndex={0}
          aria-label={`Open modal for ${title}`}
          onKeyDown={(e) => e.key === "Enter" && onOpen()}
          onClick={onOpen}
        >
          <div className="w-full">{title}</div>
        </button>

        {onToggleVisibility && (
          <button
            type="button"
            className="icon-wrapper flex-shrink-0 ml-auto bg-transparent border-none p-0 cursor-pointer hover:scale-110 transition-transform"
            tabIndex={0}
            aria-label={isVisible ? "Hide field" : "Show field"}
            onKeyDown={(e) => e.key === "Enter" && onToggleVisibility()}
            onClick={onToggleVisibility}
          >
            {isVisible ? (
              <Tooltip
                radius="sm"
                content={
                  <div className="text-center">
                    Hides the field in the resume
                    <br /> (does not delete it).
                  </div>
                }
              >
                <Eye className="w-5 h-5" />
              </Tooltip>
            ) : (
              <Tooltip
                radius="sm"
                content={
                  <div className="text-center">
                    The field will appear again
                    <br /> in the final version.
                  </div>
                }
              >
                <EyeClosed className="w-5 h-5 text-gray-500" />
              </Tooltip>
            )}
          </button>
        )}

        {onDelete && (
          <button
            type="button"
            className="icon-wrapper flex-shrink-0 bg-transparent border-none p-0 cursor-pointer hover:scale-110 transition-transform"
            tabIndex={0}
            aria-label="Delete item"
            onKeyDown={(e) => e.key === "Enter" && handleDelete()}
            onClick={handleDelete}
          >
            <Tooltip
              radius="sm"
              content="Delete"
            >
              <Trash2 className="w-5 h-5 text-gray-500 hover:text-danger" />
            </Tooltip>
          </button>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        size="2xl"
        scrollBehavior="inside"
        backdrop="opaque"
        classNames={{
          base: "max-h-[90vh]",
          body: "py-6",
        }}
        onOpenChange={handleOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">
                {title || "Edit"}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={onClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommonInfoModalItem;
