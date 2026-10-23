import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehrvar Shodiev — Frontend Developer",
  description:
    "Frontend developer building thoughtful, responsive and high-performance digital experiences.",
  openGraph: {
    title: "Mehrvar Shodiev — Frontend Developer",
    description: "Selected work, skills and ways to collaborate.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
