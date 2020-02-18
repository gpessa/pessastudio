import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Address, Map, Newsletter, Section, FooterMenu } from "@components"

import * as styles from "./styles.module.scss"
import { SOCIALS, LEGAL_IDS, PRODUCT_IDS } from "@constants"

const Footer: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <footer className={styles.element}>
    <Map />

    <div className={styles.data}>
      <Section>
        <Row>
   
          {/* <Address name="PESSASTUDIO Horse Tecnology srl" country="Italy" postalCode="35044" streetAddress="via Cà Megliadino, 35" addressLocality="Montagnana" addressRegion="Padova" email="annapessa@pessastudio.eu" telephoneMobile="+39 0429 805613" /> */}

          <Col md={2}>
            <FooterMenu title={formatMessage({ id: "FOOTER__menu-title__prodotti" })} links={PRODUCT_IDS.map(id => ({
              label: formatMessage({ id: `NAVIGATION__${id}` }),
              to: `/${id}/`,
            }))} />
          </Col>

          <Col md={2}>
            <FooterMenu title={formatMessage({ id: "FOOTER__menu-title__contattaci" })} links={[
              {
                label: formatMessage({ id: `NAVIGATION__contatti` }),
                to: '/contatti'
              },
              ...SOCIALS
            ]} />
          </Col>

          <Col md={2}>
            <FooterMenu title={formatMessage({ id: "FOOTER__menu-title__area_legale" })} links={LEGAL_IDS.map(id => ({
              label: formatMessage({ id: `NAVIGATION__${id}` }),
              to: `/${id}/`,
            }))} />
          </Col>
          
          <Col md={{ span: 4, offset: 2 }}>
            <Newsletter />
          </Col> 

        </Row>
      </Section>
    </div>

    <Container className="small text-center text-muted py-3">COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A. 414822</Container>
  </footer>
)

export default injectIntl(Footer)

