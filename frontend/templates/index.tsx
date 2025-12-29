import ModernTemplate from "./modern";
import StandartTemplate from "./standart";

export const templates: Record<string, React.FC<{ data: any }>> = {
  modern: ModernTemplate,
  standart: StandartTemplate,
};

export type TemplateId = keyof typeof templates;
