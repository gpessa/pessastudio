import { useLingui } from "@lingui/react"
import { CssBaseline } from "@mui/material"
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles"
import { useLocation } from "@reach/router"
import theme from "@theme"
import { navigate } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { intersection } from "lodash"
import React, { useEffect } from "react"
import gatsbyConfig from "../../../gatsby-config.js"
import Breadcrumb from "../Breadcrumb"
import Footer from "../Footer"
import Gdpr from "../Gdpr"
import Navigation from "../Navigation"
import Seo from "../Seo"

/* global GATSBY_THEME_I18N_REACT_INTL */

const getRedirectLanguage = (config, defaultLang) => {
  const availableLocales = config.map(({ code }) => code)
  const preferredLocales = navigator?.languages
  return intersection(preferredLocales, availableLocales)[0] || defaultLang
}

const Layout: React.FC<{ pageResources: any }> = ({ children, pageResources }) => {
  const { defaultLang, prefixDefault, localizedPath, config } = useLocalization()

  const { i18n } = useLingui()
  const { pathname } = useLocation()
  const currentLanguage = i18n.locale

  const path = pathname.replace(gatsbyConfig.pathPrefix, ``).replace("/" + currentLanguage, ``)
  const isNotFoundPage = pageResources?.component?.name === "NotFound"
  const hasLocale = pathname.replace(gatsbyConfig.pathPrefix, ``).startsWith("/" + currentLanguage)

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
        {!isNotFoundPage && <Breadcrumb />}
        <main>{children}</main>
        <Footer />
        <Gdpr />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Layout
