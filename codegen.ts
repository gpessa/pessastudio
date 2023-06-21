import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",

      config: {
        enumsAsTypes: true,
        withHooks: true,
      },
    },
    "src/pages/api/graphql/resolvers-types.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],

      config: {
        enumsAsTypes: true,
        mappers: {
          // User: ".prisma/client#Product as ProductModel",
          // ProductId: ".prisma/client#ProductId as ProductIdENum",
        },
      },
    },
  },
};

export default config;
