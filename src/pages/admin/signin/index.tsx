import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";
import { getProviders } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]";
import { loadCatalog } from "utils/getProps";
export { default } from "modules/AdminSignin";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const messages = await loadCatalog(context.locale!);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/admin" } };
  }

  const providers = await getProviders();

  return {
    props: {
      providers: providers ?? [],
      messages,
    },
  };
}
