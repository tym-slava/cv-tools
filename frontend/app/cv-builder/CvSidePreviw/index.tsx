import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";

import { useCvBuilderStore } from "@/store/useCvBuilderStore";

interface CvSidePreviewProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

function CvSidePreviw({ isOpen, onOpenChange }: CvSidePreviewProps) {
  const { personalInformation, professionalSummary, profExperience, education, skills, languages } =
    useCvBuilderStore();

  const fullName =
    `${personalInformation.firstName} ${personalInformation.lastName}`.trim() || "Ваше ім'я";
  const location =
    [personalInformation.city, personalInformation.country].filter(Boolean).join(", ") ||
    "Місто, Країна";

  return (
    <Drawer
      isOpen={isOpen}
      size="2xl"
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">Preview CV</DrawerHeader>
            <DrawerBody>
              <div className="cv-preview-content">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {personalInformation.profileImagePreview?.preview &&
                      personalInformation.profileImagePreview.preview.startsWith("data:") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={personalInformation.profileImagePreview.preview}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">Фото</span>
                      )}
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{fullName}</h1>
                    <p className="text-gray-600">{personalInformation.jobTitle || "Посада"}</p>
                  </div>

                  <div className="space-y-4">
                    {/* Contact Information */}
                    {(personalInformation.email ||
                      personalInformation.phone ||
                      location !== "Місто, Країна") && (
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Contact information</h2>
                        <div className="text-sm space-y-1">
                          {personalInformation.email && <p>📧 {personalInformation.email}</p>}
                          {personalInformation.phone && <p>📱 {personalInformation.phone}</p>}
                          {location !== "Місто, Країна" && <p>📍 {location}</p>}
                          {personalInformation.website && <p>🌐 {personalInformation.website}</p>}
                        </div>
                      </div>
                    )}

                    {/* Professional Summary */}
                    {professionalSummary.filter((summary) => summary.isVisible !== false).length >
                      0 && (
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Professional summary</h2>
                        <div className="space-y-3">
                          {professionalSummary
                            .filter((summary) => summary.isVisible !== false)
                            .map((summary) => (
                              <div
                                key={summary.id}
                                className="text-sm"
                              >
                                {summary.title && (
                                  <h3 className="font-medium mb-1">{summary.title}</h3>
                                )}
                                <p className="text-gray-700 whitespace-pre-wrap">
                                  {summary.description}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Professional Experience */}
                    {profExperience.filter((exp) => exp.isVisible !== false).length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Work experience</h2>
                        <div className="space-y-4">
                          {profExperience
                            .filter((exp) => exp.isVisible !== false)
                            .map((experience) => (
                              <div
                                key={experience.id}
                                className="text-sm"
                              >
                                <h3 className="font-medium">{experience.jobTitle}</h3>
                                <p className="text-gray-600 mb-1">{experience.employer}</p>
                                <p className="text-xs text-gray-500 mb-2">
                                  {experience.startDate} - {experience.endDate}
                                </p>
                                <p className="text-gray-700 whitespace-pre-wrap">
                                  {experience.description}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Education */}
                    {education.filter((edu) => edu.isVisible !== false).length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Education</h2>
                        <div className="space-y-4">
                          {education
                            .filter((edu) => edu.isVisible !== false)
                            .map((edu) => (
                              <div
                                key={edu.id}
                                className="text-sm"
                              >
                                <h3 className="font-medium">{edu.degree}</h3>
                                <p className="text-gray-600 mb-1">{edu.specialty}</p>
                                {edu.location && (
                                  <p className="text-xs text-gray-500">📍 {edu.location}</p>
                                )}
                                <p className="text-xs text-gray-500 mb-2">
                                  {edu.startDate} - {edu.endDate}
                                </p>
                                <p className="text-gray-700 whitespace-pre-wrap">
                                  {edu.description}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {skills.filter((skill) => skill.isVisible !== false).length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Skills</h2>
                        <div className="space-y-3">
                          {skills
                            .filter((skill) => skill.isVisible !== false)
                            .map((skill) => (
                              <div
                                key={skill.id}
                                className="text-sm"
                              >
                                <div className="flex justify-between items-start mb-1">
                                  <h3 className="font-medium">{skill.skill}</h3>
                                  {skill.level && (
                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                      {skill.level}
                                    </span>
                                  )}
                                </div>
                                {skill.information && (
                                  <p className="text-gray-700 whitespace-pre-wrap">
                                    {skill.information}
                                  </p>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Languages */}
                    {languages.filter((lang) => lang.isVisible !== false).length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Languages</h2>
                        <div className="space-y-3">
                          {languages
                            .filter((lang) => lang.isVisible !== false)
                            .map((lang) => (
                              <div
                                key={lang.id}
                                className="text-sm"
                              >
                                <div className="flex justify-between items-start mb-1">
                                  <h3 className="font-medium">{lang.language}</h3>
                                  {lang.level && (
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                      {lang.level}
                                    </span>
                                  )}
                                </div>
                                {lang.additionalInfo && (
                                  <p className="text-gray-700 whitespace-pre-wrap">
                                    {lang.additionalInfo}
                                  </p>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Empty State */}
                    {!personalInformation.email &&
                      !personalInformation.phone &&
                      professionalSummary.filter((summary) => summary.isVisible !== false)
                        .length === 0 &&
                      profExperience.filter((exp) => exp.isVisible !== false).length === 0 &&
                      education.filter((edu) => edu.isVisible !== false).length === 0 &&
                      skills.filter((skill) => skill.isVisible !== false).length === 0 &&
                      languages.filter((lang) => lang.isVisible !== false).length === 0 && (
                        <div className="text-center py-8">
                          <p className="text-gray-500">
                            Fill in the data in the form to see the preview
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
              <Button
                color="primary"
                onPress={onClose}
              >
                Download PDF
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export default CvSidePreviw;
