import React from "react";

interface StandartTemplateProps {
  data: any;
}

const StandartTemplate: React.FC<StandartTemplateProps> = ({ data }) => {
  const { personalInformation, professionalSummary, profExperience, education, skills, languages } =
    data;

  const fullName = `${personalInformation.firstName} ${personalInformation.lastName}`.trim();
  const location = [personalInformation.city, personalInformation.country]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="bg-white p-10 font-sans text-black min-h-[1123px] w-full max-w-[800px] mx-auto shadow-lg">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-tight">{fullName || "Your Name"}</h1>
        <p className="text-xl text-gray-600 mb-4">{personalInformation.jobTitle || "Job Title"}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-700">
          {location && <span>{location}</span>}
          {personalInformation.email && <span>{personalInformation.email}</span>}
          {personalInformation.phone && <span>{personalInformation.phone}</span>}
          {personalInformation.website && <span>{personalInformation.website}</span>}
        </div>
      </header>

      {/* Profile */}
      {professionalSummary.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">
            Profile
          </h2>
          <div className="space-y-3">
            {professionalSummary
              .filter((s: any) => s.isVisible !== false)
              .map((s: any) => (
                <div key={s.id}>
                  {s.title && <h3 className="font-semibold">{s.title}</h3>}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{s.description}</p>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {profExperience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">
            Work Experience
          </h2>
          <div className="space-y-4">
            {profExperience
              .filter((exp: any) => exp.isVisible !== false)
              .map((exp: any) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base">{exp.jobTitle}</h3>
                    <span className="text-sm font-medium">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{exp.employer}</div>
                  {exp.location && (
                    <div className="text-sm text-gray-600 italic mb-2">{exp.location}</div>
                  )}
                  <p className="text-sm whitespace-pre-wrap leading-relaxed text-gray-800">
                    {exp.description}
                  </p>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">
            Education
          </h2>
          <div className="space-y-3">
            {education
              .filter((edu: any) => edu.isVisible !== false)
              .map((edu: any) => (
                <div
                  key={edu.id}
                  className="flex justify-between items-baseline"
                >
                  <div>
                    <h3 className="font-bold text-sm">{edu.degree}</h3>
                    <p className="text-sm">
                      {edu.specialty} | {edu.location}
                    </p>
                  </div>
                  <span className="text-sm">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Skills & Languages Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">
              Skills
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {skills
                .filter((s: any) => s.isVisible !== false)
                .map((s: any) => (
                  <li
                    key={s.id}
                    className="text-sm"
                  >
                    <span className="font-semibold">{s.skill}</span>: {s.information}
                  </li>
                ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">
              Languages
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {languages
                .filter((l: any) => l.isVisible !== false)
                .map((l: any) => (
                  <li
                    key={l.id}
                    className="text-sm"
                  >
                    <span className="font-semibold">{l.language}</span> — {l.level}
                  </li>
                ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default StandartTemplate;
