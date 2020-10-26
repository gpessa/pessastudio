import { Link as LinkGatsby, FormattedMessage, useIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"

import AppsIcon from '@material-ui/icons/Apps';
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { Columns, Hero, Section, TH, Benefits, Gallery } from "@components"
import { Box, Button, Container, Link, makeStyles, Typography } from "@material-ui/core"
import { BREAKPOINT, COLORS, SECTION_SPACING } from "@theme";
import { graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  gamma: {
    textAlign: 'center'
  },
  video: {
    zIndex: 1,
    position: 'relative',
    background: `linear-gradient(to bottom, 
        rgba(0,0,0, 0) 100px,
        ${COLORS.WARM1} 100px, 
        ${COLORS.WARM1} calc(100% - 100px), 
        rgba(0,0,0, 0) calc(100% - 100px)
      )`,
  },
  gallery: {
    marginBottom: -SECTION_SPACING('xs')('medium'),
    paddingBottom: 2 * SECTION_SPACING('xs')('medium'),
    backgroundColor: theme.palette.primary.main,
    '& figcaption': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.up(BREAKPOINT)]: {
      marginBottom: -SECTION_SPACING('md')('medium'),
      paddingBottom: 2 * SECTION_SPACING('md')('medium'),
    }
  }
}))

export const query = graphql`
  query GiostreGallery {
    allFile(filter: {relativeDirectory: {in: "product/giostre/gallery"}}) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

const Giostre: React.FC<{
  data: ImagesQuery
}> = ({ data }) => {
  const { formatMessage } = useIntl()
  const classes = useStyles()

  const IMAGES = data.allFile.edges.map(({ node }, index) => ({
    caption: formatMessage({ id: `GIOSTRE__gallery__image-${index}` }),
    src: require(`@images/${node.relativePath}`),
  }))

  const BENEFITS = [
    {
      icon: AccessibilityNewIcon,
      title: "3.000 giostre installate",
      description: "Piu' di 3.000 clienti europei hanno scelto PessaStudio per la loro giostra"
    },
    {
      icon: AppsIcon,
      title: "Ampia gamma",
      description: "E' possibile aquistare le nostre giostre in diverse versioni adatte al tuo budget e alle tue esigenze"
    },
    {
      icon: DomainDisabledIcon,
      title: "Nessuna concessione edilizia",
      description: "Le nostre giostre sono considerate strutture precarie. Non avrete quindi bisogno di nessuna concessione edilizia"
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
        text={<FormattedHTMLMessage id="GIOSTRE__text" />}
        benefits={BENEFITS}
      />


      <Section className={classes.gallery}>
        <Gallery images={IMAGES} md={3} />
      </Section>

      <section className={classes.video}>
        <Container>
          <video width="100%" controls>
            <source src={require("@images/product/giostre/video.mp4")} type="video/mp4" />
          </video>
        </Container>
      </section>

      <Section className={classes.gamma} maxWidth="md">
        <TH variant="h2">{formatMessage({ id: "GENERAL__gamma" })}</TH>
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
            <TH variant="h4">{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</TH>
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
            <TH variant="h4">{formatMessage({ id: "NAVIGATION__ippowalker" })}</TH>
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
