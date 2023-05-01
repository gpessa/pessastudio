import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { gql } from "graphql-tag";
import { ProductRemoteData } from "types/graphql";

const SPREADSHEET_it = "1FPZVKSZ0-LBDMVqqshnD5YCSkD6u5FUhS5KizDpejdQ";

// var ProductIdEnum = new GraphQLEnumType({
//   name: "ProductId",
//   values: {
//     POLES: { value: "POLES" },
//     WATERTRAY: { value: "WATERTRAY" },
//     CAVALLETTI_CAPRILLI: { value: "CAVALLETTI_CAPRILLI" },
//     CAVALLETTI_CAPRILLI_KIT: { value: "CAVALLETTI_CAPRILLI_KIT" },
//   },
// });

// const ProductType = new GraphQLObjectType({
//   name: "Product",
//   fields: () => ({
//     price: {
//       type: new GraphQLNonNull(GraphQLFloat),
//     },
//     id: {
//       type: ProductIdEnum,
//     },
//   }),
// });

const typeDefs = gql`
  enum ProductId {
    BANDIERINE
    BARRIERA_3_MT
    CANDELIERE_CON_PIEDE_IN_PVC
    CAVALLETTI_CAPRILLI
    CUBI_MAXI
    CUBI_MINI
    CUCCHIAIO_DE
    CUCCHIAIO_PS
    FOSSO
    KIT_CAVALLETTI_CAPRILLI_BARRIERA
    LAMA_DE_50_150_CM
    LETTERA_DRESSAGE_OLYMPIC
    LETTERA_DRESSAGE_TRAINING
    MODULO_DRESSAGE_OLYMPIC
    MODULO_DRESSAGE_TRAINING
    NUMERO_CAMPO_OSTACOLI_LIGHT
    NUMERO_CAMPO_OSTACOLI_PROFESSIONAL
    PIEDE_MOBILE
    RECINZIONE_1_FILAGNA
    RECINZIONE_2_FILAGNE
    RECINZIONE_3_FILAGNE
    RECINZIONE_4_FILAGNE
    RETTANGOLO_DRESSAGE_20X40_OLYMPIC
    RETTANGOLO_DRESSAGE_20X40_TRAINING
    RETTANGOLO_DRESSAGE_20X60_OLYMPIC
    RETTANGOLO_DRESSAGE_20X60_TRAINING
    SUPPORTO_SICUREZZA
  }

  type ProductRemoteData {
    id: ProductId!
    price: Float!
  }

  type Query {
    get(productIds: [ProductId]): [ProductRemoteData!]!
  }
`;

const resolvers = {
  Query: {
    get: async (_: any, { productIds }: any) => {
      const doc = new GoogleSpreadsheet(SPREADSHEET_it);

      doc.useApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!);
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();

      const result = rows.reduce((all, current) => {
        const [id, price] = current._rawData;

        if (!productIds.includes(id)) return all;

        return [
          ...all,
          {
            id,
            price,
          },
        ];
      }, [] as ProductRemoteData[]);

      return result;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
