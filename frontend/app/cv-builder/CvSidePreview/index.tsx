"use client";

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
import { Download } from "lucide-react";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";
import { templates } from "@/templates";
import TemplateSelector from "@/common-components/TemplateSelector/TemplateSelector";
import { usePdfExport } from "@/hooks/usePdfExport";

interface CvSidePreviewProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

function CvSidePreview({ isOpen, onOpenChange }: CvSidePreviewProps) {
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

  const { exportToPdf, isExporting } = usePdfExport({
    format: "a4",
    scale: 2,
  });

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

  const handleDownloadPdf = async () => {
    if (!hasData) {
      return;
    }

    try {
      const fileName =
        personalInformation.firstName && personalInformation.lastName
          ? `${personalInformation.firstName}_${personalInformation.lastName}_CV.pdf`
          : "My_CV.pdf";

      await exportToPdf("cv-template-export", fileName);
    } catch {
      // Handle error silently or show notification
    }
  };

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
            <DrawerHeader className="flex gap-1 justify-between">
              <div className="text-2xl font-bold">CV Preview</div>
              <div className="w-1/3 text-sm text-gray-500 mr-4">
                <TemplateSelector />
              </div>
            </DrawerHeader>
            <DrawerBody className=" bg-gray-100 p-4 flex justify-start">
              <div className="cv-preview-container w-full max-w-[800px] flex justify-center">
                {hasData ? (
                  <div
                    id="cv-template-export"
                    className="w-full shadow-2xl overflow-hidden scale-100 origin-top md:scale-100"
                  >
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
              <div className="flex items-center justify-end gap-3 w-full">
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  isDisabled={!hasData || isExporting}
                  isLoading={isExporting}
                  startContent={!isExporting && <Download size={18} />}
                  onPress={handleDownloadPdf}
                >
                  {isExporting ? "Downloading..." : "Download PDF"}
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export default CvSidePreview;
