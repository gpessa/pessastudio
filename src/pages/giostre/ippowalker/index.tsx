import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Columns, ContentTable, Gallery, TH2, TH1, Product, Section, TH4 } from "@components"
import { Grid } from "@material-ui/core"
import { COLORS } from "@theme"

const Ippowalker: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const IMAGES: Picture[] = [
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-0" }),
    },
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra-separazioni.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-1" }),
    },
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra-corridoio-tecno-fence.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-2" }),
    },
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra-copertura-pvc-2.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-3" }),
    },
  ]

  const DIMENSIONS = [4, 6]

  const PRODUCTS = [
    {
      images: [{ src: require("@images/product/giostre/ippowalker/gamma/solo-motore.jpg") }],
      name: "Giostra",
      description: (
        <>
          <p>L'opzione semplice ed economica</p>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
      ),
    },
    {
      images: [{ src: require("@images/product/giostre/ippowalker/gamma/con-corridoio-tecnofence.jpg") }],
      name: "Giostra con corridoio Tecnofence",
      description: (
        <>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
      ),
    },
    {
      images: [{ src: require("@images/product/giostre/ippowalker/gamma/con-corridoio-flat.jpg") }],
      name: "Giostra con corridoio Flat",
      description: (
        <>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <TH1>{formatMessage({ id: "NAVIGATION__ippowalker" })}</TH1>
            <FormattedHTMLMessage id="GIOSTRE__ippowalker__descrizione" />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <TH2>{formatMessage({ id: "GENERAL__gamma" })}</TH2>
        <p>{formatMessage({ id: "GIOSTRE__ippowalker__gamma__text" })}</p>
        
        <Grid container spacing={5}>
          {PRODUCTS.map((product, index) => (
            <Grid item key={index} md={4}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section color={COLORS.WARM2}>
        <TH4>{formatMessage({ id: "GENERAL__client-service" })}</TH4>

        <Grid container spacing={5}>
          <Grid item md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `GIOSTRE__ippowalker__dimensioni-${dimension}` }),
                file: withPrefix(`/giostra-ippowalker-${dimension}.pdf`),
              }))}
            />
          </Grid>

          <Grid item md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manauli" })}
              rows={[{
                label: formatMessage({ id: "GIOSTRE__manuali__manuale-quadro" }),
                file: withPrefix(`/giostra-ippowalker-manuale-quadro.pdf`),
              },{
                label: formatMessage({ id: "GIOSTRE__manuali__manuale-collegamento-elettrico" }),
                file: withPrefix(`/giostra-collegamento-elettrico.pdf`),
              },{
                label: formatMessage({ id: "GIOSTRE__manuali__istruzioni-montaggio" }),
                link: withPrefix(`/giostre/ippowalker/istruzioni-montaggio`),
              }]}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default injectIntl(Ippowalker)
