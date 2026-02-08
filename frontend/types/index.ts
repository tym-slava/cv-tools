import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export enum PdfExportMethod {
  HTML2PDF = "html2pdf",
  JSPDF = "jspdf",
  NATIVE_PRINT = "native-print",
}
