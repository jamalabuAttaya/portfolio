import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://jamal-abuattaya-portfolio.shahdfalyouna22.chatgpt.site";
  return [{ url: site, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
