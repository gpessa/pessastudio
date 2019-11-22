import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Map from '../Map';
import Newsletter from '../Newsletter';
import Section from '../Section';
import * as styles from './styles.module.scss';

const FooterAddress = () => (
  <p>
    <h5 className="mb-0">PESSASTUDIO Horse Tecnology srl</h5>
    via Cà Megliadino, 35<br />
    Montagnana (PD)<br />
    Tel: <a href="tel:+39 0429 805613" className="text-light">+39 0429 805613</a>
  </p>
)

const Footer = () => (
  <footer>
    <Map />

    <Section className={styles.primary}>
      <Row>
        <Col md={4}>
          <FooterAddress />

          <a target="_blank" href="https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027/" className={styles.social}>
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          </a>

          <a target="_blank" href="https://www.instagram.com/pessastudiohorsetecnology" className={styles.social}>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </Col>
        
        <Col md={{ span: 4, offset: 4 }}>
          <Newsletter />
        </Col>
      </Row>
    </Section>

    <div className="small text-center text-muted py-3">COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A. 414822</div>

  </footer>
)

export default Footer
