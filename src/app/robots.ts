import type { MetadataRoute } from "next";
import { LOCALES, LOCALES_ARRAY, WEBISTE_URL } from "utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    host: WEBISTE_URL,
    rules: {
      allow: "/",
      disallow: "/private/",
      userAgent: "*",
    },
    sitemap: LOCALES_ARRAY.map(
      (locale) => `${WEBISTE_URL}/${locale}/sitemap.xml`
    ),
  };
}
