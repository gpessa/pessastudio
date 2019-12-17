import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl"
import * as React from "react"
import { NavDropdown } from "react-bootstrap"
import { injectIntl } from "react-intl"
import Flag from "react-world-flags"

import * as styles from "./styles.module.scss"

const LanguageSelectorItem = ({ id }: { id: String }) => <Flag code={id} height={20} className={styles.languageSelectorItem} />

const LanguageSelector = ({ intl: { formatMessage } }) => (
  <IntlContextConsumer>
    {({ languages, language: currentLocale }) => (
      <NavDropdown title={<LanguageSelectorItem id={currentLocale} />} alignRight className={styles.languageSelector}>
        {languages.map(language => (
          <NavDropdown.Item key={language} onClick={() => changeLocale(language)}>
            <LanguageSelectorItem id={language} /> {formatMessage({ id: `LOCALE_${language}` })}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    )}
  </IntlContextConsumer>
)

export default injectIntl(LanguageSelector)
