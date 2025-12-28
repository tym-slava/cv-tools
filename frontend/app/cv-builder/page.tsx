"use client";
import React from "react";
import { Button, useDisclosure } from "@heroui/react";
import { Eye } from "lucide-react";

import { title, subtitle } from "@/components/primitives";
import SectionsList from "@/app/cv-builder/SectionsList";
import AddCvContent from "@/app/cv-builder/AddCvContent";
import CvSidePreviw from "@/app/cv-builder/CvSidePreviw";

export default function CvBuilder() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className={title({ fullWidth: true, class: "mb-4" })}>Build Your Resume in Minutes</h1>
      <div className={subtitle({ class: "max-w-xl text-center mx-auto mb-4" })}>
        Create a professional CV quickly and for free — no signup, no hassle. Just fill in your info
        and download it instantly.
      </div>

      <SectionsList />

      <AddCvContent />

      {/* Floating Preview Button */}
      <Button
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
        color="primary"
        variant="bordered"
        size="lg"
        startContent={<Eye size={20} />}
        onPress={() => onOpen()}
      >
        <span className="hidden sm:inline">Preview CV</span>
        <span className="sm:hidden">Preview</span>
      </Button>
      <CvSidePreviw
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
