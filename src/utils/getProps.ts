import { GetStaticPropsContext } from "next";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = await loadCatalog(locale!);

  return {
    props: { messages },
  };
};

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there are
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export async function loadCatalog(locale: string) {
  return (await import(`../i18n/${locale}/messages.po`)).messages;
}