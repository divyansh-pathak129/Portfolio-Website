import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/drive", "/drive/login"],
      },
    ],
    sitemap: `${DATA.url}/sitemap.xml`,
  };
}
