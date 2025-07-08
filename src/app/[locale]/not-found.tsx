import { msg } from "@lingui/core/macro";
import { Metadata } from "next";
import { getI18nInstance } from "utils/appRouterI18n";
import { PageLangParam } from "utils/initLingui";

export async function generateMetadata(
  props: PageLangParam
): Promise<Metadata> {
  const i18n = getI18nInstance((await props.params).locale);

  return {
    title: i18n._(msg`Pagina non trovata`),
  };
}

export { default } from "modules/404";
