import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://jamal-abuattaya-portfolio.shahdfalyouna22.chatgpt.site";
  const lastModified = new Date();
  return [
    {
      url: site,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: site, ar: `${site}/ar` } },
    },
    {
      url: `${site}/ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: site, ar: `${site}/ar` } },
    },
  ];
}
