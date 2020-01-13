import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { injectIntl } from "react-intl"

import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Address from '../Address';
import Map from '../Map';
import Newsletter from '../Newsletter';
import Section from '../Section';

import * as styles from './styles.module.scss';

const Footer = ({ intl: { formatMessage } }) => (
  <footer className={styles.element}>
    <Map />

    <div className={styles.data}>
      <Section>
        <Row>
          <Col md={6} lg={{ span: 4 }} className="mb-5 mb-md-0">
            <h5>{formatMessage({ id: "NAVIGATION__contatti" })}</h5>
            
            <Address
              name="PESSASTUDIO Horse Tecnology srl"
              country="Italy"
              postalCode="35044"
              streetAddress="via Cà Megliadino, 35"
              addressLocality="Montagnana"
              addressRegion="Padova"
              email="annapessa@pessastudio.eu"
              telephoneMobile="+39 0429 805613"
            />

            <hr />
                      
            <div className="mt-2">
              <a target="_blank" href="https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027/" className={styles.social} aria-label="Facebook" rel="noopener">
                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
              </a>

              <a target="_blank" href="https://www.instagram.com/pessastudiohorsetecnology" className={styles.social} aria-label="Instagram" rel="noopener">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </Col>

          <Col md={6} lg={{ span: 4, offset: 4 }}>
            <Newsletter />
          </Col>
        </Row>
      </Section>
    </div>

    <div className="small text-center text-muted py-3">COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A. 414822</div>
  </footer>
)

export default injectIntl(Footer)
