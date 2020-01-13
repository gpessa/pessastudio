import { injectIntl, Link, FormattedHTMLMessage, FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { IntlFormatters } from 'react-intl';

import { Columns, Header, Hero, Section } from '../../components';

const Giostre: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <>
    <Hero image={require("../../images/background-giostre.jpg")} />

    <Section className="bg-light">
      <h1>{formatMessage({ id: "NAVIGATION__giostre" })}</h1>
      <FormattedHTMLMessage id="GIOSTRE__text" />
    </Section>

    <Section fluid className="pb-0">
      <Container className="mb-4">
        <Header>{formatMessage({ id: "GENERAL__gamma" })}</Header>
        <FormattedMessage
          id="GIOSTRE__gamma__text"
          values={{
            linktecnoexerciser: () => (
              <Link to="/giostre/tecnoexerciser">
                <strong>{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</strong>
              </Link>
            ),
            linkippowalker: () => (
              <Link to="/giostre/ippowalker">
                <strong>{formatMessage({ id: "NAVIGATION__ippowalker" })}</strong>
              </Link>
            ),
          }}
        />
      </Container>

      <Columns
        left={
          <div className="text-center py-5">
            <h3>{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</h3>
            <Button as={Link} to="/giostre/tecnoexerciser" variant="light" size="lg">
              {formatMessage({ id: "GIOSTRE_discover-more" })}
            </Button>
          </div>
        }
        right={
          <div className="text-center py-5">
            <h3>{formatMessage({ id: "NAVIGATION__ippowalker" })}</h3>
            <Button as={Link} to="/giostre/ippowalker" variant="primary" size="lg">
              {formatMessage({ id: "GIOSTRE_discover-more" })}
            </Button>
          </div>
        }
      />
    </Section>
  </>
)

export default injectIntl(Giostre)
