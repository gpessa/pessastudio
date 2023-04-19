import { GetStaticPropsContext } from "next";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const { messages } = await import(`../i18n/${locale}/messages.po`);

  return {
    props: { messages },
  };
};
