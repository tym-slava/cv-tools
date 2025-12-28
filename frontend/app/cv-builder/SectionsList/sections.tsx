import PersonalInformation from "@/app/cv-builder/PersonalInformation";
import ProfessionalSummary from "@/app/cv-builder/ProfessionalSummary";
// import SocialLinks from '@/app/cv-builder/SocialLinks';
import ProfExperience from "@/app/cv-builder/prof-experience-section/ProfExperience";
import Education from "@/app/cv-builder/education-section/Education";
import Skills from "@/app/cv-builder/skills-section/Skills";
import Languages from "@/app/cv-builder/languages-section/Languages";

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
    component: <Education />,
    defaultExpanded: false,
    isSectionShown: true,
  },
  {
    id: "skills",
    key: 5,
    title: "Skills",
    component: <Skills />,
    defaultExpanded: false,
    isSectionShown: true,
  },
  {
    id: "languages",
    key: 6,
    title: "Languages",
    component: <Languages />,
    defaultExpanded: false,
    isSectionShown: true,
  },
];
