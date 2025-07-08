import { Metadata } from "next";
import { getI18nInstance } from "utils/appRouterI18n";
import { LOCALES_ARRAY, WEBISTE_URL } from "utils/constants";
import { PageId } from "utils/getPages";
import { PageLangParam } from "utils/initLingui";
import getPages from "utils/getPages";

const generateMetadataFunction = (pageId: PageId) => {
  return async function generateMetadata(
    props: PageLangParam
  ): Promise<Metadata> {
    const locale = (await props.params).locale;

    const page = getPages(locale)["PAGES"][pageId];
    const i18n = getI18nInstance(locale);

    const title = i18n._(page.title);

    const response: Metadata = {
      title,
      description: undefined,
      alternates: {
        canonical: `${WEBISTE_URL}/${locale}${page.url}`,
        languages: LOCALES_ARRAY.reduce(
          (acc, { code }) => ({
            ...acc,
            [code]: `${WEBISTE_URL}/${code}${page.url}`,
          }),
          {}
        ),
      },
      openGraph: {
        title,
        description: undefined,
      },
    };

    if (page.description) {
      const description = i18n._(page.description);

      response.description = description;
      response.openGraph!.description = description;
    }

    return response;
  };
};

export default generateMetadataFunction;
