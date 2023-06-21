import { GetStaticPropsContext } from "next";

import type { GetServerSidePropsContext } from "next";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const messages = await loadCatalog(context);

  return {
    props: { messages },
  };
};

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there are
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export async function loadCatalog({ locale }: GetStaticPropsContext) {
  return (await import(`/src/i18n/${locale}/messages.po`)).messages;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const messages = await loadCatalog(context.locale!);

  return {
    props: {
      messages,
    },
  };
}
