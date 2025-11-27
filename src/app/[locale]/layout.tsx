import "react-multi-carousel/lib/styles.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import image from "assets/generals/image.jpg";
import {
  Breadcrumb,
  Footer,
  Gdpr,
  Header,
  LdJson,
  LinguiClientProvider,
  Trackings,
  WhatsApp,
} from "components";
import { Metadata } from "next";
import Head from "next/head";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { Organization, WithContext } from "schema-dts";
import theme from "theme";
import { allMessages } from "utils/appRouterI18n";
import {
  ITALIA,
  NAME_STRING,
  SEDE_LEGALE,
  SEDE_OPERATIVA,
  SOCIALS,
  WEBISTE_URL,
} from "utils/constants";
import { initLingui, PageLangParam } from "utils/initLingui";

import { SpeedInsights } from "@vercel/speed-insights/next";
import i18nConfig from "../../../i18nConfig";
import { version } from "../../../package.json";

export async function generateMetadata({}: PageLangParam): Promise<Metadata> {
  return {
    openGraph: {
      title: {
        default: NAME_STRING,
        template: `%s | ${NAME_STRING}`,
      },
    },
    title: {
      default: NAME_STRING,
      template: `%s | ${NAME_STRING}`,
    },
  };
}

const jsonLdOrganization: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  address: {
    "@type": "PostalAddress",
    ...SEDE_OPERATIVA,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      ...ITALIA,
    },
  ],
  email: ITALIA.email,
  legalName: SEDE_LEGALE.name,
  logo: image.src,
  name: SEDE_OPERATIVA.name,
  sameAs: [
    SOCIALS.facebook_1,
    SOCIALS.facebook_2,
    SOCIALS.instagram,
    SOCIALS.youtube,
  ],
  telephone: ITALIA.telephone,
  url: WEBISTE_URL,
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<PageLangParam>) {
  const { locale } = await params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  initLingui(locale);

  return (
    <html lang={locale}>
      <Head>
        <LdJson data={jsonLdOrganization} />
      </Head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LinguiClientProvider
              initialLocale={locale}
              initialMessages={allMessages[locale]!}
            >
              <Header />
              <Breadcrumb />
              <main role="main">{children}</main>
              <Footer version={version} />
              <Gdpr />
              <WhatsApp />
            </LinguiClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Trackings />
        <SpeedInsights />
      </body>
    </html>
  );
}
