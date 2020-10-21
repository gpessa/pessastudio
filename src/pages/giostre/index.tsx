import { Link as LinkGatsby, FormattedMessage, useIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"

import AppsIcon from '@material-ui/icons/Apps';
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import { Columns, TH2, Hero, Section, TH4, Benefits } from "@components"
import { Box, Button, Container, Link, makeStyles, Typography } from "@material-ui/core"
import { COLORS } from "@theme";

const useStyles = makeStyles(_ => ({
  gamma: {
    textAlign: 'center'
  },
  video: {
    background: `linear-gradient(to bottom, 
        rgba(0,0,0, 0) 100px,
        ${COLORS.WARM1} 100px, 
        ${COLORS.WARM1} calc(100% - 100px), 
        rgba(0,0,0, 0) calc(100% - 100px)
      )`,
  }
}))

const Giostre: React.FC = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()

  const BENEFITS = [
    {
      icon: PersonPinCircleIcon,
      title: "3.000 giostre installate",
      description: "Piu' di 3.000 clienti europei hanno scelto PessaStudio per la loro giostra"
    },
    {
      icon: DomainDisabledIcon,
      title: "Nessuna concessione edilizia",
      description: "Le nostre giostre sono considerate strutture precarie. Non avrete quindi bisogno di nessuna concessione edilizia"
    },
    {
      icon: AppsIcon,
      title: "Ampia gamma",
      description: "E' possibile aquistare le nostre giostre in diverse versioni"
    }
  ]

  return (
    <>
      <Hero
        image={require("@images/background-giostre.jpg")}
        text={formatMessage({ id: "NAVIGATION__giostre" })}
      />
      
      <Benefits
        title={formatMessage({ id: "BENEFITS__title" })}
        subtitle={formatMessage({ id: "BENEFITS__subtitle" })}
        text={
          <Typography variant="body1">
            <FormattedHTMLMessage id="GIOSTRE__text" />
          </Typography>
        }
        benefits={BENEFITS}
      />

      <section className={classes.video}>
        <Container>
          <video width="100%" controls>
            <source src={require("@images/product/giostre/video.mp4")} type="video/mp4" />
          </video>
        </Container>
      </section>

      <Section className={classes.gamma} maxWidth="md">
        <TH2>{formatMessage({ id: "GENERAL__gamma" })}</TH2>
        <FormattedMessage
          id="GIOSTRE__gamma__text"
          values={{
            linktecnoexerciser: () => (
              <Link component={LinkGatsby} to="/giostre/tecnoexerciser">
                {formatMessage({ id: "NAVIGATION__tecnoexerciser" })}
              </Link>
            ),
            linkippowalker: () => (
              <Link component={LinkGatsby} to="/giostre/ippowalker">
                {formatMessage({ id: "NAVIGATION__ippowalker" })}
              </Link>
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
