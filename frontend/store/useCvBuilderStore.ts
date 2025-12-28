import { create } from "zustand";
import { persist } from "zustand/middleware";

// TODO: need to replace all the types to another separate file

// 🔧 Типи для зображення профіля
interface ProfileImagePreview {
  name: string;
  size: number;
  type: string;
  preview: string;
}

// Personal Information type
interface PersonalInformation {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  website: string;
  profileImage: File | null;
  profileImagePreview: ProfileImagePreview | null;
}

// Professional Summary type
interface ProfessionalSummary {
  id: string;
  title: string;
  description: string;
  isVisible: boolean;
}

interface ProfExperience {
  id: string;
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  description: string;
  isVisible: boolean;
}

// Education type
interface Education {
  id: string;
  degree: string;
  specialty: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  isVisible: boolean;
}

// Language type
interface Language {
  id: string;
  language: string;
  level: string;
  additionalInfo: string;
  isVisible?: boolean;
}

// Skill type
interface Skill {
  id: string;
  skill: string;
  level: string;
  information: string;
  isVisible?: boolean;
}

// Main type of CV Builder state
interface CvBuilderState {
  // Selected sections of CV
  selectedSections: string[];

  // Personal information
  personalInformation: PersonalInformation;

  // Professional Summary
  professionalSummary: ProfessionalSummary[];

  // Professional Experience
  profExperience: ProfExperience[];

  // Education
  education: Education[];

  // Languages
  languages: Language[];

  // Skills
  skills: Skill[];

  // Methods to update the state
  setSelectedSections: (sections: string[]) => void;
  setPersonalInformation: (information: Partial<PersonalInformation>) => void;

  // Professional Summary methods
  addProfessionalSummary: (summary: Omit<ProfessionalSummary, "id">) => void;
  updateProfessionalSummary: (id: string, summary: Partial<ProfessionalSummary>) => void;
  deleteProfessionalSummary: (id: string) => void;
  reorderProfessionalSummary: (summaries: ProfessionalSummary[]) => void;
  toggleProfessionalSummaryVisibility: (id: string) => void;

  // Professional Experience methods
  addProfExperience: (experience: Omit<ProfExperience, "id">) => void;
  updateProfExperience: (id: string, experience: Partial<ProfExperience>) => void;
  deleteProfExperience: (id: string) => void;
  reorderProfExperience: (experiences: ProfExperience[]) => void;
  toggleProfExperienceVisibility: (id: string) => void;

  // Education methods
  addEducation: (education: Omit<Education, "id">) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  reorderEducation: (educations: Education[]) => void;
  toggleEducationVisibility: (id: string) => void;

  // Language methods
  addLanguage: (language: Omit<Language, "id">) => void;
  updateLanguage: (id: string, language: Partial<Language>) => void;
  deleteLanguage: (id: string) => void;
  reorderLanguages: (languages: Language[]) => void;
  toggleLanguageVisibility: (id: string) => void;

  // Skill methods
  addSkill: (skill: Omit<Skill, "id">) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  reorderSkills: (skills: Skill[]) => void;
  toggleSkillVisibility: (id: string) => void;

  // Method to clear the form
  clearPersonalInformation: () => void;
}

// Initial values for personal information
const initialPersonalInformation: PersonalInformation = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  website: "",
  profileImage: null,
  profileImagePreview: null,
};

