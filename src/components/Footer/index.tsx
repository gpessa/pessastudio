import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Map from '../Map';
import Newsletter from '../Newsletter';
import Section from '../Section';
import * as styles from './styles.module.scss';

const Footer = ({ }) => (
  <footer>
    <Map />

    <Section className={styles.primary}>
      <Row>
        <Col md={4}>
          <p>
            <strong>PESSASTUDIO Horse Tecnology srl</strong><br/>
            via Cà Megliadino, 35<br/>
            Montagnana (PD)<br/>
            Tel: <a href="tel:+39 0429 805613" className="text-light">+39 0429 805613</a>
          </p>

          <Button href="#" variant="light"><FontAwesomeIcon icon={faFacebook} size="lg" /></Button>
          <Button href="#" variant="light" className="ml-3"><FontAwesomeIcon icon={faInstagram} size="lg" /></Button>

        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Newsletter />
        </Col>
      </Row>
    </Section>

    <div className="small text-center py-3">COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD- R.E.A. 414822</div>

  </footer>
)

export default Footer
