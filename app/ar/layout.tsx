import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import "../globals.css";
import "../motion.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jamal-abuattaya-portfolio.shahdfalyouna22.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "جمال حسان أبو عطايا | مطور برمجيات وأمن تطبيقات",
  description:
    "الملف المهني الرسمي لجمال حسان أبو عطايا، مطور برمجيات وطالب حوسبة نقالة وأمن معلومات. استعرض المشاريع ثنائية اللغة والشهادات والعمل في أمن التطبيقات.",
  keywords: [
    "جمال حسان أبو عطايا", "جمال أبو عطايا", "Jamal Hassan Abu Attaya",
    "مطور برمجيات فلسطيني", "هندسة البرمجيات", "أمن التطبيقات",
    "الأمن السيبراني", "الحوسبة النقالة", "مطور React", "مطور Next.js",
    "تطوير تطبيقات أندرويد", "أمن المعلومات", "Software Developer",
    "Application Security", "Cybersecurity",
  ],
  authors: [{ name: "جمال حسان أبو عطايا", url: siteUrl }],
  creator: "جمال حسان أبو عطايا",
  publisher: "جمال حسان أبو عطايا",
  category: "technology",
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ar_PS",
    alternateLocale: ["en_US"],
    url: "/ar",
    title: "جمال حسان أبو عطايا | مطور برمجيات وأمن تطبيقات",
    description: "مشاريع وشهادات ومهارات جمال أبو عطايا في تطوير البرمجيات وأمن التطبيقات.",
    siteName: "الملف المهني لجمال أبو عطايا",
    images: [{
      url: "/og.png", width: 1200, height: 630,
      alt: "جمال أبو عطايا - تطوير البرمجيات وأمن التطبيقات",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "جمال حسان أبو عطايا | مطور برمجيات",
    description: "مشاريع وشهادات وعمل في أمن التطبيقات لجمال أبو عطايا.",
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
      name: "جمال حسان أبو عطايا",
      alternateName: ["Jamal Hassan Abu Attaya", "Jamal Abu Attaya", "Jamal Abuattaya", "جمال أبو عطايا"],
      url: siteUrl,
      image: `${siteUrl}/jamal-abuattaya.webp`,
      email: "mailto:jamalabuattaya@gmail.com",
      jobTitle: "مطور برمجيات وطالب أمن تطبيقات",
      sameAs: ["https://github.com/jamalabuAttaya", "https://www.linkedin.com/in/jamal-abuattaya/"],
      knowsAbout: ["تطوير البرمجيات", "أمن التطبيقات", "الأمن السيبراني", "Java", "Android", "React", "Next.js", "SQL", "أمن الشبكات"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "جامعة الإسراء" },
        { "@type": "CollegeOrUniversity", name: "الكلية الجامعية للعلوم التطبيقية" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/ar#webpage`,
      url: `${siteUrl}/ar`,
      name: "الملف المهني لجمال أبو عطايا",
      inLanguage: "ar",
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

const themeBootScript = `try{var t=localStorage.getItem('jamal-portfolio-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function ArabicRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </head>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
