import { Fira_Code as FontMono, Inter as FontSans, Audiowide } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontLogo = Audiowide({
  subsets: ["latin"],
  weight: "400", // Audiowide only has one weight — 400
  variable: "--font-logo",
});
