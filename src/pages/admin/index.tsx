import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { loadCatalog } from "utils/getProps";
export { default } from "modules/Admin";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const messages = await loadCatalog(context);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (!session) {
    return { redirect: { destination: "/admin/signin" } };
  }

  return { props: { messages } };
}
