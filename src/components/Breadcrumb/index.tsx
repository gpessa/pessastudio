import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Container, Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap';
import { injectIntl } from 'react-intl';

import { Location } from '@reach/router';
import * as styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = ({ intl: { formatMessage } }) => (
    <Location>
      {({location : { pathname }}) => {
        const fragments = pathname.split('/').filter(f => ["", "/"].indexOf(f) === -1).slice(1);
        let url = "";

      return fragments.length > 0 ? (
          <BootstrapBreadcrumb>
            <Container>
              <Link to={'/'} className={`breadcrumb-item ${styles.item}`}>
                <FontAwesomeIcon icon={faHome} className="mr-2"/>
                {formatMessage({ id: `NAVIGATION_home` })}
              </Link>
              {fragments.map(fragment => {
                url = `${url}/${fragment}/`;
                return <Link key={url} to={url} className={`breadcrumb-item ${styles.item}`}>{formatMessage({
                  id: `NAVIGATION_${fragment}`
                })}</Link>
              })}
            </Container>
          </BootstrapBreadcrumb>
        ) : null
      }}
    </Location>
)

export default injectIntl(Breadcrumb)



