import { gql } from "@apollo/client";
import { GetStaticPropsContext } from "next";
import {
  ExampleQueryQuery,
  ExampleQueryQueryVariables,
  ProductId,
} from "types/graphql";
import client from "./apollo";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = await loadCatalog(locale!);

  return {
    props: { messages },
  };
};

export const getServerSidePropsWithProdcuts = (productIds: ProductId[]) => {
  return async ({ locale }: GetStaticPropsContext) => {
    const messages = await loadCatalog(locale!);

    const {
      data: { get },
    } = await client.query<ExampleQueryQuery, ExampleQueryQueryVariables>({
      query: gql`
        query Products($productIds: [ProductId]) {
          get(productIds: $productIds) {
            id
            price
          }
        }
      `,
      variables: {
        productIds,
      },
    });

    const products = get?.reduce(
      (total, single) => ({
        ...total,
        [single.id]: single,
      }),
      {}
    );

    return {
      props: {
        messages,
        products,
      },
    };
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
