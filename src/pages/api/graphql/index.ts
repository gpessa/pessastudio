import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ProductId } from "@prisma/client";
import { gql } from "graphql-tag";
import prisma from "utils/prisma";
import { Resolvers } from "./resolvers-types";

const typeDefs = gql`
  enum ProductId {${Object.values(ProductId)}}

  type ProductData {
    depth: Float
    diameter: Float
    height: Float
    id: ProductId!
    length: Float
    price: Float
    weight: Float
    width: Float
  }

  input ProductRemoteInput {
    depth: Float
    diameter: Float
    height: Float
    id: ProductId!
    length: Float
    price: Float
    weight: Float
    width: Float
  }

  type Query {
    products(productIds: [ProductId]): [ProductData!]!
    productsMissing: [ProductId!]!
  }

  type Mutation {
    updateProducts(input: [ProductRemoteInput!]!): [ProductData!]!
    updateProduct(input: ProductRemoteInput!): ProductData!
  }
`;

const resolvers: Resolvers<{}> = {
  Query: {
    products: async (_, { productIds }) => {
      return await prisma.product.findMany({
        where: {
          id: { in: productIds as ProductId[] },
        },
        orderBy: [
          {
            id: "desc",
          },
        ],
      });
    },
    productsMissing: async (_) => {
      const usedIds = (await prisma.product.findMany()).map(({ id }) => id);
      return Object.values(ProductId).filter((id) => !usedIds.includes(id));
    },
  },
  Mutation: {
    updateProduct: async (_, { input: product }) => {
      return await prisma.product.upsert({
        where: {
          id: product.id,
        },
        update: product,
        create: product,
      });
    },
    updateProducts: async (_, data) => {
      return await data.input.map(
        async (product) =>
          await prisma.product.upsert({
            where: {
              id: product.id,
            },
            create: product,
            update: product,
          })
      );
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
