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
    <div className={styles.element}>
      <Container>
        <BootstrapBreadcrumb>
          {fragments.reverse().map(({ id, url }, index) => (
            <BootstrapBreadcrumb.Item>
              <Link key={id} to={url} className={`${styles.item}`}>
                {index === 0 && <FontAwesomeIcon icon={faHome} className="mr-2" />}
                {formatMessage({ id: `NAVIGATION_${id}` })}
              </Link>
            </BootstrapBreadcrumb.Item>
          ))}
        </BootstrapBreadcrumb>
      </Container>
    </div>
  )

export default injectIntl(injectTree(Breadcrumb))
