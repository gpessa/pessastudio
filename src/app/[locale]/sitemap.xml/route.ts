import { getPages } from "hooks/usePages";
import type { NextRequest } from "next/server";
import { WEBISTE_URL } from "utils/constants";
import { create } from "xmlbuilder2";

export async function GET(request: NextRequest) {
  const locale = request.headers.get("x-next-i18n-router-locale");

  const doc = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  const { PAGES } = getPages(locale!);

  for (const { url } of Object.values(PAGES)) {
    doc
      .ele("url")
      .ele("loc")
      .txt(`${WEBISTE_URL}${url}`)
      .up()
      .ele("lastmod")
      .txt(new Date().toISOString().split("T")[0])
      .up()
      .ele("changefreq")
      .txt("weekly")
      .up()
      .ele("priority")
      .txt("0.8")
      .up()
      .up();
  }

  const response = doc.end({ prettyPrint: true }).toString();

  return new Response(response, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
