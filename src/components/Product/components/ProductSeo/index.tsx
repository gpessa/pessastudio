import { LdJson } from "components";
import { ProductDataTranslated } from "hooks/useProducts";
import { Product, WithContext } from "schema-dts";
import { NAME_STRING } from "utils/constants";
import { getImageUrl } from "utils/getImageUrl";

const getSeoOffer = (
  price: ProductDataTranslated["price"],
  url: string
): WithContext<Product>["offers"] | undefined => {
  if (!price) return undefined;

  var date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  const priceValidUntil = date.toISOString().slice(0, 10);

  return {
    "@type": "Offer",
    availability: "InStock",
    itemCondition: "NewCondition",
    price: String(price),
    priceCurrency: "EUR",
    priceValidUntil,
    seller: NAME_STRING,
    url,
  };
};

const useSeoProps = (props: ProductDataTranslated): WithContext<Product> => {
  const { name, description, pictures, price, link: url } = props;

  const offers = getSeoOffer(price, url);
  const image = pictures.map(getImageUrl);
  const brand = NAME_STRING;

  let result: WithContext<Product> = {
    "@type": "Product",
    "@context": "https://schema.org",
    brand,
    image,
    url,
    offers,
    name,
  };

  if (typeof description === "string") {
    result.description = description;
  }

  return result;
};

const ProductSeo = (product: ProductDataTranslated) => {
  const data = useSeoProps(product);
  return <LdJson data={data} />;
};

export default ProductSeo;
