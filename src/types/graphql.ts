/* eslint-disable */
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

export enum ProductId {
  Bandierine = 'BANDIERINE',
  Barriera_3Mt = 'BARRIERA_3_MT',
  CandeliereConPiedeInPvc = 'CANDELIERE_CON_PIEDE_IN_PVC',
  CavallettiCaprilli = 'CAVALLETTI_CAPRILLI',
  CavallettiCaprilliBarrieraKit = 'CAVALLETTI_CAPRILLI_BARRIERA_KIT',
  CubiMaxi = 'CUBI_MAXI',
  CubiMini = 'CUBI_MINI',
  CucchiaioDe = 'CUCCHIAIO_DE',
  CucchiaioPs = 'CUCCHIAIO_PS',
  DressageOlympicLettera = 'DRESSAGE_OLYMPIC_LETTERA',
  DressageOlympicModulo = 'DRESSAGE_OLYMPIC_MODULO',
  DressageOlympicRettangolo_20X40 = 'DRESSAGE_OLYMPIC_RETTANGOLO_20X40',
  DressageOlympicRettangolo_20X60 = 'DRESSAGE_OLYMPIC_RETTANGOLO_20X60',
  DressageTrainingLettera = 'DRESSAGE_TRAINING_LETTERA',
  DressageTrainingModulo = 'DRESSAGE_TRAINING_MODULO',
  DressageTrainingRettangolo_20X40 = 'DRESSAGE_TRAINING_RETTANGOLO_20X40',
  DressageTrainingRettangolo_20X60 = 'DRESSAGE_TRAINING_RETTANGOLO_20X60',
  Fosso = 'FOSSO',
  LamaDe_50_150Cm = 'LAMA_DE_50_150_CM',
  NumeroCampoOstacoliLight = 'NUMERO_CAMPO_OSTACOLI_LIGHT',
  NumeroCampoOstacoliProfessional = 'NUMERO_CAMPO_OSTACOLI_PROFESSIONAL',
  PiedeMobile = 'PIEDE_MOBILE',
  Recinzione_1Filagna = 'RECINZIONE_1_FILAGNA',
  Recinzione_2Filagne = 'RECINZIONE_2_FILAGNE',
  Recinzione_3Filagne = 'RECINZIONE_3_FILAGNE',
  Recinzione_4Filagne = 'RECINZIONE_4_FILAGNE',
  SupportoSicurezza = 'SUPPORTO_SICUREZZA'
}

export type ProductRemoteData = {
  __typename?: 'ProductRemoteData';
  height?: Maybe<Scalars['Float']>;
  id: ProductId;
  length?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  get: Array<ProductRemoteData>;
};


export type QueryGetArgs = {
  productIds?: InputMaybe<Array<InputMaybe<ProductId>>>;
};
