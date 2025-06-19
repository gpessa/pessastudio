import withLingui from "utils/withLingui";
import Index from "modules/Index";
import { msg } from "@lingui/core/macro";
import { getI18nInstance } from "utils/appRouterI18n";
import { PageLangParam } from "utils/initLingui";
import { NAME_STRING } from "utils/constants";

export async function generateMetadata(props: PageLangParam) {
  const i18n = getI18nInstance((await props.params).lang);

  return {
    description: i18n._(
      msg`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`
    ),
    title: i18n._(msg`Home`) + " | " + NAME_STRING,
  };
}

export default Index;
