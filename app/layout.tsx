import type { Metadata } from "next";
import { LanguageProvider } from "@/app/components/LanguageProvider";
import "./globals.css";
import "./motion.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jamalabuattaya-portfolio.netlify.app"),
  title: { default: "Jamal Abu Attaya | Software & Application Security", template: "%s | Jamal Abu Attaya" },
  description: "Portfolio of Jamal Hassan Abu Attaya, focused on software engineering, application security, secure web development, and mobile computing.",
  keywords: ["Jamal Abu Attaya", "software security", "application security", "mobile computing", "secure software development"],
  authors: [{ name: "Jamal Hassan Abu Attaya" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jamal Abu Attaya | Software & Application Security",
    description: "Mobile Computing and Information Security portfolio focused on engineering reliable, secure software.",
    siteName: "Jamal Abu Attaya Portfolio",
  },
  twitter: { card: "summary", title: "Jamal Abu Attaya | Software & Application Security", description: "Secure software and application security portfolio." },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jamal Hassan Abu Attaya",
  url: "https://jamalabuattaya-portfolio.netlify.app",
  email: "mailto:jamalabuattaya@gmail.com",
  jobTitle: "Software & Application Security",
  sameAs: ["https://github.com/jamalabuAttaya", "https://www.linkedin.com/in/jamal-abu-attaya"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Israa University" },
    { "@type": "CollegeOrUniversity", name: "University College of Applied Sciences" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
