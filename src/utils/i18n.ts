import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({
  locale,
}: GetStaticPropsContext<{ locale: string }>) => {
  const { messages } = await import(`../i18n/${locale}/messages.po`);

  return {
    props: {
      messages,
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};
