import type { MetadataRoute } from "next";
import { LOCALES, LOCALES_ARRAY, WEBISTE_URL } from "utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: WEBISTE_URL,
    sitemap: LOCALES_ARRAY.map(
      (locale) => `${WEBISTE_URL}/${locale}/sitemap.xml`
    ),
  };
}
