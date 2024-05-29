import { useProducts } from "hooks";
import { renderToStaticMarkup } from "react-dom/server";

import { i18n } from "@lingui/core";
import { I18nProvider, useLingui } from "@lingui/react";
import type { GetServerSidePropsContext } from "next";
import { pd } from "pretty-data";
import { NAME_LEGAL_STRING, NAME_STRING } from "utils/constants";
import { formatPriceFeed, formatSize, formatWeight } from "utils/format";
import { loadCatalog } from "utils/getProps";
import { create } from "xmlbuilder2";

const SitemapIndex = () => null;

const Sitemap = () => {
  const {
    i18n: { locale },
  } = useLingui();
  const products = useProducts();

  const getPictureUrl = (picture: any) =>
    picture
      ? `${process.env.NEXT_PUBLIC_WEBISTE_URL}/_next/image?url=${picture.default.src}&w=640&q=75`
      : undefined;

  const doc = create(
    { version: "1.0" },
    {
      rss: {
        "@version": "2.0",
        "@xmlns:g": "http://base.google.com/ns/1.0",
        channel: {
          description: "",
          item: Object.values(products)
            .filter(({ price }) => typeof price !== undefined)
            .map(
              ({
                description,
                name,
                price,
                id,
                pictures: [picture, ...pictures],
                diameter,
                height,
                link,
                length,
                thickness,
                weight,
                width,
              }) => ({
                "g:additional_image_link": pictures.map(getPictureUrl),
                "g:availability": "in stock",
                "g:brand": NAME_LEGAL_STRING,
                "g:condition": "new",
                "g:description": typeof description === "string" && description,
                "g:id": `PESSASTUDIO_${id}`,
                "g:identifier_exists": "no",
                "g:image_link": getPictureUrl(picture),
                "g:link": `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${locale}${link}?cs=product_cards`,
                "g:price": price && formatPriceFeed(price),
                "g:product_category":
                  "Sporting Goods > Outdoor Recreation > Equestrian",
                "g:product_diameter": diameter && formatSize(diameter),
                "g:product_height": height && formatSize(height),
                "g:product_length": length && formatSize(length),
                "g:product_thickness": thickness && formatSize(thickness),
                "g:product_weight": weight && formatWeight(weight),
                "g:product_width": width && formatSize(width),
                "g:shipping_diameter": diameter && formatSize(diameter),
                "g:shipping_height": height && formatSize(height),
                "g:shipping_length": length && formatSize(length),
                "g:shipping_thickness": thickness && formatSize(thickness),
                "g:shipping_weight": weight && formatWeight(weight),
                "g:shipping_width": width && formatSize(width),
                "g:title": name,
              })
            ),
          title: NAME_STRING,
        },
      },
    }
  ).end({
    prettyPrint: true,
  });

  return <div dangerouslySetInnerHTML={{ __html: pd.xml(doc) }} />;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const messages = await loadCatalog({ locale: ctx.locale! });
  i18n.loadAndActivate({ locale: ctx.locale!, messages });

  const renderToStaticMarkupResult = renderToStaticMarkup(
    <I18nProvider i18n={i18n}>
      <Sitemap />
    </I18nProvider>
  );

  // Horrible hack to remove the unnecassery div
  const result = renderToStaticMarkupResult
    .replace("<div>", "")
    .replace("</div>", "");

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(result);
  ctx.res.end();

  return { props: {} };
};

export default SitemapIndex;
