import { CacheProvider, EmotionCache } from "@emotion/react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Footer, Gdpr, Header, Seo } from "components";
import { AppProps } from "next/app";
import { createEmotionCache } from "utils/emotion";
import theme from "../theme";

import Breadcrumb from "components/Breadcrumb";
import { useLinguiInit } from "hooks/useLingui";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import packageJson from "../../package.json";
import client from "utils/apollo";
import { ApolloProvider } from "@apollo/client";

export type MyAppProps = AppProps<{ messages: any }> & {
  emotionCache: EmotionCache;
  session: Session;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const {
    Component,
    session,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props;

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NTCR82T" });
  }, []);

  useLinguiInit(pageProps.messages);

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <I18nProvider i18n={i18n}>
          <CacheProvider value={emotionCache}>
            <Seo />
            <ThemeProvider theme={theme}>
              <h1>test</h1>
              <CssBaseline />
              <Header />
              <Breadcrumb />
              <Component {...pageProps} />
              <Footer version={packageJson.version} />
              <Gdpr />
            </ThemeProvider>
          </CacheProvider>
        </I18nProvider>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default MyApp;
