import {
  Footer,
  Gdpr,
  Header,
  LinguiClientProvider,
  Seo,
  WhatsApp,
} from "components";
import { GOOGLE_ANALYTICS, IS_PRODUCTION } from "utils/constants";
import theme from "theme";
import { allMessages, getI18nInstance } from "utils/appRouterI18n";
import { initLingui, PageLangParam } from "utils/initLingui";
import { msg } from "@lingui/core/macro";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PropsWithChildren } from "react";
import linguiConfig from "../../../lingui.config";
import { version } from "../../../package.json";
import { Source_Sans_3, Roboto_Condensed } from "next/font/google";
import "react-multi-carousel/lib/styles.css";

export const fontSourceCodePro = Source_Sans_3({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const fontRobotoCondensed = Roboto_Condensed({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<PageLangParam>) {
  const lang = (await params).lang;
  initLingui(lang);

  return (
    <html
      className={`${fontSourceCodePro.className} ${fontRobotoCondensed.className}`}
      lang={lang}
    >
      <body>
        <AppRouterCacheProvider>
          {IS_PRODUCTION && <GoogleAnalytics gaId={GOOGLE_ANALYTICS} />}
          <ThemeProvider theme={theme}>
            <LinguiClientProvider
              initialLocale={lang}
              initialMessages={allMessages[lang]!}
            >
              <Seo />
              <Header />
              {children}
              <Footer version={version} />
              <Gdpr />
              <WhatsApp />
            </LinguiClientProvider>
          </ThemeProvider>
          <SpeedInsights />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
