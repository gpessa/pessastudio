import { useLingui } from "@lingui/react/macro";
import { ReactNode } from "react";

import { ProductId } from "./constants";
import { getProducts, ProductData } from "./utils";

export type ProductDataTranslated = Omit<
  ProductData,
  "name" | "description"
> & {
  name: string;
  description?: string | ReactNode;
};

export type ProductDataTranslatedList = {
  [key in keyof typeof ProductId]: ProductDataTranslated;
};

const useProducts = (): ProductDataTranslatedList => {
  const {
    t,
    i18n: { locale },
  } = useLingui();

  const product = getProducts(locale);

  const translate = ({
    name,
    description,
    ...product
  }: ProductData): ProductDataTranslated => ({
    description: description ? t(description) : undefined,
    name: t(name),
    ...product,
  });

  return Object.fromEntries(
    Object.entries(product).map(([key, page]) => [key, translate(page)])
  ) as ProductDataTranslatedList;
};

export default useProducts;
