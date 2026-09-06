import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import "../globals.css";
import "../motion.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jamal-abuattaya-portfolio.shahdfalyouna22.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jamal Hassan Abu Attaya | Software Developer & Application Security",
    template: "%s | Jamal Abu Attaya",
  },
  description:
    "Official portfolio of Jamal Hassan Abu Attaya, a software developer and Mobile Computing and Information Security student. Explore bilingual web projects, certificates, and application-security work.",
  keywords: [
    "Jamal Hassan Abu Attaya", "Jamal Abuattaya", "Jamal Abu Attaya",
    "software developer", "software engineer portfolio", "application security",
    "cybersecurity", "mobile computing", "React developer", "Next.js developer",
    "Android developer", "information security student", "مطور برمجيات",
    "جمال حسان أبو عطايا", "جمال أبو عطايا", "أمن التطبيقات", "الأمن السيبراني",
  ],
  authors: [{ name: "Jamal Hassan Abu Attaya", url: siteUrl }],
  creator: "Jamal Hassan Abu Attaya",
  publisher: "Jamal Hassan Abu Attaya",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { "en": "/", "ar": "/ar", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_PS"],
    url: "/",
    title: "Jamal Hassan Abu Attaya | Software Developer & Application Security",
    description: "Bilingual software-development portfolio with projects, certificates, and application-security work.",
    siteName: "Jamal Abu Attaya Portfolio",
    images: [{
      url: "/og.png", width: 1200, height: 630,
      alt: "Jamal Abu Attaya - Software Development and Application Security",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamal Hassan Abu Attaya | Software Developer",
    description: "Projects, certificates, and application-security work by Jamal Abu Attaya.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true, follow: true, "max-image-preview": "large",
      "max-snippet": -1, "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jamal Hassan Abu Attaya",
      alternateName: ["Jamal Abu Attaya", "Jamal Abuattaya", "جمال حسان أبو عطايا", "جمال أبو عطايا"],
      url: siteUrl,
      image: `${siteUrl}/jamal-abuattaya.webp`,
      email: "mailto:jamalabuattaya@gmail.com",
      jobTitle: "Software Developer and Application Security Student",
      sameAs: ["https://github.com/jamalabuAttaya", "https://www.linkedin.com/in/jamal-abuattaya/"],
      knowsAbout: ["Software Development", "Application Security", "Cybersecurity", "Java", "Android", "React", "Next.js", "SQL", "Network Security"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Israa University" },
        { "@type": "CollegeOrUniversity", name: "University College of Applied Sciences" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Jamal Abu Attaya Portfolio",
      inLanguage: ["en", "ar"],
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

const themeBootScript = `try{var t=localStorage.getItem('jamal-portfolio-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </head>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
