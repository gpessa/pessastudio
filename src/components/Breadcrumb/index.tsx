import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Container } from 'react-bootstrap';
import { injectIntl } from 'react-intl';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { injectTree } from '../../hoc';
import * as styles from './styles.module.scss';

const Breadcrumb = ({ fragments, intl: { formatMessage } }) =>
  fragments.length > 1 && (
    <div className={styles.element}>
      <Container aria-label="breadcrumb" as="nav">
        <ol className="breadcrumb">
          {fragments.map(({ id, url }, index) => (
            <li key={id} className="breadcrumb-item">
              <Link to={url} className={`${styles.item}`}>
                {index === 0 && <FontAwesomeIcon icon={faHome} className="mr-2" />}
                {formatMessage({ id: `NAVIGATION__${id}` })}
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  )

export default injectIntl(injectTree(Breadcrumb))
