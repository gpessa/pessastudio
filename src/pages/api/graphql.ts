import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

const typeDefs = gql`
  enum AllowedColor {
    RED
    GREEN
    BLUE
  }

  type Query {
    rollDice(numDice: Int!, numSides: Int, color: AllowedColor): String
  }
`;

const resolvers = {
  Query: {
    rollDice: (_: any, { numDice, numSides, color }: any) => {
      return `${color}_${numDice}+${numSides}`;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
