import { injectIntl, Link } from "gatsby-plugin-intl"
import React, { useLayoutEffect, useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { PAGES_IDS } from "@constants"
import { LanguageSelector, Logo } from "@components"

import * as styles from "./styles.module.scss"

const Navigation: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
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
    <Navbar expand="lg" sticky="top" className={`${styles.element} ${isFloating && "shadow-sm"}`} collapseOnSelect>
      <Navbar.Brand to="/" as={Link} className="mr-0">
        <Logo small={isFloating} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="menu" aria-label={formatMessage({ id: `GENERAL__toggle-button` })} />

      <Navbar.Collapse id="menu">
        <Nav className="ml-auto">
          {PAGES_IDS.map(id => (
            <Nav.Link to={`/${id}/`} as={Link} key={id} activeClassName="active" className={`${id === "contatti" && "text-muted"}`} eventKey={id}>
              {formatMessage({ id: `NAVIGATION__${id}` })}
            </Nav.Link>
          ))}
          <LanguageSelector />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default injectIntl(Navigation)
