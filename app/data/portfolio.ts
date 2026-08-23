export type IconName =
  | "shield"
  | "code"
  | "database"
  | "network"
  | "mobile"
  | "layers"
  | "terminal"
  | "users"
  | "book"
  | "award";

export const portfolioData = {
  name: "Jamal Hassan Abu Attaya",
  nameArabic: "جمال حسان أبو عطايا",
  certificateNameArabic: "جمال حسان يوسف أبو عطايا",
  shortName: "Jamal Abuattaya",
  initials: "JA",
  role: "Software & Application Security",
  headline: "Building reliable software with security in mind.",
  bio: "Mobile Computing bachelor's student and Information Security diploma student building a career in software and application security.",
  email: "jamalabuattaya@gmail.com",
  cv: "/Jamal-Hassan-Abu-Attaya-CV-2026.pdf",
  socials: {
    github: "https://github.com/jamalabuAttaya",
    linkedin: "https://www.linkedin.com/in/jamal-abu-attaya",
    whatsapp: "https://wa.me/qr/OIKO6MCOWL6QM1",
    portfolio: "https://jamal-abuattaya-portfolio.shahdfalyouna22.chatgpt.site",
  },
  stats: [
    { value: "106", label: "B.Sc. credit hours completed" },
    { value: "30", label: "B.Sc. credit hours remaining" },
    { value: "37", label: "Diploma credit hours completed" },
    { value: "07", label: "Completed certificates" },
  ],
  practicalWork: [
    {
      icon: "shield" as IconName,
      code: "APPSEC / 01",
      title: "Responsible Security Disclosure",
      description:
        "Analyzed a horizontal authorization weakness in a student-information API, organized HTTP/JSON evidence, and prepared a remediation-focused report aligned with OWASP API1:2023 and CWE-639.",
      tags: ["OWASP API1:2023", "CWE-639", "HTTP / JSON", "Access Control"],
    },
    {
      icon: "code" as IconName,
      code: "ENGINEERING / 02",
      title: "Secure Portfolio Engineering",
      description:
        "Improved a personal portfolio with typed content, secure headers, validated contact handling, accessibility fixes, media optimization, metadata, and automated quality checks.",
      tags: ["Next.js", "TypeScript", "Security Headers", "Accessibility"],
    },
    {
      icon: "network" as IconName,
      code: "LABS / 03",
      title: "Mobile, Database & Infrastructure Labs",
      description:
        "Built Java and Android exercises with local data storage and completed hands-on labs in SQL, routing, VLANs, DHCP, ACLs, operating systems, and directory and network services.",
      tags: ["Java / Android", "SQL", "VLANs / DHCP", "Windows Server"],
    },
  ],
  skillGroups: [
    {
      icon: "mobile" as IconName,
      eyebrow: "Build",
      title: "Programming & Mobile",
      items: ["Java", "OOP", "Algorithms & Data Structures", "Android with Java", "Mobile UI", "SQLite"],
    },
    {
      icon: "code" as IconName,
      eyebrow: "Engineer",
      title: "Web & Software Engineering",
      items: ["HTML", "CSS", "JavaScript", "REST APIs", "Requirements Analysis", "UML", "Testing", "Documentation", "UI/UX Foundations"],
    },
    {
      icon: "database" as IconName,
      eyebrow: "Model",
      title: "Data",
      items: ["SQL", "MySQL", "Relational Modeling", "ERD", "Normalization"],
    },
    {
      icon: "shield" as IconName,
      eyebrow: "Protect",
      title: "Application & Information Security",
      items: ["CIA Principles", "Endpoint Security", "Authentication & Authorization", "Access-Control Analysis", "API Traffic Review", "IDOR / BOLA Awareness", "Responsible Disclosure", "Threat & Risk Analysis", "Social Engineering Awareness"],
    },
    {
      icon: "network" as IconName,
      eyebrow: "Operate",
      title: "Networks & Systems",
      items: ["TCP/IP", "IP Addressing", "Subnetting", "Routing", "VLANs", "DHCP", "ACLs", "Operating Systems", "Windows Server", "AD DS", "DNS", "Cloud & ML Foundations"],
    },
  ],
  strengths: [
    "Communication",
    "Leadership",
    "Persuasion",
    "Teamwork",
    "Problem Solving",
    "Technical Documentation",
    "Ethical Judgment",
    "Continuous Learning",
  ],
  education: [
    {
      institution: "Israa University",
      institutionUrl: "https://israa.edu.ps/en",
      degree: "B.Sc. in Mobile Computing",
      period: "2023 - Present",
      progress: "106 credit hours completed · 30 remaining",
      description:
        "Faculty of Engineering and Information Technology. Current 30-credit focus: frontend development, backend development, cross-platform mobile applications with Flutter, and advanced project-based study.",
    },
    {
      institution: "University College of Applied Sciences (UCAS)",
      institutionUrl: "https://www.ucas.edu.ps/",
      degree: "Diploma in Information Security",
      period: "2025 - Present",
      progress: "First two semesters completed · 17 courses · 37 credit hours",
      description:
        "Completed coursework includes computing and programming labs, information-age ethics, networking principles, advanced networks, databases, operating systems, social engineering awareness, threat and risk management, and personal computer security.",
    },
  ],
  certifications: [
    {
      code: "CERT / 01",
      issuer: "Edraak & Arab Open University",
      date: "18 Aug 2026",
      fileEn: "/certificates/java-programming-1.pdf",
      fileAr: "/certificates/java-programming-1-ar.pdf",
      image: "/certificates/previews/java-programming-1.webp",
      tag: "Java",
    },
    {
      code: "CERT / 02",
      issuer: "Edraak",
      date: "19 Aug 2026",
      fileEn: "/certificates/cyber-security-basics.pdf",
      fileAr: "/certificates/cyber-security-basics-ar.pdf",
      image: "/certificates/previews/cyber-security-basics.webp",
      tag: "Security",
    },
    {
      code: "CERT / 03",
      issuer: "Edraak & Crescent Petroleum",
      date: "19 Aug 2026",
      fileEn: "/certificates/ai-and-generative-ai.pdf",
      fileAr: "/certificates/ai-and-generative-ai-ar.pdf",
      image: "/certificates/previews/ai-generative-ai.webp",
      tag: "AI",
    },
    {
      code: "CERT / 04",
      issuer: "Edraak",
      date: "22 Aug 2026",
      fileEn: "/certificates/cyber-security-career-path.pdf",
      fileAr: "/certificates/cyber-security-career-path.pdf",
      image: "/certificates/previews/cyber-security-career-path.webp",
      tag: "Career",
    },
    {
      code: "CERT / 05",
      issuer: "Edraak",
      date: "22 Aug 2026",
      fileEn: "/certificates/cyber-attack-techniques.pdf",
      fileAr: "/certificates/cyber-attack-techniques-ar.pdf",
      image: "/certificates/previews/cyber-attack-techniques.webp",
      tag: "Security",
    },
    {
      code: "CERT / 06",
      issuer: "Edraak",
      date: "22 Aug 2026",
      fileEn: "/certificates/protect-systems-from-penetrations.pdf",
      fileAr: "/certificates/protect-systems-from-penetrations-ar.pdf",
      image: "/certificates/previews/protect-systems-from-penetrations.webp",
      tag: "Defense",
    },
    {
      code: "CERT / 07",
      issuer: "Edraak",
      date: "22 Aug 2026",
      fileEn: "/certificates/introduction-to-cyber-security.pdf",
      fileAr: "/certificates/introduction-to-cyber-security-ar.pdf",
      image: "/certificates/previews/introduction-to-cyber-security.webp",
      tag: "Security",
    },
  ],
  projects: [
    {
      name: "Alasema Restaurant",
      number: "01",
      description:
        "A responsive React.js website for Alasema Restaurant in Nuseirat, Gaza, designed for a clear Arabic browsing experience across mobile and desktop.",
      tags: ["React.js", "Responsive UI", "Arabic RTL", "Vercel"],
      image: "/projects/alasema-restaurant.webp",
      live: "https://alasema-rest.vercel.app",
    },
  ],
  languages: ["Arabic (native)", "English (academic and technical communication)"],
} as const;
