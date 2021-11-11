/* global GATSBY_THEME_I18N_REACT_INTL */
import { Theme } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles"
import theme from "@theme"
import { navigate, PageProps } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { intersection } from "lodash"
import React, { useEffect } from "react"
import Breadcrumb from "../Breadcrumb"
import Footer from "../Footer"
import Gdpr from "../Gdpr"
import Navigation from "../Navigation"
import Seo from "../Seo"

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    small: TypographyStyleOptions
    slim: TypographyStyleOptions
  }
  interface Typography {
    small: TypographyStyleOptions
    slim: TypographyStyleOptions
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    warm1: Palette["primary"]
    warm2: Palette["primary"]
  }
  interface PaletteOptions {
    warm1: PaletteOptions["primary"]
    warm2: PaletteOptions["primary"]
  }
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const getRedirectLanguage = (config, defaultLang) => {
  const availableLocales = config.map(({ code }) => code)
  const preferredLocales = navigator?.languages
  return intersection(preferredLocales, availableLocales)[0] || defaultLang
}

const Layout: React.FC<PageProps<object, { originalPath: string }>> = ({ children, pageResources, path }) => {
  const { defaultLang, prefixDefault, localizedPath, config, locale: currentLanguage } = useLocalization()
  const hasLocale = pageResources.page.path.startsWith("/" + currentLanguage)

  const originalPath = pageResources?.json?.pageContext?.originalPath
  const isNotFoundPage = originalPath === "/404/"

  useEffect(() => {
    if (hasLocale) return

    const locale = getRedirectLanguage(config, defaultLang)

    const localizedUrl = localizedPath({
      prefixDefault,
      defaultLang,
      locale,
      path,
    })

    navigate(localizedUrl, { replace: true })
  }, [])

  if (!hasLocale) return null

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Seo />
        <Navigation />
        {!isNotFoundPage && <Breadcrumb path={originalPath} />}
        <main>{children}</main>
        <Footer />
        <Gdpr />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Layout
