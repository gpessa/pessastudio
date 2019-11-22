import { injectIntl, Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { PRODUCT_IDS } from '../../constants';
import LanguageSelector from '../LanguageSelector';
import * as styles from './styles.module.scss';

const logo = require("../../images/logo.jpg");

const Navigation = ({ intl: { formatMessage } }) => (
  <Navbar expand="lg" sticky="top" className={styles.element}>
    <Navbar.Brand to="/" as={Link}>
      <img src={logo} alt="Pessa Studio" />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />


    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {PRODUCT_IDS.map(id => <Nav.Link to={`/${id}`} as={Link} key={id}>{formatMessage({ id: `NAVIGATION_${id}` })}</Nav.Link>)}
        <LanguageSelector />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default injectIntl(Navigation)