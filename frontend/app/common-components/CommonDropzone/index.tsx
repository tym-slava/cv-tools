import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Upload } from "lucide-react";

interface FileWithPreview extends File {
  preview: string;
}

interface CommonDropzoneProps {
  onFileSelect?: (files: FileWithPreview[]) => void;
}

function CommonDropzone({ onFileSelect }: CommonDropzoneProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles(filesWithPreview);
      onFileSelect?.(filesWithPreview);
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div className="w-[200px] h-[200px] ">
        <Image
          width={100}
          height={100}
          className="w-full h-full rounded-full object-cover"
          src={file.preview}
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

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
