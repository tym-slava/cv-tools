import { TemplateData } from "@/types";

import ElegantTemplate from "./elegant";
import ModernTemplate from "./modern";
import StandartTemplate from "./standart";

export const templates: Record<string, React.FC<{ data: TemplateData }>> = {
  elegant: ElegantTemplate,
  modern: ModernTemplate,
  standart: StandartTemplate,
};

export type TemplateId = keyof typeof templates;
