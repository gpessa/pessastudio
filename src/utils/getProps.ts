import { ProductData, ProductId } from "gql/graphql";
import { GetStaticPropsContext } from "next";

import { gql } from "@apollo/client";
import client from "./apollo";

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

export const getServerSidePropsWithProducts = <T extends ProductId>(
  productIds: T[]
) => {
  type QueryResponse = {
    products: (ProductData & {
      id: T;
    })[];
  };

  const getProducts = <T extends string>(
    array: ProductData[]
  ): {
    [key in T]: ProductData;
  } =>
    array.reduce(
      (total, item) => ({
        ...total,
        [item.id]: item,
      }),
      {} as {
        [key in T]: ProductData;
      }
    );

  return async (context: GetStaticPropsContext) => {
    const messages = await loadCatalog(context);
    const { data } = await client.query<QueryResponse>({
      query: gql`
        query GetPageProducts($productIds: [ProductId]) {
          products(productIds: $productIds) {
            depth
            diameter
            height
            id
            length
            price
            weight
            width
          }
        }
      `,
      variables: {
        productIds,
      },
    });

    const products = getProducts(data.products);

    return {
      props: {
        products,
        messages,
      },
    };
  };
};
