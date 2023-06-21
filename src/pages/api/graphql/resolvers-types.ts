import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Mutation: ResolverTypeWrapper<{}>;
  ProductData: ResolverTypeWrapper<ProductData>;
  ProductId: ProductId;
  ProductRemoteInput: ProductRemoteInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Mutation: {};
  ProductData: ProductData;
  ProductRemoteInput: ProductRemoteInput;
  Query: {};
  String: Scalars['String'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateProduct?: Resolver<ResolversTypes['ProductData'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'input'>>;
  updateProducts?: Resolver<Array<ResolversTypes['ProductData']>, ParentType, ContextType, RequireFields<MutationUpdateProductsArgs, 'input'>>;
};

export type ProductDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductData'] = ResolversParentTypes['ProductData']> = {
  depth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ProductId'], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  products?: Resolver<Array<ResolversTypes['ProductData']>, ParentType, ContextType, Partial<QueryProductsArgs>>;
  productsMissing?: Resolver<Array<ResolversTypes['ProductId']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  ProductData?: ProductDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

