import PersonalInformation from "@/app/cv-builder/PersonalInformation";
import ProfessionalSummary from "@/app/cv-builder/ProfessionalSummary";
// import SocialLinks from '@/app/cv-builder/SocialLinks';
import ProfExperience from "@/app/cv-builder/prof-experience-section/ProfExperience";

export const sections = [
  {
    id: "personal-information",
    key: 1,
    title: "Personal Information",
    component: <PersonalInformation />,
    defaultExpanded: true,
    isSectionShown: true,
  },
  {
    id: "professional-summary",
    key: 2,
    title: "Professional Summary",
    component: <ProfessionalSummary />,
    defaultExpanded: false,
    isSectionShown: true,
  },
  {
    id: "prof_experience",
    key: 3,
    title: "Professional Experience",
    component: <ProfExperience />,
    defaultExpanded: false,
    isSectionShown: true,
  },
  {
    id: "education",
    key: 4,
    title: "Education",
    component: "Education",
    defaultExpanded: false,
    isSectionShown: true,
  },
  {
    id: "technologies",
    key: 5,
    title: "Technologies",
    component: "Technologies",
    defaultExpanded: false,
    isSectionShown: true,
  },
  {
    id: "languages",
    key: 6,
    title: "Languages",
    component: "Languages",
    defaultExpanded: false,
    isSectionShown: true,
  },
];
