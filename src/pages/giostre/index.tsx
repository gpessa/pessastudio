import { Link as LinkGatsby, FormattedHTMLMessage, FormattedMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Columns, TH2, Hero, Section, TH4 } from "@components"
import { Box, Button, Link, makeStyles, Typography } from "@material-ui/core"
import Numeri from "./_numeri"

const useStyles = makeStyles(_ => ({
  gamma: {
    textAlign: 'center'
  }
}))

const Giostre: React.FC = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()

  return (
    <>
      <Hero
        image={require("@images/background-giostre.jpg")}
        text={formatMessage({ id: "NAVIGATION__giostre" })}
      />

      <Section className={classes.gamma} maxWidth="md">
        <Typography variant="body1">
          <FormattedHTMLMessage id="GIOSTRE__text" />
        </Typography>
      </Section>

      <Numeri />

      <Section className={classes.gamma} maxWidth="md">
        <TH2>{formatMessage({ id: "GENERAL__gamma" })}</TH2>
        <FormattedMessage
          id="GIOSTRE__gamma__text"
          values={{
            linktecnoexerciser: () => (
              <Link
                component={LinkGatsby}
                to="/giostre/tecnoexerciser"
              >{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</Link>
            ),
            linkippowalker: () => (
              <Link
                component={LinkGatsby}
                to="/giostre/ippowalker"
              >{formatMessage({ id: "NAVIGATION__ippowalker" })}</Link>
            ),
          }}
        />
      </Section>

      <Columns
        left={
          <Box textAlign="center">
            <TH4>{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</TH4>
            <Button
              component={LinkGatsby}
              to="/giostre/tecnoexerciser"
              color="default"
              size="large"
            >
              {formatMessage({ id: "GIOSTRE_discover-more" })}
            </Button>
          </Box>
        }
        right={
          <Box textAlign="center">
            <TH4>{formatMessage({ id: "NAVIGATION__ippowalker" })}</TH4>
            <Button
              component={LinkGatsby}
              to="/giostre/ippowalker"
              color="primary"
              size="large"
            >
              {formatMessage({ id: "GIOSTRE_discover-more" })}
            </Button>
          </Box>
        }
      />
    </>
  )
}

export default Giostre
