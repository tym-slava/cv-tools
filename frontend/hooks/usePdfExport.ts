"use client";

import { useCallback, useState } from "react";

import { PdfExportMethod } from "@/types";

interface UsePdfExportOptions {
  filename?: string;
  format?: "a4" | "letter";
  margin?: number | [number, number, number, number];
  scale?: number;
  method?: PdfExportMethod;
}

export const usePdfExport = (options: UsePdfExportOptions = {}) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportWithHtml2Pdf = useCallback(
    async (element: HTMLElement, filename: string) => {
      const html2pdf = (await import("html2pdf.js")).default;

      const opt = {
        margin: options.margin || 0,
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
    },
    [options]
  );

  const exportWithJsPdf = useCallback(
    async (element: HTMLElement, filename: string) => {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDFModule = await import("jspdf");
      // @ts-ignore - jsPDF typing issue
      const { jsPDF } = jsPDFModule;

      const canvas = await html2canvas(element, {
        scale: options.scale || 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: options.format || "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save(filename);
    },
    [options]
  );

  const exportWithNativePrint = useCallback(async (element: HTMLElement, filename: string) => {
    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      throw new Error("Failed to open print window");
    }

    // Copy all styles from the main document
    const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n");
        } catch {
          return "";
        }
      })
      .join("\n");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${filename}</title>
          <style>
            @page { 
              size: A4; 
              margin: 0; 
            }
            body { 
              margin: 0; 
              padding: 0;
              font-family: serif; 
            }
            @media print {
              body { 
                -webkit-print-color-adjust: exact; 
                print-color-adjust: exact; 
              }
            }
            ${styles}
          </style>
        </head>
        <body>${element.innerHTML}</body>
      </html>
    `);

    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  }, []);

  const exportToPdf = useCallback(
    async (elementId: string, customFilename?: string) => {
      try {
        setIsExporting(true);

        const element = document.getElementById(elementId);

        if (!element) {
          throw new Error(`Element with id "${elementId}" not found`);
        }

        const filename = customFilename || options.filename || "cv-resume.pdf";
        const method = options.method || PdfExportMethod.HTML2PDF;

        switch (method) {
          case PdfExportMethod.HTML2PDF:
            await exportWithHtml2Pdf(element, filename);
            break;
          case PdfExportMethod.JSPDF:
            await exportWithJsPdf(element, filename);
            break;
          case PdfExportMethod.NATIVE_PRINT:
            await exportWithNativePrint(element, filename);
            break;
          default:
            await exportWithHtml2Pdf(element, filename);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsExporting(false);
      }
    },
    [options, exportWithHtml2Pdf, exportWithJsPdf, exportWithNativePrint]
  );

  return { exportToPdf, isExporting };
};
