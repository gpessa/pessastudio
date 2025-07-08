import { PAGES_URL } from "hooks/usePages";
import type { MetadataRoute } from "next";
import { LOCALES } from "utils/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES_URL).map((url) => ({
    url: `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${"en"}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
    alternates: {
      languages: Object.values(LOCALES).reduce(
        (acc, { code }) => ({
          ...acc,
          [code]: `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${code}${url}`,
        }),
        {}
      ),
    },
  }));
}
