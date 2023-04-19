import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

import type { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}
