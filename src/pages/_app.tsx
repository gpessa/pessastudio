import { CacheProvider, EmotionCache } from "@emotion/react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Footer, Gdpr, Header, Seo } from "components";
import { en, fr, it } from "make-plural/plurals";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createEmotionCache } from "utils/emotion";
import theme from "../theme";

import Breadcrumb from "components/Breadcrumb";
import { usePages, useTree } from "hooks";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "pure-react-carousel/dist/react-carousel.es.css";

export type MyAppProps = AppProps<{ messages: any }> & {
  emotionCache: EmotionCache;
};

const PLURALS: any = {
  it,
  fr,
  en,
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locale, pathname } = useRouter();
  const { PAGES } = usePages();
  const breadcrumb = useTree(pathname);
  const isProduction = process.env.NODE_EN === "production";

  const isNotFoundPage = [PAGES.PAGE_404.url, PAGES.PAGE_500.url].includes(
    pathname
  );

  i18n.load(locale!, pageProps.messages);
  i18n.activate(locale!);
  i18n.loadLocaleData(locale!, { plurals: PLURALS[locale!] });

  return (
    <I18nProvider i18n={i18n}>
      <CacheProvider value={emotionCache}>
        <Seo />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {isProduction && <GoogleAnalytics trackPageViews debugMode />}
          {!isNotFoundPage && <Breadcrumb {...{ breadcrumb }} />}
          <Component {...pageProps} />
          <Footer />
          <Gdpr />
        </ThemeProvider>
      </CacheProvider>
    </I18nProvider>
  );
};

export default MyApp;
