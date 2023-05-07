/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetProducts {\n    products {\n      depth\n      diameter\n      height\n      id\n      length\n      price\n      weight\n      width\n    }\n    productsMissing\n  }\n": types.GetProductsDocument,
    "\n  mutation UpdateProducts($input: [ProductRemoteInput!]!) {\n    updateProducts(input: $input) {\n      id\n      depth\n      diameter\n      height\n      length\n      price\n      weight\n      width\n    }\n  }\n": types.UpdateProductsDocument,
    "\n        query GetPageProducts($productIds: [ProductId]) {\n          products(productIds: $productIds) {\n            depth\n            diameter\n            height\n            id\n            length\n            price\n            weight\n            width\n          }\n        }\n      ": types.GetPageProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts {\n    products {\n      depth\n      diameter\n      height\n      id\n      length\n      price\n      weight\n      width\n    }\n    productsMissing\n  }\n"): (typeof documents)["\n  query GetProducts {\n    products {\n      depth\n      diameter\n      height\n      id\n      length\n      price\n      weight\n      width\n    }\n    productsMissing\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProducts($input: [ProductRemoteInput!]!) {\n    updateProducts(input: $input) {\n      id\n      depth\n      diameter\n      height\n      length\n      price\n      weight\n      width\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProducts($input: [ProductRemoteInput!]!) {\n    updateProducts(input: $input) {\n      id\n      depth\n      diameter\n      height\n      length\n      price\n      weight\n      width\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query GetPageProducts($productIds: [ProductId]) {\n          products(productIds: $productIds) {\n            depth\n            diameter\n            height\n            id\n            length\n            price\n            weight\n            width\n          }\n        }\n      "): (typeof documents)["\n        query GetPageProducts($productIds: [ProductId]) {\n          products(productIds: $productIds) {\n            depth\n            diameter\n            height\n            id\n            length\n            price\n            weight\n            width\n          }\n        }\n      "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;