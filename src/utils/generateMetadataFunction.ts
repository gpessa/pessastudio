import { MessageDescriptor } from "@lingui/core";
import { Metadata } from "next";
import { getI18nInstance } from "utils/appRouterI18n";
import { LOCALES_ARRAY } from "utils/constants";
import { PageLangParam } from "utils/initLingui";

const generateMetadataFunction = (args: {
  url: string;
  title: MessageDescriptor;
  description?: MessageDescriptor;
}) => {
  return async function generateMetadata(
    props: PageLangParam
  ): Promise<Metadata> {
    const locale = (await props.params).locale;

    const i18n = getI18nInstance(locale);

    const title = i18n._(args.title);

    const response: Metadata = {
      title,
      description: undefined,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${locale}${args.url}`,
        languages: LOCALES_ARRAY.reduce(
          (acc, { code }) => ({
            ...acc,
            [code]: `${process.env.NEXT_PUBLIC_WEBISTE_URL}/${code}${args.url}`,
          }),
          {}
        ),
      },
      openGraph: {
        title,
        description: undefined,
      },
    };

    if (args.description) {
      const description = i18n._(args.description);

      response.description = description;
      response.openGraph!.description = description;
    }

    return response;
  };
};

export default generateMetadataFunction;
