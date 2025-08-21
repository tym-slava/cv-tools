import { create } from "zustand";

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

// Main type of CV Builder state
interface CvBuilderState {
  // Selected sections of CV
  selectedSections: string[];

  // Personal information
  personalInformation: PersonalInformation;

  // Professional Summary
  professionalSummary: ProfessionalSummary[];

  // Methods to update the state
  setSelectedSections: (sections: string[]) => void;
  setPersonalInformation: (information: Partial<PersonalInformation>) => void;

  // Professional Summary methods
  addProfessionalSummary: (summary: Omit<ProfessionalSummary, "id">) => void;
  updateProfessionalSummary: (id: string, summary: Partial<ProfessionalSummary>) => void;
  deleteProfessionalSummary: (id: string) => void;
  reorderProfessionalSummary: (summaries: ProfessionalSummary[]) => void;

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

// Create the store
export const useCvBuilderStore = create<CvBuilderState>((set) => ({
  // Initial state
  selectedSections: ["personal-information"],
  personalInformation: initialPersonalInformation,
  professionalSummary: [],

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

  // Method to clear the form
  clearPersonalInformation: () => set({ personalInformation: initialPersonalInformation }),
}));
