import React, { useState, useEffect } from "react";
import { Input, Form, addToast } from "@heroui/react";

import CommonDropzone from "@/common-components/CommonDropzone";
import CommonAddButton from "@/common-components/buttons/CommonAddButton";
import { useCvBuilderStore } from "@/store/useCvBuilderStore";

// 🔧 Інтерфейс для файлу з прев'ю
interface FileWithPreview extends File {
  preview: string;
}

const PersonalInformation: React.FC = () => {
  // 🏪 Connect to the store and get the data and methods
  const { personalInformation: savedPersonalInformation, setPersonalInformation } =
    useCvBuilderStore();

  // 📝 Local state for the form - initialize with the saved data
  const [formData, setFormData] = useState({
    firstName: savedPersonalInformation.firstName,
    lastName: savedPersonalInformation.lastName,
    jobTitle: savedPersonalInformation.jobTitle,
    email: savedPersonalInformation.email,
    phone: savedPersonalInformation.phone,
    city: savedPersonalInformation.city,
    country: savedPersonalInformation.country,
    website: savedPersonalInformation.website,
  });

  // Синхронізація formData з даними зі store
  useEffect(() => {
    setFormData({
      firstName: savedPersonalInformation.firstName,
      lastName: savedPersonalInformation.lastName,
      jobTitle: savedPersonalInformation.jobTitle,
      email: savedPersonalInformation.email,
      phone: savedPersonalInformation.phone,
      city: savedPersonalInformation.city,
      country: savedPersonalInformation.country,
      website: savedPersonalInformation.website,
    });
  }, [savedPersonalInformation]);

  // 🖼️ Local state for the image - initialize with the saved image
  const [localProfileImage, setLocalProfileImage] = useState<FileWithPreview | null>(() => {
    // Create a mock File object from profileImagePreview if it exists
    if (savedPersonalInformation.profileImagePreview) {
      const preview = savedPersonalInformation.profileImagePreview.preview;

      // Check if preview is a valid base64 string (not blob URL)
      if (preview && preview.startsWith("data:")) {
        const mockFile = new File([""], savedPersonalInformation.profileImagePreview.name, {
          type: savedPersonalInformation.profileImagePreview.type,
        }) as FileWithPreview;

        mockFile.preview = preview;

        return mockFile;
      }
    }

    return null;
  });

  // 🧹 Clean up old blob URLs on mount (run only once)
  useEffect(() => {
    if (
      savedPersonalInformation.profileImagePreview?.preview &&
      savedPersonalInformation.profileImagePreview.preview.startsWith("blob:")
    ) {
      // Clear the invalid blob URL from store
      setPersonalInformation({
        profileImage: null,
        profileImagePreview: null,
      });
    }
  }, []);

  // Синхронізація localProfileImage з даними зі store
  useEffect(() => {
    if (savedPersonalInformation.profileImagePreview) {
      const preview = savedPersonalInformation.profileImagePreview.preview;

      if (preview && preview.startsWith("data:")) {
        const mockFile = new File([""], savedPersonalInformation.profileImagePreview.name, {
          type: savedPersonalInformation.profileImagePreview.type,
        }) as FileWithPreview;

        mockFile.preview = preview;
        setLocalProfileImage(mockFile);
      } else {
        setLocalProfileImage(null);
      }
    } else {
      setLocalProfileImage(null);
    }
  }, [savedPersonalInformation.profileImagePreview]);

  // 📝 Handler for the form fields change (local state)
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // 📁 Handler for the file selection (temporarily save locally)
  const handleFileSelect = (files: FileWithPreview[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];

      setLocalProfileImage(selectedFile);
    }
  };

  // 💾 Handler for the form submission (save to the global store)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 📝 Save all data to the global store in one call
    setPersonalInformation({
      ...formData,
      profileImage: localProfileImage,
      profileImagePreview: localProfileImage
        ? {
            name: localProfileImage.name,
            size: localProfileImage.size,
            type: localProfileImage.type,
            preview: localProfileImage.preview,
          }
        : null,
    });

    // show toast success
    addToast({
      title: "Personal Information Saved Successfully",
      color: "success",
      variant: "bordered",
    });
  };

  return (
    <div className="personal-information__component">
      <Form onSubmit={handleSubmit}>
        <div className="w-full flex justify-center">
          <CommonDropzone
            initialFile={localProfileImage}
            onFileSelect={handleFileSelect}
          />
        </div>

        <div className="w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>

        <div className="w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4">
          <Input
            label="Job Title"
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          />
        </div>

        <div className="w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4">
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        <div className="w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4">
          <Input
            label="Country"
            name="country"
            type="text"
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          />
          <Input
            label="City"
            name="city"
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        </div>

        <div className="w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4">
          <Input
            label="Website"
            name="website"
            type="url"
            value={formData.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
          />
        </div>

        <div className="w-full mb-4 flex justify-center">
          <CommonAddButton
            type="submit"
            buttonText="Save"
          />
        </div>
      </Form>
    </div>
  );
};

export default PersonalInformation;
