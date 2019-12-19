import { injectIntl, Link } from "gatsby-plugin-intl"
import React, { useState, useLayoutEffect } from "react"
import { Nav, Navbar } from "react-bootstrap"

import { PAGES_IDS } from "../../constants"
import LanguageSelector from "../LanguageSelector"
import Logo from "../Logo"
import * as styles from "./styles.module.scss"

const Navigation = ({ intl: { formatMessage } }) => {
  const [isFloating, setIsFloating] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 1) return setIsFloating(true)
    setIsFloating(false)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Navbar expand="lg" sticky="top" className={`${styles.element} ${isFloating && "shadow-sm"}`}>
      <Navbar.Brand to="/" as={Link} className="mr-0">
        <Logo small={isFloating} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="menu" aria-label={formatMessage({ id: `NAVIGATION_toggle-button` })} />

      <Navbar.Collapse id="menu">
        <Nav className="ml-auto">
          {PAGES_IDS.map(id => (
            <Nav.Link to={`/${id}/`} as={Link} key={id} activeClassName="active" className={`${(id === 'contatti') && "text-muted"}`}>
              {formatMessage({ id: `NAVIGATION_${id}` })}
            </Nav.Link>
          ))}
          <LanguageSelector />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default injectIntl(Navigation)
