import { CloudOff } from "lucide-react";
import { FileUser } from "lucide-react";
import { FileText } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { FileKey2 } from "lucide-react";
import { Columns2 } from "lucide-react";

export const advantagesList = [
  {
    title: "No Sign-Up Needed",
    description:
      "Start building your resume instantly — no registration, no email required. Just open, edit, and download your CV.",
    icon: <CloudOff />,
  },
  {
    title: "Professional Templates",
    description:
      "Choose from clean, modern templates that are optimized for recruiters and ATS systems. Your resume will stand out.",
    icon: <FileUser />,
  },
  {
    title: "One-Click PDF Export",
    description:
      "Download your resume in high-quality PDF format with a single click. Ready to send to employers or job platforms.",
    icon: <FileText />,
  },
  {
    title: "Mobile-Friendly Design",
    description:
      "Build and edit your resume on any device: desktop, tablet, or smartphone. It’s fully responsive and optimized for all screens.",
    icon: <TabletSmartphone />,
  },
  {
    title: "Privacy-First Approach",
    description:
      "Your data stays with you. We don’t store, track, or sell any information. Everything is generated in the browser, 100% private.",
    icon: <FileKey2 />,
  },
  {
    title: "Instant Preview & Edits",
    description:
      "See your changes in real-time as you build. No need to reload or switch screens — what you see is exactly what you get.",
    icon: <Columns2 />,
  },
];
