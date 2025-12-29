import React from "react";
import { FileText } from "lucide-react";

export default function MyLogo() {
  return (
    <div className="flex items-center text-2xl font-bold">
      <FileText className="w-6 h-6 text-cyan-600" />
      <span className="text-cyan-600">ONCV</span>
      <span className="text-emerald-600">.link</span>
    </div>
  );
}
