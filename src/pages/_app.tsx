import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ContactUs, Footer, Gdpr, Header, Seo } from "components";
import { AppProps } from "next/app";
import theme from "../theme";

import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Breadcrumb from "components/Breadcrumb";
import { useLinguiInit } from "hooks/useLingui";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import packageJson from "../../package.json";
import { isProduction } from "utils/constants";

export type MyAppProps = AppProps<{ messages: any }> & {
  session: Session;
};

const MyApp = (props: MyAppProps) => {
  const { Component, session, pageProps } = props;

  useEffect(() => {
    // We add Tag manager only in production so the tracking happen only there
    isProduction && TagManager.initialize({ gtmId: "GTM-NTCR82T" });
  }, []);

  useLinguiInit(pageProps.messages);

  return (
    <AppCacheProvider {...props}>
      <SessionProvider session={session}>
        <SpeedInsights />
        <I18nProvider i18n={i18n}>
          <Seo />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Breadcrumb />
            <Component {...pageProps} />
            <Footer version={packageJson.version} />
            <Gdpr />
          </ThemeProvider>
        </I18nProvider>
      </SessionProvider>
    </AppCacheProvider>
  );
};

export default MyApp;
