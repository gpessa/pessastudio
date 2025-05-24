import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProps } from "next/app";
import { Breadcrumb, Footer, Gdpr, Header, Seo, WhatsApp } from "components";
import { useLinguiInit } from "hooks/useLingui";
import "react-multi-carousel/lib/styles.css";
import { isProduction } from "utils/constants";
import theme from "../theme";
import packageJson from "../../package.json";

export type MyAppProps = AppProps<{ messages: any }>;

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props;

  useLinguiInit(pageProps.messages);

  return (
    <AppCacheProvider {...props}>
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
          <WhatsApp />
        </ThemeProvider>
      </I18nProvider>
      {isProduction && <GoogleAnalytics gaId="G-11DED996WJ" />}
    </AppCacheProvider>
  );
};

export default MyApp;
