import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@heroui/react";
import { Plus } from "lucide-react";

import { contentList } from "./contentList";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";

function AddCvContent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { selectedSections, setSelectedSections } = useCvBuilderStore();

  const handleAddSection = (id: string) => {
    if (!selectedSections.includes(id)) {
      setSelectedSections([...selectedSections, id]);
    }
  };

  return (
    <div className="mt-6">
      <div className="add-cv-content_component">
        <Button
          color="primary"
          size="lg"
          endContent={<Plus className="h-4 w-4" />}
          onPress={onOpen}
        >
          Add Content
        </Button>

        <Modal
          size="5xl"
          backdrop="opaque"
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          }}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-2xl font-bold">
                  Add Content
                </ModalHeader>
                <ModalBody className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[80vh] overflow-y-auto sm:justify-items-center">
                  {contentList.map((content) => (
                    <Card
                      key={content.key}
                      isPressable
                      tabIndex={0}
                      aria-label={`Добавить секцию ${content.title}`}
                      className="w-full sm:max-w-[340px] rounded-xl shadow-md p-2 sm:p-4 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer border border-transparent dark:border-white"
                      onPress={() => {
                        handleAddSection(content.key);
                        onClose();
                      }}
                    >
                      <CardHeader className="flex gap-3">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded bg-zinc-100 text-zinc-700">
                          {content.icon}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-base sm:text-lg font-bold">{content.title}</h3>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <p className="text-sm">{content.description}</p>
                      </CardBody>
                    </Card>
                  ))}
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default AddCvContent;
