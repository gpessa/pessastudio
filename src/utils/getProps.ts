import { GetStaticPropsContext } from "next";

import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

import type { GetServerSidePropsContext } from "next";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const messages = await loadCatalog(context.locale!);

  return {
    props: {
      messages,
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}