// Create the store with persist
export const useCvBuilderStore = create<CvBuilderState>()(
  persist(
    (set) => ({
      // Initial state
      selectedSections: ["personal-information"],
      personalInformation: initialPersonalInformation,
      professionalSummary: [],
      profExperience: [],
      education: [],
      languages: [],
      skills: [],

      // Method to update selected sections
      setSelectedSections: (sections) => set({ selectedSections: sections }),

      // Method to save personal information
      setPersonalInformation: (information) =>
        set((state) => ({
          personalInformation: {
            ...state.personalInformation,
            ...information,
          },
        })),

      // Professional Summary methods
      addProfessionalSummary: (summary) =>
        set((state) => ({
          professionalSummary: [
            ...state.professionalSummary,
            { ...summary, id: `summary-${Date.now()}` },
          ],
        })),

      updateProfessionalSummary: (id, summary) =>
        set((state) => ({
          professionalSummary: state.professionalSummary.map((item) =>
            item.id === id ? { ...item, ...summary } : item
          ),
        })),

      deleteProfessionalSummary: (id) =>
        set((state) => ({
          professionalSummary: state.professionalSummary.filter((item) => item.id !== id),
        })),

      reorderProfessionalSummary: (summaries) =>
        set(() => ({
          professionalSummary: summaries,
        })),

      toggleProfessionalSummaryVisibility: (id) =>
        set((state) => ({
          professionalSummary: state.professionalSummary.map((item) =>
            item.id === id ? { ...item, isVisible: !item.isVisible } : item
          ),
        })),

      // Professional Experience methods
      addProfExperience: (experience) =>
        set((state) => ({
          profExperience: [
            ...state.profExperience,
            { ...experience, id: `experience-${Date.now()}`, isVisible: true },
          ],
        })),

      updateProfExperience: (id, experience) =>
        set((state) => ({
          profExperience: state.profExperience.map((item) =>
            item.id === id ? { ...item, ...experience } : item
          ),
        })),

      deleteProfExperience: (id) =>
        set((state) => ({
          profExperience: state.profExperience.filter((item) => item.id !== id),
        })),

      reorderProfExperience: (experiences) =>
        set(() => ({
          profExperience: experiences,
        })),

      toggleProfExperienceVisibility: (id) =>
        set((state) => ({
          profExperience: state.profExperience.map((item) =>
            item.id === id ? { ...item, isVisible: !item.isVisible } : item
          ),
        })),

      // Education methods
      addEducation: (education) =>
        set((state) => ({
          education: [
            ...state.education,
            { ...education, id: `education-${Date.now()}`, isVisible: true },
          ],
        })),

      updateEducation: (id, education) =>
        set((state) => ({
          education: state.education.map((item) =>
            item.id === id ? { ...item, ...education } : item
          ),
        })),

      deleteEducation: (id) =>
        set((state) => ({
          education: state.education.filter((item) => item.id !== id),
        })),

      reorderEducation: (educations) =>
        set(() => ({
          education: educations,
        })),

      toggleEducationVisibility: (id) =>
        set((state) => ({
          education: state.education.map((item) =>
            item.id === id ? { ...item, isVisible: !item.isVisible } : item
          ),
        })),

      // Language methods
      addLanguage: (language) =>
        set((state) => ({
          languages: [
            ...state.languages,
            { ...language, id: `language-${Date.now()}`, isVisible: true },
          ],
        })),

      updateLanguage: (id, language) =>
        set((state) => ({
          languages: state.languages.map((item) =>
            item.id === id ? { ...item, ...language } : item
          ),
        })),

      deleteLanguage: (id) =>
        set((state) => ({
          languages: state.languages.filter((item) => item.id !== id),
        })),

      reorderLanguages: (languages) =>
        set(() => ({
          languages: languages,
        })),

      toggleLanguageVisibility: (id) =>
        set((state) => ({
          languages: state.languages.map((item) =>
            item.id === id ? { ...item, isVisible: !item.isVisible } : item
          ),
        })),

      // Skill methods
      addSkill: (skill) =>
        set((state) => ({
          skills: [...state.skills, { ...skill, id: `skill-${Date.now()}`, isVisible: true }],
        })),

      updateSkill: (id, skill) =>
        set((state) => ({
          skills: state.skills.map((item) => (item.id === id ? { ...item, ...skill } : item)),
        })),

      deleteSkill: (id) =>
        set((state) => ({
          skills: state.skills.filter((item) => item.id !== id),
        })),

      reorderSkills: (skills) =>
        set(() => ({
          skills: skills,
        })),

      toggleSkillVisibility: (id) =>
        set((state) => ({
          skills: state.skills.map((item) =>
            item.id === id ? { ...item, isVisible: !item.isVisible } : item
          ),
        })),

      // Method to clear the form
      clearPersonalInformation: () => set({ personalInformation: initialPersonalInformation }),
    }),
    {
      name: "cv-builder-storage",
      partialize: (state) => ({
        selectedSections: state.selectedSections,
        personalInformation: {
          ...state.personalInformation,
          profileImage: null, // File не може бути серіалізований в localStorage
        },
        professionalSummary: state.professionalSummary,
        profExperience: state.profExperience,
        education: state.education,
        languages: state.languages,
        skills: state.skills,
      }),
    }
  )
);
