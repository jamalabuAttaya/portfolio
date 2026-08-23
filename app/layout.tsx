import type { Metadata } from "next";
import { LanguageProvider } from "@/app/components/LanguageProvider";
import "./globals.css";
import "./motion.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jamal-abuattaya-portfolio.shahdfalyouna22.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jamal Abuattaya Portfolio",
  description:
    "Portfolio of Jamal Hassan Abu Attaya, a Mobile Computing bachelor's student and Information Security diploma student building a career in software and application security.",
  keywords: [
    "Jamal Abuattaya",
    "software developer",
    "application security",
    "cybersecurity",
    "mobile computing",
    "React developer",
    "Android developer",
    "information security student",
  ],
  authors: [{ name: "Jamal Hassan Abu Attaya" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jamal Abuattaya Portfolio",
    description: "Software development supported by application-security thinking.",
    siteName: "Jamal Abuattaya Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jamal Abuattaya Portfolio - Software and Application Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamal Abuattaya Portfolio",
    description: "Software development supported by application-security thinking.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jamal Hassan Abu Attaya",
  url: siteUrl,
  email: "mailto:jamalabuattaya@gmail.com",
  jobTitle: "Software and Application Security",
  sameAs: [
    "https://github.com/jamalabuAttaya",
    "https://www.linkedin.com/in/jamal-abu-attaya",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Israa University" },
    {
      "@type": "CollegeOrUniversity",
      name: "University College of Applied Sciences",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
