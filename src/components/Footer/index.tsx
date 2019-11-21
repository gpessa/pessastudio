import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Container, Nav, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Map from '../Map';
import Section from "../Section";
import { LINKS } from '../Navigation';
import Newsletter from '../Newsletter';

const styles = require('./styles.scss');

const Footer = ({ pageInfo }) => (
  <footer>
    <Map />

    <Section className={styles.primary}>
      <Row>
        <Col md={6}>
          <p>
            <strong>PESSASTUDIO Horse Tecnology srl</strong><br/>
            via Cà Megliadino, 35<br/>
            Montagnana (PD)<br/>
            Tel: <a href="tel:+39 0429 805613" className="text-light">+39 0429 805613</a>
          </p>

          <Button href="#" variant="light"><FontAwesomeIcon icon={faFacebook} size="lg" /></Button>
          <Button href="#" variant="light" className="ml-3"><FontAwesomeIcon icon={faInstagram} size="lg" /></Button>

        </Col>
        <Col md={6}>
          <Newsletter />
        </Col>
      </Row>
    </Section>

    <div className="small text-center py-3">COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD- R.E.A. 414822</div>

  </footer>
)

export default Footer
