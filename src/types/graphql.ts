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

export enum AllowedColor {
  Blue = 'BLUE',
  Green = 'GREEN',
  Red = 'RED'
}

export type Query = {
  __typename?: 'Query';
  rollDice?: Maybe<Scalars['String']>;
};


export type QueryRollDiceArgs = {
  color?: InputMaybe<AllowedColor>;
  numDice: Scalars['Int'];
  numSides?: InputMaybe<Scalars['Int']>;
};

export type ExampleQueryQueryVariables = Exact<{
  numDice: Scalars['Int'];
  numSides?: InputMaybe<Scalars['Int']>;
  color: AllowedColor;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', rollDice?: string | null };


export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numDice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numSides"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AllowedColor"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rollDice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"numDice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numDice"}}},{"kind":"Argument","name":{"kind":"Name","value":"numSides"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numSides"}}},{"kind":"Argument","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;