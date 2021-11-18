/* global GATSBY_THEME_I18N_REACT_INTL */
import { Theme } from "@emotion/react"
import { useLingui } from "@lingui/react"
import { navigate, PageProps } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { intersection } from "lodash"
import React, { useEffect } from "react"
import { useTree } from "src/hooks"
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

const Layout: React.FC<PageProps<object, { originalPath: string }>> = ({ children, pageResources, location }) => {
  const { defaultLang, prefixDefault, localizedPath, config, locale: currentLanguage } = useLocalization()
  const { i18n } = useLingui()

  const hasLocale = pageResources?.page?.path?.startsWith("/" + currentLanguage)

  var regExp = new RegExp(`^/${currentLanguage}`)
  const path = location.pathname.replace(regExp, "")

  const isNotFoundPage = path === "/404/"

  const breadcrumb = useTree(path)

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

  const title = i18n._(`${path}:title`)
  const description = i18n._(`${path}:description`)

  return (
    <>
      <Seo {...{ title, description, breadcrumb }} />
      <Navigation />
      {!isNotFoundPage && <Breadcrumb {...{ breadcrumb }} />}
      <main>{children}</main>
      <Footer />
      <Gdpr />
    </>
  )
}

export default Layout
