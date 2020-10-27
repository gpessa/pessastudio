import { Link as LinkGatsby, FormattedMessage, useIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"

import AppsIcon from '@material-ui/icons/Apps';
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { Columns, Hero, Section, TH, Benefits, Gallery } from "@components"
import { Box, Button, Container, Link, makeStyles, Typography } from "@material-ui/core"
import { BREAKPOINT, COLORS, SECTION_SPACING } from "@theme";
import { graphql } from "gatsby";
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

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
  const { formatHTMLMessage, formatMessage } = useIntl()
  const classes = useStyles()

  const IMAGES = data.allFile.edges.map(({ node }, index) => ({
    caption: formatMessage({ id: `GIOSTRE__gallery__image-${index}` }),
    src: require(`@images/${node.relativePath}`),
  }))

  const BENEFITS = [
    {
      icon: AccessibilityNewIcon,
      title: formatMessage({ id: "GIOSTRE__benefit--1__title" }),
      description: formatMessage({ id: "GIOSTRE__benefit--1__text" }),
    },
    {
      icon: AppsIcon,
      title: formatMessage({ id: "GIOSTRE__benefit--2__title" }),
      description: formatMessage({ id: "GIOSTRE__benefit--2__text" }),
    },
    {
      icon: DomainDisabledIcon,
      title: formatMessage({ id: "GIOSTRE__benefit--3__title" }),
      description: formatMessage({ id: "GIOSTRE__benefit--3__text" }),
    },
    {
      icon: VideogameAssetIcon,
      title: formatMessage({ id: "GIOSTRE__benefit--4__title" }),
      description: formatMessage({ id: "GIOSTRE__benefit--4__text" }),
    }
  ]

  return (
    <>
      <Hero
        image={require("@images/background-giostre.jpg")}
        text={formatMessage({ id: "NAVIGATION__giostre" })}
      />

      <Benefits
        title={formatMessage({ id: "GIOSTRE__benefits__title" })}
        subtitle={formatMessage({ id: "GIOSTRE__benefits__subtitle" })}
        text={<p>{formatHTMLMessage({ id: "GIOSTRE__benefits__text" })}</p>}
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
