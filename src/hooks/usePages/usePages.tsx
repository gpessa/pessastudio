import { useLingui } from "@lingui/react/macro";

import { getPages, Page } from "./utils";

export type PageTranslated = Omit<Page, "title" | "description"> & {
  title: string;
  description?: string;
};

export const usePages = () => {
  const {
    t,
    i18n: { locale },
  } = useLingui();

  const { NAVIGATION, PAGES, PRODUCTS } = getPages(locale);

  const translate = ({
    title,
    description,
    ...page
  }: Page): PageTranslated => ({
    description: description ? t(description) : undefined,
    title: t(title),
    ...page,
  });

  const PAGES_TRANSLATED = Object.fromEntries(
    Object.entries(PAGES).map(([key, page]) => [key, translate(page)])
  );
  const PRODUCTS_TRANSLATED = Object.fromEntries(
    Object.entries(PRODUCTS).map(([key, page]) => [key, translate(page)])
  );
  const NAVIGATION_TRANSLATED = Object.fromEntries(
    Object.entries(NAVIGATION).map(([key, page]) => [key, translate(page)])
  );

  return {
    NAVIGATION: NAVIGATION_TRANSLATED,
    PAGES: PAGES_TRANSLATED,
    PRODUCTS: PRODUCTS_TRANSLATED,
  };
};
