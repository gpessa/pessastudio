import { useLingui } from "@lingui/react/macro";
import getPages, { Page } from "utils/getPages";

export type PageTranslated = {
  url: string;
  title: string;
  description?: string;
};

const usePages = () => {
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
    title: t(title),
    description: description ? t(description) : undefined,
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

export default usePages;
