import React from "react";
import { Link, Mail, MapPin, Phone } from "lucide-react";

import { getSortedSections } from "@/utils/getSortedSections";

interface ElegantTemplateProps {
  data: any;
}

const ElegantTemplate: React.FC<ElegantTemplateProps> = ({ data }) => {
  const { personalInformation, professionalSummary, profExperience, education, skills, languages } =
    data;

  const fullName = `${personalInformation.firstName} ${personalInformation.lastName}`.trim();
  const location = [personalInformation.city, personalInformation.country]
    .filter(Boolean)
    .join(", ");

  // Получаем секции в правильном порядке
  const sortedSections = getSortedSections(data);

  const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-gray-100 text-center font-semibold uppercase tracking-widest text-sm py-1 rounded-md border border-gray-200">
      {title}
    </div>
  );

  const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <span className="text-gray-600">{icon}</span>
      <span>{text}</span>
    </div>
  );

  // Рендер секции по ID
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "professional-summary":
        return (
          professionalSummary.filter((summary: any) => summary.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="space-y-3"
            >
              <SectionTitle title="Profile" />
              <div className="space-y-3">
                {professionalSummary
                  .filter((summary: any) => summary.isVisible !== false)
                  .map((summary: any) => (
                    <div key={summary.id}>
                      {summary.title && <p className="font-semibold mb-1">{summary.title}</p>}
                      <div
                        dangerouslySetInnerHTML={{ __html: summary.description }}
                        className="text-sm leading-relaxed"
                      />
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      case "prof_experience":
        return (
          profExperience.filter((experience: any) => experience.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="space-y-4"
            >
              <SectionTitle title="Professional Experience" />
              <div className="space-y-6">
                {profExperience
                  .filter((experience: any) => experience.isVisible !== false)
                  .map((experience: any) => (
                    <div
                      key={experience.id}
                      className="grid grid-cols-[140px,1fr] gap-6"
                    >
                      <div className="text-sm text-gray-700">
                        <p className="font-medium">
                          {experience.startDate} —{" "}
                          {experience.isCurrentlyWorking ? "Present" : experience.endDate}
                        </p>
                        {experience.location && (
                          <p className="mt-1 text-gray-600">{experience.location}</p>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{experience.employer}</p>
                        <p className="text-sm text-gray-700">{experience.jobTitle}</p>
                        <div
                          dangerouslySetInnerHTML={{ __html: experience.description }}
                          className="mt-2 text-sm leading-relaxed"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      case "education":
        return (
          education.filter((item: any) => item.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="space-y-4"
            >
              <SectionTitle title="Education" />
              <div className="space-y-4">
                {education
                  .filter((item: any) => item.isVisible !== false)
                  .map((item: any) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[140px,1fr] gap-6"
                    >
                      <div className="text-sm text-gray-700">
                        <p className="font-medium">
                          {item.startDate} — {item.isCurrentlyStudying ? "Present" : item.endDate}
                        </p>
                        {item.location && <p className="mt-1 text-gray-600">{item.location}</p>}
                      </div>
                      <div>
                        <p className="font-semibold">{item.degree}</p>
                        <p className="text-sm text-gray-700">{item.specialty}</p>
                        {item.description && (
                          <div
                            dangerouslySetInnerHTML={{ __html: item.description }}
                            className="text-sm text-gray-700 mt-2"
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      case "skills":
        return (
          skills.filter((item: any) => item.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="space-y-4"
            >
              <SectionTitle title="Technologies" />
              <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                {skills
                  .filter((item: any) => item.isVisible !== false)
                  .map((item: any) => (
                    <div
                      key={item.id}
                      className="text-sm"
                    >
                      <span className="font-medium">{item.skill}</span>
                      {item.information && <span> — {item.information}</span>}
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      case "languages":
        return (
          languages.filter((item: any) => item.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="space-y-4"
            >
              <SectionTitle title="Languages" />
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {languages
                  .filter((item: any) => item.isVisible !== false)
                  .map((item: any) => (
                    <div
                      key={item.id}
                      className="text-sm"
                    >
                      <span className="font-medium">{item.language}</span>
                      {item.level && <span> — {item.level}</span>}
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white font-serif text-black min-h-[1123px] w-full max-w-[800px] mx-auto shadow-lg">
      <header className="bg-gray-200 px-10 py-8">
        <h1 className="text-4xl font-bold">{fullName || "Your Name"}</h1>
        <p className="text-xl text-gray-700 mt-1">{personalInformation.jobTitle || "Job Title"}</p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {personalInformation.email && (
            <ContactItem
              icon={<Mail size={16} />}
              text={personalInformation.email}
            />
          )}
          {personalInformation.phone && (
            <ContactItem
              icon={<Phone size={16} />}
              text={personalInformation.phone}
            />
          )}
          {location && (
            <ContactItem
              icon={<MapPin size={16} />}
              text={location}
            />
          )}
          {personalInformation.website && (
            <ContactItem
              icon={<Link size={16} />}
              text={personalInformation.website}
            />
          )}
        </div>
      </header>

      <div className="px-10 py-8 space-y-8">
        {/* Динамические секции в порядке пользователя */}
        {sortedSections
          .filter((section) => section.id !== "personal-information")
          .map((section) => renderSection(section.id))}
      </div>
    </div>
  );
};

export default ElegantTemplate;
