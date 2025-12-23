"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { showToast } from "@/lib/showToast";

const UploadMedia = ({ isMultiple }) => {
  const handleOnError = (error) => {
    showToast("error", error.statusText);
  };
  const handleOnQueueEnd = async (results) => {
    console.log(results);
  };

  return (
    <div>
      <CldUploadWidget
        signatureEndpoint="/api/cloudinary-signature"
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPDATE_PRESET}
        onError={handleOnError}
        onQueuesEnd={handleOnQueueEnd}
        config={{
          cloud: {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
          },
        }}
        options={{
          multiple: isMultiple,
          sources: ["local", "url", "unsplash", "google_drive"],
        }}
      >
        {({ open }) => {
          return (
            <Button onClick={() => open()}>
              <FiPlus />
              Upload Media
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadMedia;
