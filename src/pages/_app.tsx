import { CacheProvider, EmotionCache } from "@emotion/react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Footer, Gdpr, Header, Seo } from "components";
import { AppProps } from "next/app";
import { createEmotionCache } from "utils/emotion";
import theme from "../theme";

import { ApolloProvider } from "@apollo/client";
import Breadcrumb from "components/Breadcrumb";
import { useLinguiInit } from "hooks/useLingui";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "pure-react-carousel/dist/react-carousel.es.css";
import client from "utils/apollo";
import packageJson from "../../package.json";

export type MyAppProps = AppProps<{ messages: any }> & {
  emotionCache: EmotionCache;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const isProduction = process.env.NODE_EN === "production";

  useLinguiInit(pageProps.messages);

  return (
    <ApolloProvider client={client}>
    <I18nProvider i18n={i18n}>
      <CacheProvider value={emotionCache}>
        <Seo />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {isProduction && <GoogleAnalytics trackPageViews debugMode />}
          <Breadcrumb />
          <Component {...pageProps} />
          <Footer version={packageJson.version} />
          <Gdpr />
        </ThemeProvider>
      </CacheProvider>
    </I18nProvider>
    </ApolloProvider>
  );
};

export default MyApp;
