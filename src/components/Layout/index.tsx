/* global GATSBY_THEME_I18N_REACT_INTL */
import { navigate, PageProps } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { useTree } from "hooks"
import { intersection } from "lodash"
import React, { useEffect } from "react"
import { PAGES } from "utils/constants"
import Breadcrumb from "../Breadcrumb"
import Footer from "../Footer"
import Gdpr from "../Gdpr"
import Navigation from "../Navigation"
import Seo from "../Seo"

type Language = {
  code: string
  dateFormat: string
  hrefLang: string
  langDir: string
  localName: string
  name: string
}
const getRedirectLanguage = (config: Language[], locale: string) => {
  const availableLocales = config.map(({ code }) => code)
  const preferredLocales = navigator?.languages
  return intersection(preferredLocales, availableLocales)[0] || locale
}

const Layout: React.FC<PageProps<object, { originalPath: string }>> = ({ children, pageResources, location }) => {
  const { defaultLang, prefixDefault, localizedPath, config, locale: currentLanguage } = useLocalization()

  const hasLocale = pageResources?.page?.path?.startsWith("/" + currentLanguage)
  const path = location.pathname.replace(new RegExp(`^/${currentLanguage}`), "")
  const page = Object.values(PAGES).find(page => page.url === path)
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

  return (
    <>
      <Seo {...{ ...page, breadcrumb }} />
      <Navigation />
      {!isNotFoundPage && <Breadcrumb {...{ breadcrumb }} />}
      <main>{children}</main>
      <Footer />
      <Gdpr />
    </>
  )
}

export default Layout
