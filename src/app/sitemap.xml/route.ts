import { LOCALES_ARRAY, WEBISTE_URL } from "utils/constants";
import { create } from "xmlbuilder2";

export async function GET() {
  const doc = create({ version: "1.0", encoding: "UTF-8" }).ele(
    "sitemapindex",
    {
      xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    }
  );

  for (const { code } of Object.values(LOCALES_ARRAY)) {
    doc.ele("sitemap").ele("loc").txt(`${WEBISTE_URL}/${code}/sitemap.xml`);
  }

  const response = doc.end({ prettyPrint: true }).toString();

  return new Response(response, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
