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
  shortName: "Jamal Abu Attaya",
  initials: "JA",
  role: "Software & Application Security",
  headline: "I build software with security engineered in.",
  bio: "Mobile Computing student at Israa University and Information Security diploma student at the University College of Applied Sciences. I combine software engineering, application development, networks, databases, and security fundamentals to build reliable systems and assess them responsibly.",
  email: "jamalabuattaya@gmail.com",
  cv: "/Jamal-Hassan-Abu-Attaya-Formal-CV-2026.pdf",
  socials: {
    github: "https://github.com/jamalabuAttaya",
    linkedin: "https://www.linkedin.com/in/jamal-abu-attaya",
    whatsapp: "https://wa.me/qr/OIKO6MCOWL6QM1",
    portfolio: "https://jamalabuattaya-portfolio.netlify.app/",
  },
  stats: [
    { value: "106", label: "B.Sc. credits completed" },
    { value: "30", label: "B.Sc. credits remaining" },
    { value: "37", label: "Diploma credits completed" },
    { value: "5", label: "Projects presented" },
  ],
  securityWork: [
    {
      icon: "shield" as IconName,
      code: "SEC-01",
      title: "Responsible Security Disclosure",
      description:
        "Documented application-security findings with reproducible evidence, clear impact, and responsible reporting practices.",
      tags: ["API Authorization", "OWASP API1", "CWE-639", "Evidence"],
    },
    {
      icon: "code" as IconName,
      code: "SEC-02",
      title: "Secure Software Engineering",
      description:
        "Applies validation, least-privilege thinking, secure defaults, accessibility, testing, and maintainable component architecture.",
      tags: ["Input Validation", "Security Headers", "Testing", "Clean Code"],
    },
    {
      icon: "network" as IconName,
      code: "SEC-03",
      title: "Systems & Network Foundations",
      description:
        "Academic labs covering network segmentation, routing, VLANs, DHCP, ACLs, operating systems, and risk analysis.",
      tags: ["Networks", "ACL", "Operating Systems", "Risk Analysis"],
    },
  ],
  skillGroups: [
    {
      icon: "code" as IconName,
      eyebrow: "Build",
      title: "Software Engineering",
      items: ["Java", "OOP", "Data Structures", "REST APIs", "Git & GitHub", "Technical Documentation"],
    },
    {
      icon: "mobile" as IconName,
      eyebrow: "Develop",
      title: "Web & Mobile",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Android", "Responsive UI"],
    },
    {
      icon: "database" as IconName,
      eyebrow: "Model",
      title: "Data & Backend",
      items: ["SQL", "MySQL", "SQLite", "Database Design", "ERD", "PHP & Laravel Foundations"],
    },
    {
      icon: "shield" as IconName,
      eyebrow: "Protect",
      title: "Security Foundations",
      items: ["Threat & Risk Analysis", "Social Engineering Awareness", "Access Control", "API Traffic Analysis", "Responsible Reporting"],
    },
  ],
  strengths: [
    "Communication",
    "Leadership",
    "Persuasion",
    "Teamwork",
    "Problem Solving",
    "Attention to Detail",
    "Continuous Learning",
  ],
  education: [
    {
      institution: "Israa University",
      institutionUrl: "https://israa.edu.ps/en",
      degree: "B.Sc. in Mobile Computing",
      period: "2023 — Present",
      progress: "106 credit hours completed · 30 remaining",
      description:
        "Coursework across Java and OOP, data structures, Android development, databases, web development, software engineering, operating systems, networks, cloud computing, UI/UX, and machine learning.",
    },
    {
      institution: "University College of Applied Sciences (UCAS)",
      institutionUrl: "https://www.ucas.edu.ps/",
      degree: "Diploma in Information Security",
      period: "2025 — Present",
      progress: "17 courses · 37 credit hours completed",
      description:
        "Completed foundations in programming, networking, advanced networks, databases, operating systems, personal-computer security, social engineering awareness, and threat and risk analysis.",
    },
  ],
  certifications: [
    { issuer: "Meta", title: "Programming with JavaScript", date: "Jan 19, 2026" },
    { issuer: "Udemy", title: "Build 11 JavaScript Applications & Web JavaScript Bootcamp", date: "Jun 20, 2026" },
    { issuer: "Udemy", title: "React", date: "Mar 28, 2026" },
    { issuer: "Scrimba", title: "Learn Next.js", date: "Apr 10, 2026" },
  ],
  projects: [
    {
      name: "Security Portfolio",
      number: "01",
      description:
        "A performance-focused portfolio with secure contact handling, structured metadata, responsive engineering UI, and accessible motion.",
      tags: ["Next.js", "TypeScript", "Security", "Accessibility"],
      image: "/projects/portfolio.webp",
      live: "https://jamalabuattaya-portfolio.netlify.app/",
      source: "https://github.com/jamalabuAttaya",
    },
    {
      name: "Academic Library",
      number: "02",
      description:
        "An organized academic-content platform with searching, filtering, routing, and a responsive interface for university students.",
      tags: ["React", "Material UI", "Axios", "React Router"],
      image: "/projects/academic-library.webp",
      live: "https://academic-library.vercel.app/",
      source: "https://github.com/jamalabuAttaya/Academic-Library",
    },
    {
      name: "Weather Application",
      number: "03",
      description:
        "A location-aware weather interface that consumes live API data and presents conditions through a clear, multilingual experience.",
      tags: ["React", "REST API", "Axios", "Responsive UI"],
      image: "/projects/weather-app.webp",
      live: "https://weather-app-nine-mu-48.vercel.app/",
      source: "https://github.com/jamalabuAttaya/weather-app",
    },
    {
      name: "Educational Platform",
      number: "04",
      description:
        "A learning platform concept focused on clear course discovery, structured content, and usable responsive navigation.",
      tags: ["JavaScript", "Tailwind CSS", "HTML5", "UX"],
      image: "/projects/educational-platform.webp",
      live: "https://soft-druid-b82fbd.netlify.app/",
      source: "https://github.com/jamalabuAttaya/Eucational-Platform",
    },
    {
      name: "Dabang Dashboard",
      number: "05",
      description:
        "A modern operations dashboard for tracking products, orders, and sales performance through responsive data visualizations.",
      tags: ["React", "Vite", "Tailwind CSS", "Recharts"],
      image: "/projects/dashboard.webp",
      live: "https://dabang-dashboard-bay.vercel.app/",
      source: "https://github.com/jamalabuAttaya/dabang-dashboard",
    },
  ],
} as const;
