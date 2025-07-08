import type { MetadataRoute } from "next";
import { LOCALES_ARRAY } from "utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: process.env.NEXT_PUBLIC_WEBISTE_URL,
    sitemap: LOCALES_ARRAY.map(
      ({ code }) => `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${code}/sitemap.xml`
    ),
  };
}
