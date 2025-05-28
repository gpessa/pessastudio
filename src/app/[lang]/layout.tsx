import { GOOGLE_ANALYTICS, IS_PRODUCTION } from "@/constants";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PropsWithChildren } from "react";

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          {IS_PRODUCTION && <GoogleAnalytics gaId={GOOGLE_ANALYTICS} />}
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
          <SpeedInsights />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
