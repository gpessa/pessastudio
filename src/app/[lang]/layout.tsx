import { msg } from "@lingui/core/macro";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer, LinguiClientProvider, Header } from "components";
import { PropsWithChildren } from "react";
import theme from "theme";
import { allMessages, getI18nInstance } from "utils/appRouterI18n";
import { isProduction } from "utils/constants";
import { initLingui, PageLangParam } from "utils/initLingui";
import linguiConfig from "../../../lingui.config";
import packageJson from "../../../package.json";
import "react-multi-carousel/lib/styles.css";

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: PageLangParam) {
  const i18n = getI18nInstance((await props.params).lang);

  return {
    title: i18n._(msg`Translation Demo`),
  };
}

const RootLayout = async ({
  params,
  children,
}: PropsWithChildren<PageLangParam>) => {
  const lang = (await params).lang;
  initLingui(lang);

  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <LinguiClientProvider
              initialLocale={lang}
              initialMessages={allMessages[lang]!}
            >
              <Header />
              {children}
              <Footer version={packageJson.version} />
            </LinguiClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <SpeedInsights />
        {isProduction && <GoogleAnalytics gaId="G-11DED996WJ" />}
      </body>
    </html>
  );
};

export default RootLayout;
