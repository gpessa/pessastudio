import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

let books = [
  {
    id: 0,
    name: "JavaScript for Dummies",
  },
];

const typeDefs = gql`
  type Book {
    id: ID!
    name: String
  }
  type Query {
    getBooks: [Book]
  }
`;

const resolvers = {
  Query: {
    getBooks: () => {
      return books;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
