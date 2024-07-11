import { useProducts } from "hooks";
import { renderToStaticMarkup } from "react-dom/server";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import type { GetServerSidePropsContext } from "next";
import { pd } from "pretty-data";
import { NAME_STRING } from "utils/constants";

import { formatPriceFeed, formatSizeFeed, formatWeight } from "utils/format";
import { getImageUrl } from "utils/getImageUrl";
import { loadCatalog } from "utils/getProps";
import { create } from "xmlbuilder2";

const SitemapIndex = () => null;

const Feed = () => {
  const products = useProducts();

  const doc = create(
    { version: "1.0" },
    {
      rss: {
        "@version": "2.0",
        "@xmlns:g": "http://base.google.com/ns/1.0",
        channel: {
          description: "",
          item: Object.values(products)
            .filter(({ price }) => Boolean(price))
            .map(
              ({
                description,
                name,
                price,
                id,
                pictures: [picture, ...pictures],
                link,
                dimensions: { height, length, weight, width },
              }) => ({
                "g:additional_image_link": pictures.map(getImageUrl),
                "g:availability": "in stock",
                "g:brand": NAME_STRING,
                "g:condition": "new",
                "g:description": renderNodeToString(() => <>{description}</>),
                "g:google_product_category": "1031", // Sporting Goods > Outdoor Recreation > Equestrian (check here https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt)
                "g:id": `PESSASTUDIO_${id}`,
                "g:identifier_exists": "no",
                "g:image_link": getImageUrl(picture),
                "g:link": link,
                "g:price": formatPriceFeed(price!),
                "g:product_height": height && formatSizeFeed(height),
                "g:product_length": length && formatSizeFeed(length),
                "g:product_weight": weight && formatWeight(weight),
                "g:product_width": width && formatSizeFeed(width),
                "g:shipping_height":
                  height && formatSizeFeed(height > 400 ? 400 : height),
                "g:shipping_length":
                  length && formatSizeFeed(length > 400 ? 400 : length),
                "g:shipping_weight":
                  weight && formatWeight(weight > 400 ? 400 : weight),
                "g:shipping_width":
                  width && formatSizeFeed(width > 400 ? 400 : width),
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

const renderNodeToString = (Node: () => JSX.Element) => {
  const renderToStaticMarkupResult = renderToStaticMarkup(
    <I18nProvider i18n={i18n}>
      <Node />
    </I18nProvider>
  );

  const result = renderToStaticMarkupResult
    .replace("<div>", "")
    .replace("</div>", "");

  return result;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const messages = await loadCatalog({ locale: ctx.locale! });
  i18n.loadAndActivate({ locale: ctx.locale!, messages });

  const renderToStaticMarkupResult = renderToStaticMarkup(
    <I18nProvider i18n={i18n}>
      <Feed />
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
