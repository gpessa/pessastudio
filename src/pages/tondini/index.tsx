import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Columns, ContentTable, Gallery, Section, Hero, TH, Benefits } from "@components"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { COLORS, PRODUCT_GUTTER } from "@theme"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';
import LockIcon from '@material-ui/icons/Lock';
import { graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  gallery: {
    backgroundColor: theme.palette.primary.main,
    '& figcaption': {
      color: theme.palette.common.white,
    }
  }
}))

export const query = graphql`
  query TondiniGallery {
    allFile(filter: {relativeDirectory: {in: "product/tondini/gallery"}}) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

const Tondini: React.FC<{
  data: ImagesQuery
}> = ({ data }) => {
  const { formatMessage } = useIntl()
  const classes = useStyles()

  const DIMENSIONS = [16, 18, 20, 22, 24].map(dimension => ({
    label: formatMessage({ id: `TONDINO__dimensioni-${dimension}` }),
    file: withPrefix(`/tondino-${dimension}.pdf`),
  }))

  const MANUALS = [{
    label: formatMessage({ id: "TONDINI__manuali__preparare-il-fondo" }),
    link: "/tondini/come-preparare-il-fondo"
  }]

  const IMAGES = data.allFile.edges.map(({ node }, index) => ({
    caption: formatMessage({ id: `TONDINO__gallery__image-${index}` }),
    src: require(`@images/${node.relativePath}`),
  }))

  return (
    <>
      <Hero image={require("@images/background-tondini.jpg")} text={formatMessage({ id: "NAVIGATION__tondini" })}/>

      <Benefits
        title={formatMessage({ id: "TONDINI__benefit__title" })}
        subtitle={formatMessage({ id: "TONDINI__benefit__subtitle" })}
        text={(
          <Typography
            variant="body1"
            id="TONDINI__benefit__text"
            component={FormattedHTMLMessage}
          />
        )}
        benefits={[{
          icon: AccountBalanceIcon,
          title: formatMessage({ id: "TONDINI__benefit--1__title" }),
          description: formatMessage({ id: "TONDINI__benefit--1__text" }),
        }, {
          icon: DomainDisabledIcon,
          title: formatMessage({ id: "TONDINI__benefit--1__title" }),
          description: formatMessage({ id: "TONDINI__benefit--1__text" }),
        }, {
          icon: VisibilityIcon,
          title: formatMessage({ id: "TONDINI__benefit--3__title" }),
          description: formatMessage({ id: "TONDINI__benefit--3__text" }),
        }, {
          icon: LockIcon,
          title: formatMessage({ id: "TONDINI__benefit--4__title" }),
          description: formatMessage({ id: "TONDINI__benefit--4__text" }),
        }]}
      />

      <Section className={classes.gallery}>
        <Gallery images={IMAGES} md={3}/>
      </Section>

      <Section color={COLORS.WARM2}>
        <TH variant="h4">{formatMessage({ id: "GENERAL__client-service" })}</TH>
        <Grid container spacing={PRODUCT_GUTTER}>
          <Grid item xs={12} md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manuali" })}
              rows={MANUALS}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default Tondini
