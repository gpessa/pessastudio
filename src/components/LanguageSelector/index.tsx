import { changeLocale, injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import * as React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { IntlFormatters } from 'react-intl';
import Flag from 'react-world-flags';

import * as styles from './styles.module.scss';

const LanguageSelectorItem = ({ id }: { id: String }) => <Flag code={id} height={20} className={styles.languageSelectorItem} />

const LanguageSelector: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <IntlContextConsumer>
    {({ languages, language: currentLocale }) => {
      const showLanguageSelector = languages.length > 1;

      return showLanguageSelector ? (
        <NavDropdown title={<LanguageSelectorItem id={currentLocale} />} alignRight className={styles.languageSelector} id="language-selector">
          {languages.map(language => (
            <NavDropdown.Item key={language} onClick={() => changeLocale(language)}>
              <LanguageSelectorItem id={language} /> {formatMessage({ id: `LOCALE__${language}` })}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      ) : null;
    }}
  </IntlContextConsumer>
)

export default injectIntl(LanguageSelector)
