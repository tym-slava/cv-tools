import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Card,
  Skeleton,
} from "@heroui/react";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";
import { templates } from "@/templates";

interface CvSidePreviewProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

function CvSidePreviw({ isOpen, onOpenChange }: CvSidePreviewProps) {
  const store = useCvBuilderStore();
  const {
    selectedTemplate,
    personalInformation,
    professionalSummary,
    profExperience,
    education,
    skills,
    languages,
  } = store;

  const hasData =
    personalInformation.firstName ||
    personalInformation.lastName ||
    personalInformation.jobTitle ||
    personalInformation.email ||
    personalInformation.phone ||
    personalInformation.city ||
    personalInformation.country ||
    professionalSummary.length > 0 ||
    profExperience.length > 0 ||
    education.length > 0 ||
    skills.length > 0 ||
    languages.length > 0;

  const SelectedTemplateComponent =
    templates[selectedTemplate as keyof typeof templates] || templates.modern;

  return (
    <Drawer
      isOpen={isOpen}
      scrollBehavior="inside"
      size="3xl"
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">CV Preview</DrawerHeader>
            <DrawerBody className=" bg-gray-100 p-4 flex justify-start">
              <div className="cv-preview-container w-full max-w-[800px] flex justify-center">
                {hasData ? (
                  <div className="w-full shadow-2xl overflow-hidden scale-[0.8] origin-top md:scale-100">
                    <SelectedTemplateComponent data={store} />
                  </div>
                ) : (
                  <Card
                    className="w-full space-y-5 p-10 bg-white"
                    radius="none"
                  >
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-10 w-3/5 rounded-lg bg-default-200" />
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-6 w-2/5 rounded-lg bg-default-200" />
                      </Skeleton>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <Skeleton className="w-full rounded-lg">
                        <div className="h-4 w-full rounded-lg bg-default-200" />
                      </Skeleton>
                      <Skeleton className="w-full rounded-lg">
                        <div className="h-4 w-full rounded-lg bg-default-200" />
                      </Skeleton>
                      <Skeleton className="w-full rounded-lg">
                        <div className="h-4 w-full rounded-lg bg-default-200" />
                      </Skeleton>
                      <Skeleton className="w-full rounded-lg">
                        <div className="h-4 w-full rounded-lg bg-default-200" />
                      </Skeleton>
                    </div>

                    <div className="space-y-4 mt-12">
                      <Skeleton className="w-full rounded-lg">
                        <div className="h-8 w-full rounded-lg bg-default-300" />
                      </Skeleton>
                      <Skeleton className="w-full rounded-lg">
                        <div className="h-24 w-full rounded-lg bg-default-200" />
                      </Skeleton>
                    </div>

                    <div className="space-y-4 mt-8">
                      <Skeleton className="w-full rounded-lg">
                        <div className="h-8 w-full rounded-lg bg-default-300" />
                      </Skeleton>
                      <div className="space-y-2">
                        <Skeleton className="w-full rounded-lg">
                          <div className="h-4 w-full rounded-lg bg-default-200" />
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                          <div className="h-4 w-4/5 rounded-lg bg-default-200" />
                        </Skeleton>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </DrawerBody>
            <DrawerFooter className="bg-white border-t">
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
              <Button
                color="primary"
                onPress={onClose}
              >
                Download PDF
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export default CvSidePreviw;
