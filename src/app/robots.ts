import type { MetadataRoute } from "next";
import { WEBISTE_URL } from "utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: WEBISTE_URL,
    sitemap: `${WEBISTE_URL}/sitemap.xml`,
  };
}
