import { getProducts } from "hooks/useProducts";
import type { NextRequest } from "next/server";
import { getI18nInstance } from "utils/appRouterI18n";
import { NAME_STRING, WEBISTE_URL } from "utils/constants";
import { getImageUrl } from "utils/getImageUrl";
import { Builder } from "xml2js";

const formatSize = (value: number) => Math.round(value) + " cm";
const formatWeight = (value: number) => Math.round(value) + " kg";
const formatPrice = (amount: number) => amount.toFixed(2) + " EUR";

export async function GET(request: NextRequest) {
  const locale = request.headers.get("x-next-i18n-router-locale")!;
  const i18n = getI18nInstance(locale);
  i18n.activate(locale!);

  console.log("Generating feed for locale:", locale);

  const products = getProducts(locale!);

  const feed = {
    rss: {
      $: {
        version: "2.0",
        "xmlns:g": "http://base.google.com/ns/1.0",
      },
      channel: {
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
              "g:description": description && i18n._(description),
              "g:google_product_category": "1031", // Sporting Goods > Outdoor Recreation > Equestrian (check here https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt)
              "g:id": `PESSASTUDIO_${id}`,
              "g:identifier_exists": "no",
              "g:image_link": getImageUrl(picture),
              "g:link": WEBISTE_URL + link,
              "g:price": formatPrice(price!),
              "g:product_height": height && formatSize(height),
              "g:product_length": length && formatSize(length),
              "g:product_weight": weight && formatWeight(weight),
              "g:product_width": width && formatSize(width),
              "g:shipping_height":
                height && formatSize(height > 400 ? 400 : height),
              "g:shipping_length":
                length && formatSize(length > 400 ? 400 : length),
              "g:shipping_weight":
                weight && formatWeight(weight > 400 ? 400 : weight),
              "g:shipping_width":
                width && formatSize(width > 400 ? 400 : width),
              "g:title": i18n._(name),
            })
          ),
        title: NAME_STRING,
      },
    },
  };

  var builder = new Builder();
  var xml = builder.buildObject(feed);

  return new Response(xml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
