import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import * as styles from './styles.module.scss';

const logo = require("../../images/logo.jpg");

const LINKS = [
  { id: "ostacoli", label: "Ostacoli" },
  { id: "recinti-e-fondi", label: "Recinti e fondi" },
  { id: "tondini", label: "Tondini" },
  { id: "giostre", label: "Giostre" },
  { id: "dressage", label: "Dressage" },
]

const Navigation = ({ }) => {
  return (
    <Navbar expand="lg" sticky="top" className={styles.element}>
      <Navbar.Brand to="/" as={Link}>
        <img src={logo} alt="Pessa Studio" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {LINKS.map(({ id, label }) => <Nav.Link to={`/${id}`} as={Link} key={label}>{label}</Nav.Link>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation

export { LINKS };