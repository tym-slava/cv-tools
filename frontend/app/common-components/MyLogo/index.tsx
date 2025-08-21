import React from "react";
import { DraftingCompass } from "lucide-react";

export default function MyLogo() {
  return (
    <div className="flex items-center text-2xl font-bold">
      <span className="text-cyan-600">Career</span>
      <DraftingCompass />
      <span className="text-emerald-600">Tool</span>
    </div>
  );
}
