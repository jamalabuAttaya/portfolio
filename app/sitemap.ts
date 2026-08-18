import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://jamalabuattaya-portfolio.netlify.app";
  return [{ url: site, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
