import React from "react";

import { getSortedSections } from "@/utils/getSortedSections";

interface StandartTemplateProps {
  data: any;
}

const BLUE = "#2563EB";

const StandartTemplate: React.FC<StandartTemplateProps> = ({ data }) => {
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

  const contactParts = [
    [personalInformation.city, personalInformation.country].filter(Boolean).join(", "),
    personalInformation.phone,
    personalInformation.email,
    personalInformation.website,
  ].filter(Boolean);

  const sortedSections = getSortedSections(data);
  const getSectionTitle = (id: string, fallback: string) => sectionTitles[id] || fallback;

  const profileImageUrl = personalInformation.profileImagePreview?.preview;

  const SectionHeading = ({ title }: { title: string }) => (
    <h2
      style={{
        fontSize: "15px",
        fontWeight: 700,
        textTransform: "uppercase",
        color: BLUE,
        borderBottom: `2px solid ${BLUE}`,
        paddingBottom: "4px",
        marginBottom: "12px",
        letterSpacing: "0.03em",
      }}
    >
      {title}
    </h2>
  );

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "professional-summary": {
        const visible = professionalSummary.filter((s: any) => s.isVisible !== false);

        if (enabledSections["professional-summary"] === false || visible.length === 0) return null;

        return (
          <section key={sectionId} style={{ marginBottom: "20px" }}>
            <SectionHeading title={getSectionTitle("professional-summary", "Summary")} />
            {visible.map((s: any) => (
              <div
                key={s.id}
                dangerouslySetInnerHTML={{ __html: s.description }}
                style={{
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: "#333",
                }}
              />
            ))}
          </section>
        );
      }

      case "prof_experience": {
        const visible = profExperience.filter((e: any) => e.isVisible !== false);

        if (enabledSections["prof_experience"] === false || visible.length === 0) return null;

        return (
          <section key={sectionId} style={{ marginBottom: "20px" }}>
            <SectionHeading title={getSectionTitle("prof_experience", "Professional Experience")} />
            <div>
              {visible.map((exp: any, i: number) => (
                <div key={exp.id} style={{ marginTop: i > 0 ? "16px" : undefined }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "2px",
                    }}
                  >
                    <p style={{ fontWeight: 700, fontSize: "14px", color: "#111" }}>
                      {exp.jobTitle}
                      {exp.employer ? `, ${exp.employer}` : ""}
                    </p>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#111",
                        flexShrink: 0,
                        marginLeft: "12px",
                      }}
                    >
                      {exp.startDate} — {exp.isCurrentlyWorking ? "Present" : exp.endDate}
                    </span>
                  </div>
                  {exp.location && (
                    <p style={{ fontSize: "12.5px", color: "#555", marginBottom: "4px" }}>
                      {exp.location}
                    </p>
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "#333",
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
          <section key={sectionId} style={{ marginBottom: "20px" }}>
            <SectionHeading title={getSectionTitle("education", "Education")} />
            <div>
              {visible.map((item: any, i: number) => (
                <div key={item.id} style={{ marginTop: i > 0 ? "12px" : undefined }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "2px",
                    }}
                  >
                    <p style={{ fontWeight: 700, fontSize: "14px", color: "#111" }}>
                      {item.degree}
                      {item.specialty ? ` in ${item.specialty}` : ""}
                    </p>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#111",
                        flexShrink: 0,
                        marginLeft: "12px",
                      }}
                    >
                      {item.isCurrentlyStudying
                        ? `${item.startDate} — Present`
                        : item.endDate
                          ? `${item.startDate} — ${item.endDate}`
                          : item.startDate}
                    </span>
                  </div>
                  {item.location && (
                    <p style={{ fontSize: "12.5px", color: "#555", marginBottom: "2px" }}>
                      {item.location}
                    </p>
                  )}
                  {item.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      style={{
                        fontSize: "12.5px",
                        lineHeight: 1.5,
                        color: "#444",
                        marginTop: "2px",
                      }}
                    />
                  )}
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
          <section key={sectionId} style={{ marginBottom: "20px" }}>
            <SectionHeading title={getSectionTitle("skills", "Technical Skills")} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "4px 24px",
              }}
            >
              {visible.map((item: any) => (
                <span key={item.id} style={{ fontSize: "13px", color: "#333" }}>
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
          <section key={sectionId} style={{ marginBottom: "20px" }}>
            <SectionHeading title={getSectionTitle("languages", "Languages")} />
            <div style={{ fontSize: "13px", color: "#333" }}>
              {visible.map((item: any, i: number) => (
                <span key={item.id}>
                  {item.language}
                  {item.level ? ` (${item.level})` : ""}
                  {i < visible.length - 1 ? ", " : ""}
                </span>
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
      className="bg-white min-h-[1123px] w-full max-w-[800px] mx-auto shadow-lg"
      style={{
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        color: "#111",
        boxSizing: "border-box",
        padding: "40px 48px",
      }}
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "24px",
          borderBottom: "3px solid #111",
          paddingBottom: "16px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: BLUE,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              marginBottom: "4px",
            }}
          >
            {fullName || "Your Name"}
          </h1>

          {personalInformation.jobTitle && (
            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {personalInformation.jobTitle}
            </p>
          )}

          {contactParts.length > 0 && (
            <p style={{ fontSize: "12.5px", color: "#555" }}>
              {contactParts.join(" | ")}
            </p>
          )}
        </div>

        {profileImageUrl && (
          <div
            style={{
              width: "90px",
              height: "110px",
              flexShrink: 0,
              marginLeft: "20px",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </header>

      {/* ── Sections ───────────────────────────────────────── */}
      {sortedSections
        .filter((s) => s.id !== "personal-information")
        .map((s) => renderSection(s.id))}
    </div>
  );
};

export default StandartTemplate;
