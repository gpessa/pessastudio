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
    DRESSAGE_OLYMPIC_LETTERA
    DRESSAGE_OLYMPIC_MODULO
    DRESSAGE_OLYMPIC_RETTANGOLO_20X40
    DRESSAGE_OLYMPIC_RETTANGOLO_20X60
    DRESSAGE_TRAINING_LETTERA
    DRESSAGE_TRAINING_MODULO
    DRESSAGE_TRAINING_RETTANGOLO_20X40
    DRESSAGE_TRAINING_RETTANGOLO_20X60
    FOSSO
    KIT_CAVALLETTI_CAPRILLI_BARRIERA
    LAMA_DE_50_150_CM
    NUMERO_CAMPO_OSTACOLI_LIGHT
    NUMERO_CAMPO_OSTACOLI_PROFESSIONAL
    PIEDE_MOBILE
    RECINZIONE_1_FILAGNA
    RECINZIONE_2_FILAGNE
    RECINZIONE_3_FILAGNE
    RECINZIONE_4_FILAGNE
    SUPPORTO_SICUREZZA
  }

  type ProductRemoteData {
    id: ProductId!
    price: Float
    width: Float
    length: Float
    height: Float
    weight: Float
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
        const {
          Nome: id,
          Altezza,
          Lunghezza,
          Larghezza,
          Peso,
          Prezzo,
        } = current;

        if (!productIds.includes(id)) return all;

        return [
          ...all,
          {
            id,
            price: Prezzo && Prezzo != "" ? Prezzo : undefined,
            width: Larghezza && Larghezza != "" ? Larghezza : undefined,
            length: Lunghezza && Lunghezza != "" ? Lunghezza : undefined,
            height: Altezza && Altezza != "" ? Altezza : undefined,
            weight: Peso && Peso != "" ? Peso : undefined,
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
