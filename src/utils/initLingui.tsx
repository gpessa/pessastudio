import { setI18n } from "@lingui/react/server";

import { getI18nInstance } from "./appRouterI18n";

export type PageLangParam = {
  params: Promise<{ locale: string }>;
};

export function initLingui(locale: string) {
  const i18n = getI18nInstance(locale);
  setI18n(i18n);
  return i18n;
}
