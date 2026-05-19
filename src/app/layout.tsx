import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jamal Abu Attaya| Frontend Developer",
  description: "Jamal Abu Attaya is a Frontend Developer specialized in building responsive and modern web applications using React and Next.js.",
};

/*import DevelopmentNotice from "@/components/DevelopmentNotice";*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth overflow-x-hidden">
    
      <body className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} min-h-full flex flex-col bg-background text-foreground overflow-x-hidden`}>
        {/* <DevelopmentNotice /> */}
        {children}
      </body>
    </html>
  );
}
