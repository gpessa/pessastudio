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
        title="Scopri il nostro tondino"
        subtitle="Caratteristiche"
        text={(
          <Typography variant="body2">
            Il tondino coperto è adatto a svolgere molteplici attività, per esempio è la migliore soluzione per addestrare puledri in libertà o lavorare cavalli alla corda, aiuta a facilitare il controllo dei vostri cavalli durante le lezioni ai principianti, nelle riprese dei pony ed è indispensabile per il longeur durante le riprese di volteggi.
          </Typography>
        )}
        benefits={[
          {
            icon: AccountBalanceIcon,
            title: "Materiali di qualità",
            description: "Costituito da pannelli laterali in compensato marino, fissati a colonne in acciaio zincato. Copertura in telo spalmato in PVC  disponibile in bianco, verde o crema.",
          },
          {
            icon: DomainDisabledIcon,
            title: "Nessuna concessione edilizia",
            description: "Le nostre giostre sono considerate strutture precarie. Non avrete quindi bisogno di nessuna concessione edilizia",
          },
          {
            icon: VisibilityIcon,
            title: "Bello e funzionale",
            description: "É una struttura semplice, leggera e piacevole alla vista.",
          },
          {
            icon: LockIcon,
            title: "Sicuro",
            description: "Ampio ingresso di 2,05 mt. dotato di catenaccio verticale che garantisce l’assoluta sicurezza."
          }
        ]}
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
