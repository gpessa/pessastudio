import { changeLocale, injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"
import * as React from "react"
import { Button, Modal, Nav } from "react-bootstrap"
import { IntlFormatters } from "react-intl"
import Flag from "react-world-flags"


import * as styles from "./styles.module.scss"


const LanguageSelector: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const [show, setShow] = React.useState(false)

  const handleModal = () => {
    setShow(prevCount => !prevCount)
  }

  return (
    <IntlContextConsumer>
      {({ languages, language }) => (
        <>
          <Nav.Link onClick={handleModal}>
            <Flag code={language} height={15}  className={styles.flag}/>
          </Nav.Link>
          <Modal show={show} onHide={handleModal} size="sm">
            <Modal.Body>
              {languages.map((lang: string) => (
                <Button
                  onClick={() => {
                    changeLocale(lang)
                    handleModal()
                  }}
                  block
                  variant="link"
                >
                  <Flag code={lang} height={15} className={`${styles.flag} mr-2`}/>
                  {formatMessage({ id: `LOCALE__${lang}` })}
                </Button>
              ))}
            </Modal.Body>
          </Modal>
        </>
      )}
    </IntlContextConsumer>
  )
}

export default injectIntl(LanguageSelector)
