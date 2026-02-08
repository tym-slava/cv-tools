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
}

const CommonInfoModalItem: React.FC<Props> = ({
  title,
  children,
  dragHandleProps,
  onDelete,
  isVisible = true,
  onToggleVisibility,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      onOpenChange();
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
          aria-label={`Відкрити модальне вікно для ${title}`}
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
            aria-label={isVisible ? "Приховати поле" : "Показати поле"}
            onKeyDown={(e) => e.key === "Enter" && onToggleVisibility()}
            onClick={onToggleVisibility}
          >
            {isVisible ? (
              <Tooltip
                radius="sm"
                content={
                  <div className="text-center">
                    Приховує поле в резюме
                    <br /> (не видаляє його).
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
                    Поле знову відображатиметься
                    <br /> у фінальній версії.
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
            aria-label="Видалити елемент"
            onKeyDown={(e) => e.key === "Enter" && handleDelete()}
            onClick={handleDelete}
          >
            <Tooltip
              radius="sm"
              content="Видалити"
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
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">
                {title || "Редагування"}
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
