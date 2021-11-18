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

const Layout: React.FC<PageProps<object, { originalPath: string }>> = ({
  children,
  pageResources,
  pageContext,
  path,
}) => {
  const { defaultLang, prefixDefault, localizedPath, config, locale: currentLanguage } = useLocalization()
  const { i18n } = useLingui()

  const hasLocale = pageResources?.page?.path?.startsWith("/" + currentLanguage)
  const originalPath = pageResources?.json?.pageContext?.originalPath || ""
  const isNotFoundPage = originalPath === "/404/"

  const breadcrumb = useTree(pageContext.originalPath)

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

  // if (!hasLocale) return null

  const title = i18n._(`${originalPath}:title`)
  const description = i18n._(`${originalPath}:description`)

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
