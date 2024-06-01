import { ProductJsonLd, ProductJsonLdProps } from "next-seo";
import { Offers } from "next-seo/lib/types";
import { useRouter } from "next/router";
import { NAME_STRING, WEBSITE } from "utils/constants";
import { ProductData, ProductProps } from "../index";

const getSeoOffer = (
  price: ProductProps["price"],
  url: string
): Offers | undefined => {
  if (!price) return undefined;

  var date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  const priceValidUntil = date.toISOString().slice(0, 10);

  return {
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    price: String(price),
    priceCurrency: "EUR",
    priceValidUntil,
    seller: { name: "Pessastudio" },
    url,
  };
};

const useSeoProps = ({
  name: productName,
  description,
  pictures,
  price,
  link,
}: ProductData): ProductJsonLdProps => {
  const { locale } = useRouter();

  const images = pictures.map(({ src }) => `${WEBSITE}${src}`);
  const itemUrl = `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${locale}${link}`;
  const brand = NAME_STRING;
  const offers = getSeoOffer(price, itemUrl);

  let result: ProductJsonLdProps = {
    brand,
    images,
    itemUrl,
    offers,
    productName,
  };

  if (typeof description === "string") {
    result.disambiguatingDescription = description;
  }

  return result;
};

const ProductSeo = (product: ProductData) => {
  const jsonld = useSeoProps(product);
  return <ProductJsonLd {...jsonld} keyOverride={product.id} />;
};

export default ProductSeo;
