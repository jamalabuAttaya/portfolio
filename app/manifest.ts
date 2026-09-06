import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jamal Hassan Abu Attaya Portfolio",
    short_name: "Jamal Portfolio",
    description: "Software development and application security portfolio by Jamal Hassan Abu Attaya.",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    lang: "en",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
