import React from "react";
import { Link, Mail, MapPin, Phone } from "lucide-react";

import { getSortedSections } from "@/utils/getSortedSections";

interface ElegantTemplateProps {
  data: any;
}

const PRIMARY = "#2b3896";
const TEXT = "#1b1c1a";

const ElegantTemplate: React.FC<ElegantTemplateProps> = ({ data }) => {
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
  const location = [personalInformation.city, personalInformation.country]
    .filter(Boolean)
    .join(", ");

  const sortedSections = getSortedSections(data);
  const getSectionTitle = (id: string, fallback: string) => sectionTitles[id] || fallback;

  const lexend = "var(--font-lexend, 'Lexend', sans-serif)";
  const jakarta = "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)";

  const SectionHeading = ({ title }: { title: string }) => (
    <h2
      style={{
        fontFamily: lexend,
        color: PRIMARY,
        fontSize: "10.5px",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "16px",
      }}
    >
      {title}
    </h2>
  );

  const Divider = () => (
    <div style={{ height: "1px", backgroundColor: `${TEXT}1a`, margin: "0 0 28px 0" }} />
  );

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "professional-summary": {
        const visible = professionalSummary.filter((s: any) => s.isVisible !== false);

        if (enabledSections["professional-summary"] === false || visible.length === 0) return null;

        return (
          <section
            key={sectionId}
            style={{ marginBottom: "28px" }}
          >
            <SectionHeading
              title={getSectionTitle("professional-summary", "Professional Summary")}
            />
            {visible.map((s: any) => (
              <div key={s.id}>
                {s.title && (
                  <p
                    style={{
                      fontFamily: lexend,
                      fontWeight: 600,
                      fontSize: "13px",
                      marginBottom: "6px",
                      color: TEXT,
                    }}
                  >
                    {s.title}
                  </p>
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: s.description }}
                  style={{
                    fontFamily: jakarta,
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: `${TEXT}e6`,
                  }}
                />
              </div>
            ))}
          </section>
        );
      }

      case "prof_experience": {
        const visible = profExperience.filter((e: any) => e.isVisible !== false);

        if (enabledSections["prof_experience"] === false || visible.length === 0) return null;

        return (
          <section
            key={sectionId}
            style={{ marginBottom: "28px" }}
          >
            <SectionHeading title={getSectionTitle("prof_experience", "Experience")} />
            <div>
              {visible.map((exp: any, i: number) => (
                <div key={exp.id} style={{ marginTop: i > 0 ? "20px" : undefined }}>
                  {/* Title + Date row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "4px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: lexend,
                        fontWeight: 700,
                        fontSize: "15px",
                        color: TEXT,
                      }}
                    >
                      {exp.jobTitle}
                    </h3>
                    <span
                      style={{
                        fontFamily: jakarta,
                        fontSize: "11.5px",
                        fontWeight: 600,
                        color: `${TEXT}80`,
                        flexShrink: 0,
                        marginLeft: "12px",
                      }}
                    >
                      {exp.startDate} – {exp.isCurrentlyWorking ? "Present" : exp.endDate}
                    </span>
                  </div>
                  {/* Company + Location */}
                  <p
                    style={{
                      fontFamily: lexend,
                      fontSize: "12.5px",
                      fontWeight: 700,
                      color: PRIMARY,
                      marginBottom: "8px",
                    }}
                  >
                    {exp.employer}
                    {exp.location ? ` • ${exp.location}` : ""}
                  </p>
                  {/* Description */}
                  <div
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                    style={{
                      fontFamily: jakarta,
                      fontSize: "12.5px",
                      lineHeight: 1.65,
                      color: `${TEXT}e6`,
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        );
      }

      case "education": {
        const visible = education.filter((e: any) => e.isVisible !== false);

        if (enabledSections["education"] === false || visible.length === 0) return null;

        return (
          <section
            key={sectionId}
            style={{ marginBottom: "28px" }}
          >
            <SectionHeading title={getSectionTitle("education", "Education")} />
            <div>
              {visible.map((item: any, i: number) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: i > 0 ? "12px" : undefined,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: lexend,
                        fontWeight: 700,
                        fontSize: "13.5px",
                        color: TEXT,
                        marginBottom: "2px",
                      }}
                    >
                      {item.degree}
                      {item.specialty ? ` in ${item.specialty}` : ""}
                    </p>
                    {item.location && (
                      <p
                        style={{
                          fontFamily: lexend,
                          fontSize: "12.5px",
                          fontWeight: 700,
                          color: PRIMARY,
                        }}
                      >
                        {item.location}
                      </p>
                    )}
                    {item.description && (
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                        style={{
                          fontFamily: jakarta,
                          fontSize: "12px",
                          color: `${TEXT}99`,
                          marginTop: "4px",
                        }}
                      />
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: jakarta,
                      fontSize: "11.5px",
                      fontWeight: 600,
                      color: `${TEXT}80`,
                      flexShrink: 0,
                      marginLeft: "16px",
                    }}
                  >
                    {item.isCurrentlyStudying
                      ? `${item.startDate} – Present`
                      : item.endDate || item.startDate}
                  </span>
                </div>
              ))}
            </div>
          </section>
        );
      }

      case "skills": {
        const visible = skills.filter((s: any) => s.isVisible !== false);

        if (enabledSections["skills"] === false || visible.length === 0) return null;

        return (
          <section
            key={sectionId}
            style={{ marginBottom: "28px" }}
          >
            <SectionHeading title={getSectionTitle("skills", "Technical & Creative Skills")} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {visible.map((item: any) => (
                <span
                  key={item.id}
                  style={{
                    fontFamily: jakarta,
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "9999px",
                    backgroundColor: "#f4f4f0",
                    color: TEXT,
                  }}
                >
                  {item.skill}
                  {item.information ? ` — ${item.information}` : ""}
                </span>
              ))}
            </div>
          </section>
        );
      }

      case "languages": {
        const visible = languages.filter((l: any) => l.isVisible !== false);

        if (enabledSections["languages"] === false || visible.length === 0) return null;

        return (
          <section
            key={sectionId}
            style={{ marginBottom: "28px" }}
          >
            <SectionHeading title={getSectionTitle("languages", "Languages")} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px" }}>
              {visible.map((item: any) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    fontFamily: jakarta,
                    fontSize: "12.5px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "9999px",
                      backgroundColor: PRIMARY,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontWeight: 600, color: TEXT }}>{item.language}</span>
                  {item.level && <span style={{ color: `${TEXT}80` }}>— {item.level}</span>}
                </div>
              ))}
            </div>
          </section>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "1123px",
        width: "100%",
        maxWidth: "816px",
        margin: "0 auto",
        padding: "60px 75px",
        color: TEXT,
        fontFamily: jakarta,
        boxSizing: "border-box",
      }}
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <header style={{ marginBottom: "28px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: lexend,
            fontWeight: 800,
            fontSize: "2.7rem",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: TEXT,
            marginBottom: "10px",
          }}
        >
          {fullName || "Your Name"}
        </h1>

        {personalInformation.jobTitle && (
          <p
            style={{
              fontFamily: lexend,
              fontSize: "15px",
              fontWeight: 500,
              color: PRIMARY,
              letterSpacing: "0.01em",
              marginBottom: "18px",
            }}
          >
            {personalInformation.jobTitle}
          </p>
        )}

        {/* Contact items */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5">
          {personalInformation.email && (
            <div
              className="flex items-center gap-[5px]"
              style={{ fontSize: "12px", fontFamily: jakarta, color: `${TEXT}cc` }}
            >
              <Mail
                size={14}
                color={PRIMARY}
                style={{ marginTop: "2px" }}
              />
              <span>{personalInformation.email}</span>
            </div>
          )}
          {personalInformation.phone && (
            <div
              className="flex items-center gap-[5px]"
              style={{ fontSize: "12px", fontFamily: jakarta, color: `${TEXT}cc` }}
            >
              <Phone
                size={14}
                color={PRIMARY}
              />
              <span>{personalInformation.phone}</span>
            </div>
          )}
          {personalInformation.website && (
            <div
              className="flex items-center gap-[5px]"
              style={{ fontSize: "12px", fontFamily: jakarta, color: `${TEXT}cc` }}
            >
              <Link
                size={14}
                color={PRIMARY}
              />
              <span>{personalInformation.website}</span>
            </div>
          )}
          {location && (
            <div
              className="flex items-center gap-[5px]"
              style={{ fontSize: "12px", fontFamily: jakarta, color: `${TEXT}cc` }}
            >
              <MapPin
                size={14}
                color={PRIMARY}
                style={{ marginTop: "1px" }}
              />
              <span>{location}</span>
            </div>
          )}
        </div>
      </header>

      <Divider />

      {/* ── Sections ───────────────────────────────────────── */}
      {sortedSections
        .filter((s) => s.id !== "personal-information")
        .map((s) => renderSection(s.id))}
    </div>
  );
};

export default ElegantTemplate;
