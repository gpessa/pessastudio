import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Columns, ContentTable, Gallery, Section, Hero, TH4 } from "@components"
import { Grid, Typography } from "@material-ui/core"
import { COLORS } from "@theme"

const Tondini: React.FC = () => {
  const { formatMessage } = useIntl()
  const DIMENSIONS = [16, 18, 20, 22, 24]

  const IMAGES: Picture[] = [
    { caption: formatMessage({ id: `TONDINO__gallery__image-0` }), src: require("@images/product/tondini/tondino-0.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-1` }), src: require("@images/product/tondini/tondino-1.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-2` }), src: require("@images/product/tondini/tondino-2.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-3` }), src: require("@images/product/tondini/tondino-3.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-4` }), src: require("@images/product/tondini/tondino-4.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-5` }), src: require("@images/product/tondini/tondino-5.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-6` }), src: require("@images/product/tondini/tondino-6.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-7` }), src: require("@images/product/tondini/tondino-7.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-8` }), src: require("@images/product/tondini/tondino-8.jpg") },
  ]

  return (
    <>
      <Hero image={require("@images/background-tondini.jpg")} text={formatMessage({ id: "NAVIGATION__tondini" })}/>
      
      <Columns 
        left={(
          <Typography variant="body1">
            <FormattedHTMLMessage id="OSTACOLI__tondini__text" />
          </Typography>
        )}
        right={<Gallery images={IMAGES} />}
      />

      <Section color={COLORS.WARM2}>
        <TH4>{formatMessage({ id: "GENERAL__client-service" })}</TH4>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `TONDINO__dimensioni-${dimension}` }),
                file: withPrefix(`/tondino-${dimension}.pdf`),
              }))}
            />
          </Grid>
          <Grid item md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manauli" })}
              rows={[
                {
                  label: formatMessage({ id: "TONDINI__manuali__preparare-il-fondo" }),
                  link: "/tondini/come-preparare-il-fondo",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default Tondini
