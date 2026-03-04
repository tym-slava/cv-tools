import React from "react";
interface MyLogoProps {
  fontSize?: string;
  padding?: string;
}

export default function MyLogo({ fontSize = "24px", padding = "4px" }: MyLogoProps) {
  return (
    <div
      className="flex border-2 border-blue-500 rounded-md items-center font-logo"
      style={{ fontSize, padding }}
    >
      <span className="text-red-500">on</span>{" "}
      <span className="text-emerald-500 font-black">CV</span>
      <span className="text-blue-600">.link</span>
    </div>
  );
}
