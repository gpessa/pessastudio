import { LanguageSwitcher, LinguiClientProvider } from "@/components";
import { GOOGLE_ANALYTICS, IS_PRODUCTION } from "@/constants";
import theme from "@/theme";
import { allMessages, getI18nInstance } from "@/utilities/appRouterI18n";
import { initLingui, PageLangParam } from "@/utilities/initLingui";
import { msg } from "@lingui/core/macro";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PropsWithChildren } from "react";
import linguiConfig from "../../../lingui.config";

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: PageLangParam) {
  const i18n = getI18nInstance((await props.params).lang);

  return {
    title: i18n._(msg`Translation Demo`),
  };
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<PageLangParam>) {
  const lang = (await params).lang;
  initLingui(lang);

  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          {IS_PRODUCTION && <GoogleAnalytics gaId={GOOGLE_ANALYTICS} />}
          <ThemeProvider theme={theme}>
            <LinguiClientProvider
              initialLocale={lang}
              initialMessages={allMessages[lang]!}
            >
              <LanguageSwitcher />
              {children}
            </LinguiClientProvider>
          </ThemeProvider>
          <SpeedInsights />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
