import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface CommonModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  children?: React.ReactNode;
  // Confirm button
  confirmLabel?: string;
  confirmColor?: "primary" | "danger" | "warning" | "success";
  onConfirm?: () => void;
  // Cancel button
  cancelLabel?: string;
  onCancel?: () => void;
  // Layout
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  hideFooter?: boolean;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  onOpenChange,
  title,
  children,
  confirmLabel = "Confirm",
  confirmColor = "primary",
  onConfirm,
  cancelLabel = "Cancel",
  onCancel,
  size = "md",
  hideFooter = false,
}) => {
  const handleConfirm = (onClose: () => void) => {
    onConfirm?.();
    onClose();
  };

  const handleCancel = (onClose: () => void) => {
    onCancel?.();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      backdrop="opaque"
      scrollBehavior="inside"
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
              {title}
            </ModalHeader>

            {children && <ModalBody>{children}</ModalBody>}

            {!hideFooter && (
              <ModalFooter>
                <Button
                  variant="light"
                  onPress={() => handleCancel(onClose)}
                >
                  {cancelLabel}
                </Button>
                <Button
                  color={confirmColor}
                  onPress={() => handleConfirm(onClose)}
                >
                  {confirmLabel}
                </Button>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CommonModal;
