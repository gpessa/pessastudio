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
  CubiMaxi = 'CUBI_MAXI',
  CubiMini = 'CUBI_MINI',
  CucchiaioDe = 'CUCCHIAIO_DE',
  CucchiaioPs = 'CUCCHIAIO_PS',
  Fosso = 'FOSSO',
  KitCavallettiCaprilliBarriera = 'KIT_CAVALLETTI_CAPRILLI_BARRIERA',
  LamaDe_50_150Cm = 'LAMA_DE_50_150_CM',
  LetteraDressageOlympic = 'LETTERA_DRESSAGE_OLYMPIC',
  LetteraDressageTraining = 'LETTERA_DRESSAGE_TRAINING',
  ModuloDressageOlympic = 'MODULO_DRESSAGE_OLYMPIC',
  ModuloDressageTraining = 'MODULO_DRESSAGE_TRAINING',
  NumeroCampoOstacoliLight = 'NUMERO_CAMPO_OSTACOLI_LIGHT',
  NumeroCampoOstacoliProfessional = 'NUMERO_CAMPO_OSTACOLI_PROFESSIONAL',
  PiedeMobile = 'PIEDE_MOBILE',
  Recinzione_1Filagna = 'RECINZIONE_1_FILAGNA',
  Recinzione_2Filagne = 'RECINZIONE_2_FILAGNE',
  Recinzione_3Filagne = 'RECINZIONE_3_FILAGNE',
  Recinzione_4Filagne = 'RECINZIONE_4_FILAGNE',
  RettangoloDressage_20X40Olympic = 'RETTANGOLO_DRESSAGE_20X40_OLYMPIC',
  RettangoloDressage_20X40Training = 'RETTANGOLO_DRESSAGE_20X40_TRAINING',
  RettangoloDressage_20X60Olympic = 'RETTANGOLO_DRESSAGE_20X60_OLYMPIC',
  RettangoloDressage_20X60Training = 'RETTANGOLO_DRESSAGE_20X60_TRAINING',
  SupportoSicurezza = 'SUPPORTO_SICUREZZA'
}

export type ProductRemoteData = {
  __typename?: 'ProductRemoteData';
  id: ProductId;
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  get: Array<ProductRemoteData>;
};


export type QueryGetArgs = {
  productIds?: InputMaybe<Array<InputMaybe<ProductId>>>;
};