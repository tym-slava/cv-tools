import { Fira_Code as FontMono, Inter as FontSans, Audiowide, Lexend, Plus_Jakarta_Sans } from "next/font/google";

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

export const fontLexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});
