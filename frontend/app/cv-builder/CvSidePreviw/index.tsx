import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";

interface CvSidePreviewProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

function CvSidePreviw({ isOpen, onOpenChange }: CvSidePreviewProps) {
  return (
    <Drawer
      isOpen={isOpen}
      size="2xl"
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">CV Preview</DrawerHeader>
            <DrawerBody>
              <div className="cv-preview-content">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Photo</span>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Your Name</h1>
                    <p className="text-gray-600">Job Title</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                      <div className="text-sm space-y-1">
                        <p>📧 email@example.com</p>
                        <p>📱 +1 (555) 123-4567</p>
                        <p>📍 City, Country</p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
                      <p className="text-sm text-gray-700">
                        Your professional summary will appear here...
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold mb-2">Experience</h2>
                      <p className="text-sm text-gray-700">
                        Your work experience will be listed here...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DrawerBody>
            <DrawerFooter>
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
