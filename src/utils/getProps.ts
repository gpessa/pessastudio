import { gql } from "@apollo/client";
import { GetStaticPropsContext } from "next";
import { ProductId, ProductRemoteData } from "types/graphql";
import client from "./apollo";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const messages = await loadCatalog(locale!);

  return {
    props: { messages },
  };
};

export const getServerSidePropsWithProdcuts = <T extends ProductId>(
  productIds: T[]
) => {
  type QueryResponse = {
    get: (ProductRemoteData & {
      id: T;
    })[];
  };

  const getProducts = <T extends string>(
    array: {
      id: T;
      price: Number;
    }[]
  ): {
    [key in T]: ProductRemoteData;
  } =>
    array.reduce(
      (total, item) => {
        return {
          ...total,
          [item.id]: item,
        };
      },
      {} as {
        [key in T]: ProductRemoteData;
      }
    );

  return async ({ locale }: GetStaticPropsContext) => {
    const messages = await loadCatalog(locale!);

    const {
      data: { get },
    } = await client.query<QueryResponse>({
      query: gql`
        query Products($productIds: [ProductId]) {
          get(productIds: $productIds) {
            id
            price
            price
            width
            length
            height
            weight
          }
        }
      `,
      variables: {
        productIds,
      },
    });

    return {
      props: {
        products: getProducts(get),
        messages,
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
