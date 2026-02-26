import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shihua Yu — AI/ML Engineer",
  description:
    "AI/ML Engineer with experience in computer vision, NLP, and multi-agent systems. MS in AI at Northeastern University.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "Deep Learning",
    "Shihua Yu",
  ],
  openGraph: {
    title: "Shihua Yu — AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in computer vision, NLP, and multi-agent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
