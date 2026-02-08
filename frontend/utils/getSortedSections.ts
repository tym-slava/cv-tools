/**
 * Утилита для получения секций в правильном порядке
 * согласно настройкам пользователя (sectionsOrder)
 */

interface SectionData {
  id: string;
  title: string;
  data: any;
  renderCondition: boolean;
}

export const getSortedSections = (cvData: any): SectionData[] => {
  const { sectionsOrder } = cvData;

  // Определяем все доступные секции с их данными
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

  // Если нет sectionsOrder, возвращаем в дефолтном порядке
  if (!sectionsOrder || sectionsOrder.length === 0) {
    return allSections;
  }

  // Сортируем секции согласно sectionsOrder
  const sortedSections = allSections.sort((a, b) => {
    const indexA = sectionsOrder.indexOf(a.id);
    const indexB = sectionsOrder.indexOf(b.id);

    // Если секции нет в sectionsOrder, помещаем её в конец
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });

  return sortedSections;
};
