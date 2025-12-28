import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

interface FileWithPreview extends File {
  preview: string;
}

interface CommonDropzoneProps {
  onFileSelect?: (files: FileWithPreview[]) => void;
  initialFile?: FileWithPreview | null;
}

function CommonDropzone({ onFileSelect, initialFile }: CommonDropzoneProps) {
  const [files, setFiles] = useState<FileWithPreview[]>(
    initialFile ? [initialFile] : []
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: async (acceptedFiles) => {
      const filesWithPreview = await Promise.all(
        acceptedFiles.map(async (file) => {
          return new Promise<FileWithPreview>((resolve) => {
            const reader = new FileReader();

            reader.onloadend = () => {
              resolve(
                Object.assign(file, {
                  preview: reader.result as string, // base64 string
                })
              );
            };
            reader.readAsDataURL(file);
          });
        })
      );

      setFiles(filesWithPreview);
      onFileSelect?.(filesWithPreview);
    },
  });

  // Update files when initialFile changes
  useEffect(() => {
    if (initialFile && files.length === 0) {
      setFiles([initialFile]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFile]);

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div className="w-[200px] h-[200px] ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full rounded-full object-cover"
          src={file.preview}
          alt={file.name}
        />
      </div>
    </div>
  ));

  return (
    <section className="container">
      <aside className="w-full flex flex-wrap justify-center">{thumbs}</aside>
      <div {...getRootProps({ className: "dropzone flex flex-col items-center justify-center" })}>
        <input {...getInputProps()} />
        <div className="my-2 text-sm text-blue-500 hover:text-blue-600 cursor-pointer flex flex-col items-center gap-2">
          Upload Profile Image
          <Upload />
        </div>
      </div>
    </section>
  );
}

export default CommonDropzone;
