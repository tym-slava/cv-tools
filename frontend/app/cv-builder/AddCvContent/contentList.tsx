import {
  GraduationCap,
  BriefcaseBusiness,
  BrainCog,
  Languages,
  BadgeCheck,
  Heart,
  FolderKanban,
  BookOpenCheck,
  Award,
  Users,
  BookMarked,
  Contact,
  PenLine,
  Puzzle,
  FileText,
} from "lucide-react";

export type SectionType = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const contentList: SectionType[] = [
  {
    key: "education",
    title: "Education",
    description: "Show off your primary education, college degrees & exchange semesters.",
    icon: <GraduationCap />,
  },
  {
    key: "professional-summary",
    title: "Professional Summary",
    description:
      "Summarize your key qualifications, experience, and career goals in a few sentences.",
    icon: <FileText />,
  },
  {
    key: "prof_experience",
    title: "Professional Experience",
    description: "A place to highlight your professional experience – including internships.",
    icon: <BriefcaseBusiness />,
  },
  {
    key: "skills",
    title: "Skills",
    description: "List your technical, managerial or soft skills in this section.",
    icon: <BrainCog />,
  },
  {
    key: "languages",
    title: "Languages",
    description: "You speak more than one language? Make sure to list them here.",
    icon: <Languages />,
  },
  {
    key: "certificates",
    title: "Certificates",
    description: "Drivers licenses and other industry-specific certificates you have belong here.",
    icon: <BadgeCheck />,
  },
  {
    key: "interests",
    title: "Interests",
    description: "Do you have interests that align with your career aspiration?",
    icon: <Heart />,
  },
  {
    key: "projects",
    title: "Projects",
    description: "Worked on a particular challenging project in the past? Mention it here.",
    icon: <FolderKanban />,
  },
  {
    key: "courses",
    title: "Courses",
    description: "Did you complete MOOCs or an evening course? Show them off in this section.",
    icon: <BookOpenCheck />,
  },
  {
    key: "awards",
    title: "Awards",
    description: "Awards like student competitions or industry accolades belong here.",
    icon: <Award />,
  },
  {
    key: "organizations",
    title: "Organizations",
    description: "If you volunteer or participate in a good cause, why not state it?",
    icon: <Users />,
  },
  {
    key: "publications",
    title: "Publications",
    description: "Academic publications or book releases have a dedicated place here.",
    icon: <BookMarked />,
  },
  {
    key: "references",
    title: "References",
    description: "If you have former colleagues or bosses that vouch for you, list them.",
    icon: <Contact />,
  },
  {
    key: "declaration",
    title: "Declaration",
    description: "You need a declaration with signature?",
    icon: <PenLine />,
  },
  {
    key: "custom",
    title: "Custom",
    description:
      "You didn't find what you are looking for? Or you want to combine two sections to save space?",
    icon: <Puzzle />,
  },
];
