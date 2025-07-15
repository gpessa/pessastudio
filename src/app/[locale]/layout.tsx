import "react-multi-carousel/lib/styles.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import image from "assets/generals/image.jpg";
import {
  Breadcrumb,
  Footer,
  Gdpr,
  Header,
  LdJson,
  LinguiClientProvider,
  WhatsApp,
} from "components";
import { Metadata } from "next";
import Head from "next/head";
import { notFound } from "next/navigation";
import Script from "next/script";
import { PropsWithChildren } from "react";
import { Organization, WithContext } from "schema-dts";
import theme from "theme";
import { allMessages } from "utils/appRouterI18n";
import {
  GOOGLE_ANALYTICS,
  ITALIA,
  NAME_STRING,
  PIXEL_ID,
  SEDE_LEGALE,
  SEDE_OPERATIVA,
  SOCIALS,
  WEBISTE_URL,
} from "utils/constants";
import { initLingui, PageLangParam } from "utils/initLingui";

import i18nConfig from "../../../i18nConfig";
import { version } from "../../../package.json";

export async function generateMetadata({
  params,
}: PageLangParam): Promise<Metadata> {
  return {
    title: {
      template: `%s | ${NAME_STRING}`,
      default: NAME_STRING,
    },
    openGraph: {
      title: {
        template: `%s | ${NAME_STRING}`,
        default: NAME_STRING,
      },
    },
  };
}

const jsonLdOrganization: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  telephone: ITALIA.telephone,
  email: ITALIA.email,
  url: WEBISTE_URL,
  logo: image.src,
  legalName: SEDE_LEGALE.name,
  name: SEDE_OPERATIVA.name,
  address: {
    "@type": "PostalAddress",
    ...SEDE_OPERATIVA,
  },
  sameAs: [
    SOCIALS.facebook_1,
    SOCIALS.facebook_2,
    SOCIALS.instagram,
    SOCIALS.youtube,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      ...ITALIA,
    },
  ],
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
          {GOOGLE_ANALYTICS && <GoogleAnalytics gaId={GOOGLE_ANALYTICS} />}
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
          <SpeedInsights />
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
            }}
          />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
