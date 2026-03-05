/**
 * Utility for retrieving sections in the correct order
 * based on the user's sectionsOrder setting.
 */

interface SectionData {
  id: string;
  title: string;
  data: any;
  renderCondition: boolean;
}

export const getSortedSections = (cvData: any): SectionData[] => {
  const { sectionsOrder } = cvData;

  // Define all available sections with their data
  const allSections: SectionData[] = [
    {
      id: "personal-information",
      title: "Personal Information",
      data: cvData.personalInformation,
      renderCondition: true,
    },
    {
      id: "professional-summary",
      title: "Professional Summary",
      data: cvData.professionalSummary,
      renderCondition: cvData.professionalSummary?.length > 0,
    },
    {
      id: "prof_experience",
      title: "Professional Experience",
      data: cvData.profExperience,
      renderCondition: cvData.profExperience?.length > 0,
    },
    {
      id: "education",
      title: "Education",
      data: cvData.education,
      renderCondition: cvData.education?.length > 0,
    },
    {
      id: "skills",
      title: "Skills",
      data: cvData.skills,
      renderCondition: cvData.skills?.length > 0,
    },
    {
      id: "languages",
      title: "Languages",
      data: cvData.languages,
      renderCondition: cvData.languages?.length > 0,
    },
  ];

  // If there is no sectionsOrder, return in default order
  if (!sectionsOrder || sectionsOrder.length === 0) {
    return allSections;
  }

  // Sort sections according to sectionsOrder
  const sortedSections = allSections.sort((a, b) => {
    const indexA = sectionsOrder.indexOf(a.id);
    const indexB = sectionsOrder.indexOf(b.id);

    // If a section is not in sectionsOrder, push it to the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });

  return sortedSections;
};
