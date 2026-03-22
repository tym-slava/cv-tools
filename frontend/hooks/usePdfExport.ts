"use client";

import { useCallback, useState } from "react";

interface UsePdfExportOptions {
  filename?: string;
  format?: "a4" | "letter";
  margin?: number | [number, number, number, number];
  scale?: number;
}

export const usePdfExport = (options: UsePdfExportOptions = {}) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPdf = useCallback(
    async (elementId: string, customFilename?: string) => {
      try {
        setIsExporting(true);

        const element = document.getElementById(elementId);

        if (!element) {
          throw new Error(`Element with id "${elementId}" not found`);
        }

        const filename = customFilename || options.filename || "cv-resume.pdf";
        const html2pdf = (await import("html2pdf.js")).default;

        const opt = {
          margin: options.margin ?? [10, 0, 10, 0],
          filename,
          image: { type: "jpeg" as const, quality: 0.98 },
          html2canvas: {
            scale: options.scale || 2,
            useCORS: true,
            letterRendering: true,
            scrollY: 0,
            scrollX: 0,
          },
          jsPDF: {
            unit: "mm" as const,
            format: options.format || "a4",
            orientation: "portrait" as const,
          },
          pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        };

        await html2pdf().set(opt).from(element).save();
      } finally {
        setIsExporting(false);
      }
    },
    [options]
  );

  return { exportToPdf, isExporting };
};
