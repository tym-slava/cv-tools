import { SVGProps } from "react";

import type {
  PersonalInformation,
  ProfessionalSummary,
  ProfExperience,
  Education,
  Language,
  Skill,
} from "@/store/useCvBuilderStore";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TemplateData {
  personalInformation: PersonalInformation;
  professionalSummary: ProfessionalSummary[];
  profExperience: ProfExperience[];
  education: Education[];
  languages: Language[];
  skills: Skill[];
  sectionTitles: Record<string, string>;
  enabledSections: Record<string, boolean>;
  sectionsOrder: string[];
  selectedSections: string[];
}

