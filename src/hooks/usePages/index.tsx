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

  const transalte = ([key, page]: [string, Page]) => [key, translate(page)];

  return {
    NAVIGATION: Object.fromEntries(Object.entries(NAVIGATION).map(transalte)),
    PAGES: Object.fromEntries(Object.entries(PAGES).map(transalte)),
    PRODUCTS: Object.fromEntries(Object.entries(PRODUCTS).map(transalte)),
  };
};

export default usePages;
