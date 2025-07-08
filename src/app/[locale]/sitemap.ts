import { PAGES_URL } from "hooks/usePages";
import type { MetadataRoute } from "next";
import { LOCALES, LOCALES_ARRAY } from "utils/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES_URL).map((url) => ({
    url: `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${LOCALES["en"].code}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
    alternates: {
      languages: LOCALES_ARRAY.reduce(
        (acc, { code }) => ({
          ...acc,
          [code]: `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${code}${url}`,
        }),
        {}
      ),
    },
  }));
}
