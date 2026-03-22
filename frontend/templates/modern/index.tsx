import React from "react";
import { Mail, Phone, MapPin, Link } from "lucide-react";

import { formatDateRange } from "@/utils/formatDateRange";
import { getSortedSections } from "@/utils/getSortedSections";
import { TemplateData } from "@/types";

const ModernTemplate: React.FC<{ data: TemplateData }> = ({ data }) => {
  const {
    personalInformation,
    professionalSummary,
    profExperience,
    education,
    skills,
    languages,
    sectionTitles = {},
    enabledSections = {},
  } = data;

  const fullName = `${personalInformation.firstName} ${personalInformation.lastName}`.trim();

  // Get sections in the user-defined order
  const sortedSections = getSortedSections(data);

  // Helper to get custom or default section heading
  const getSectionTitle = (id: string, fallback: string) => sectionTitles[id] || fallback;

  // Render section by ID
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "professional-summary":
        return (
          enabledSections["professional-summary"] !== false &&
          professionalSummary.filter((s) => s.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="mb-8"
            >
              <div className="bg-gray-100 py-1 text-center font-bold uppercase tracking-wider mb-4 border-y border-gray-200">
                {getSectionTitle("professional-summary", "Profile")}
              </div>
              <div className="space-y-4">
                {professionalSummary
                  .filter((s) => s.isVisible !== false)
                  .map((s) => (
                    <div key={s.id}>
                      <div
                        dangerouslySetInnerHTML={{ __html: s.description }}
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
          enabledSections["prof_experience"] !== false &&
          profExperience.filter((exp) => exp.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="mb-8"
            >
              <div className="bg-gray-100 py-1 text-center font-bold uppercase tracking-wider mb-4 border-y border-gray-200">
                {getSectionTitle("prof_experience", "Work Experience")}
              </div>
              <div className="space-y-6">
                {profExperience
                  .filter((exp) => exp.isVisible !== false)
                  .map((exp) => (
                    <div
                      key={exp.id}
                      className="relative mt-4"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="font-bold">{exp.jobTitle}</span>, {exp.employer}
                        </div>
                        <div className="text-sm text-right">
                          {formatDateRange(exp.startDate, exp.endDate, exp.isCurrentlyWorking)}
                        </div>
                      </div>
                      {exp.location && (
                        <div className="text-sm text-gray-600 mb-2 italic">{exp.location}</div>
                      )}
                      <div
                        dangerouslySetInnerHTML={{ __html: exp.description }}
                        className="text-sm leading-relaxed"
                      />
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      case "education":
        return (
          enabledSections["education"] !== false &&
          education.filter((edu) => edu.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="mb-8"
            >
              <div className="bg-gray-100 py-1 text-center font-bold uppercase tracking-wider mb-4 border-y border-gray-200">
                {getSectionTitle("education", "Education")}
              </div>
              <div className="space-y-4">
                {education
                  .filter((edu) => edu.isVisible !== false)
                  .map((edu) => (
                    <div
                      key={edu.id}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <span className="font-bold">{edu.degree}</span>, {edu.specialty},{" "}
                        {edu.location}
                      </div>
                      <div className="text-sm text-right">
                        {formatDateRange(edu.startDate, edu.endDate, edu.isCurrentlyStudying)}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      case "skills":
        return (
          enabledSections["skills"] !== false &&
          skills.filter((s) => s.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="mb-8"
            >
              <div className="bg-gray-100 py-1 text-center font-bold uppercase tracking-wider mb-4 border-y border-gray-200">
                {getSectionTitle("skills", "Skills")}
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {skills
                  .filter((s) => s.isVisible !== false)
                  .map((s) => (
                    <div
                      key={s.id}
                      className="text-sm"
                    >
                      <p className="leading-relaxed">
                        • {s.skill}: {s.information}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          )
        );

      case "languages":
        return (
          enabledSections["languages"] !== false &&
          languages.filter((l) => l.isVisible !== false).length > 0 && (
            <section
              key={sectionId}
              className="mb-8"
            >
              <div className="bg-gray-100 py-1 text-center font-bold uppercase tracking-wider mb-4 border-y border-gray-200">
                {getSectionTitle("languages", "Languages")}
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {languages
                  .filter((l) => l.isVisible !== false)
                  .map((l) => (
                    <div
                      key={l.id}
                      className="text-sm"
                    >
                      • {l.language} {l.level && `(${l.level})`}
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
    <div className="bg-white p-10 font-serif text-black min-h-[1123px] w-full max-w-[800px] mx-auto shadow-lg">
      {/* Header — always rendered first */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-1">{fullName}</h1>
        <p className="text-2xl text-gray-700 mb-6">{personalInformation.jobTitle}</p>

        <div className="grid grid-cols-2 gap-y-2 text-sm">
          {(personalInformation.city || personalInformation.country) && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>
                {[personalInformation.city, personalInformation.country].filter(Boolean).join(", ")}
              </span>
            </div>
          )}
          {personalInformation.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{personalInformation.email}</span>
            </div>
          )}
          {personalInformation.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{personalInformation.phone}</span>
            </div>
          )}
          {personalInformation.website && (
            <div className="flex items-center gap-2">
              <Link size={16} />
              <span>{personalInformation.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Dynamic sections in user-defined order */}
      {sortedSections
        .filter((section) => section.id !== "personal-information")
        .map((section) => renderSection(section.id))}
    </div>
  );
};

export default ModernTemplate;
