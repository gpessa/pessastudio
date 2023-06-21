/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateProduct: ProductData;
  updateProducts: Array<ProductData>;
};


export type MutationUpdateProductArgs = {
  input: ProductRemoteInput;
};


export type MutationUpdateProductsArgs = {
  input: Array<ProductRemoteInput>;
};

export type ProductData = {
  __typename?: 'ProductData';
  depth?: Maybe<Scalars['Float']>;
  diameter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id: ProductId;
  length?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductId =
  | 'DRESSAGE_OLYMPIC_LETTERA'
  | 'DRESSAGE_OLYMPIC_MODULO'
  | 'DRESSAGE_OLYMPIC_RETTANGOLO_20X40'
  | 'DRESSAGE_OLYMPIC_RETTANGOLO_20X60'
  | 'DRESSAGE_TRAINING_LETTERA'
  | 'DRESSAGE_TRAINING_MODULO'
  | 'DRESSAGE_TRAINING_RETTANGOLO_20X40'
  | 'DRESSAGE_TRAINING_RETTANGOLO_20X60'
  | 'OSTACOLI_BANDIERINE'
  | 'OSTACOLI_BARRIERA_3_MT'
  | 'OSTACOLI_CANDELIERE_CON_PIEDE_IN_PVC_170'
  | 'OSTACOLI_CANDELIERE_CON_PIEDE_IN_PVC_190'
  | 'OSTACOLI_CAVALLETTI_CAPRILLI'
  | 'OSTACOLI_CAVALLETTI_CAPRILLI_BARRIERA_KIT'
  | 'OSTACOLI_CUBI_MAXI'
  | 'OSTACOLI_CUBI_MINI'
  | 'OSTACOLI_CUCCHIAIO_DE'
  | 'OSTACOLI_CUCCHIAIO_PS'
  | 'OSTACOLI_FOSSO'
  | 'OSTACOLI_LAMA_DE_50'
  | 'OSTACOLI_LAMA_DE_150'
  | 'OSTACOLI_NUMERO_CAMPO_OSTACOLI_LIGHT'
  | 'OSTACOLI_NUMERO_CAMPO_OSTACOLI_PROFESSIONAL'
  | 'OSTACOLI_SUPPORTO_SICUREZZA'
  | 'RECINZIONE_1_FILAGNA'
  | 'RECINZIONE_2_FILAGNE'
  | 'RECINZIONE_3_FILAGNE'
  | 'RECINZIONE_4_FILAGNE'
  | 'RECINZIONE_PIEDE_MOBILE';

export type ProductRemoteInput = {
  depth?: InputMaybe<Scalars['Float']>;
  diameter?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  id: ProductId;
  length?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  products: Array<ProductData>;
  productsMissing: Array<ProductId>;
};


export type QueryProductsArgs = {
  productIds?: InputMaybe<Array<InputMaybe<ProductId>>>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', productsMissing: Array<ProductId>, products: Array<{ __typename?: 'ProductData', depth?: number | null, diameter?: number | null, height?: number | null, id: ProductId, length?: number | null, price?: number | null, weight?: number | null, width?: number | null }> };

export type UpdateProductsMutationVariables = Exact<{
  input: Array<ProductRemoteInput> | ProductRemoteInput;
}>;


export type UpdateProductsMutation = { __typename?: 'Mutation', updateProducts: Array<{ __typename?: 'ProductData', id: ProductId, depth?: number | null, diameter?: number | null, height?: number | null, length?: number | null, price?: number | null, weight?: number | null, width?: number | null }> };

export type GetPageProductsQueryVariables = Exact<{
  productIds?: InputMaybe<Array<InputMaybe<ProductId>> | InputMaybe<ProductId>>;
}>;


export type GetPageProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductData', depth?: number | null, diameter?: number | null, height?: number | null, id: ProductId, length?: number | null, price?: number | null, weight?: number | null, width?: number | null }> };


export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"diameter"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productsMissing"}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const UpdateProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductRemoteInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"diameter"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]} as unknown as DocumentNode<UpdateProductsMutation, UpdateProductsMutationVariables>;
export const GetPageProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"diameter"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]} as unknown as DocumentNode<GetPageProductsQuery, GetPageProductsQueryVariables>;