import { Link } from "gatsby-plugin-intl"
import React from "react"
import { Breadcrumb as BootstrapBreadcrumb, Container } from "react-bootstrap"
import { injectIntl } from "react-intl"

import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { injectTree } from "../../hoc"
import * as styles from "./styles.module.scss"

const Breadcrumb = ({ fragments, intl: { formatMessage } }) =>
  fragments.length > 1 && (
    <BootstrapBreadcrumb>
      <Container>
        {fragments.reverse().map(({ id, url }, index) => (
          <Link key={id} to={url} className={`breadcrumb-item ${styles.item}`}>
            {index === 0 && <FontAwesomeIcon icon={faHome} className="mr-2" />}
            {formatMessage({ id: `NAVIGATION_${id}` })}
          </Link>
        ))}
      </Container>
    </BootstrapBreadcrumb>
  )

export default injectIntl(injectTree(Breadcrumb))
