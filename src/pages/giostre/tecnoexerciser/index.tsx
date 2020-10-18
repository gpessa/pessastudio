import { withPrefix } from "gatsby"
import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import { IntlFormatters } from "react-intl"
import React from "react"
import { COLORS } from "@theme"
import { Columns, ContentTable, Gallery, TH4, TH1, Product, Section } from "@components"
import { Grid } from "@material-ui/core"

const Tecnoexerciser: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const IMAGES: Picture[] = [
    {
      src: require("@images/product/giostre/tecnoexerciser/galleria/giostra.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-0" }),
    },
    {
      src: require("@images/product/giostre/tecnoexerciser/galleria/motore.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-1" }),
    },
    {
      src: require("@images/product/giostre/tecnoexerciser/galleria/separazione-1.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-2" }),
    },
    {
      src: require("@images/product/giostre/tecnoexerciser/galleria/separazione-2.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-3" }),
    },
    {
      src: require("@images/product/giostre/tecnoexerciser/galleria/interno.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-4" }),
    },
  ]

  const DIMENSIONS = [15, 18, 20, 22, 24]

  const PRODUCTS = [
    {
      images: [{ src: require("@images/product/giostre/tecnoexerciser/gamma/solo-motore.jpg") }],
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
      images: [{ src: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-coperto.jpg") }],
      name: "Giostra con corridoio Coperto",
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
      images: [{ src: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-tecnofence.jpg") }],
      name: "Giostra con corridoio tecnofence",
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
            <TH1>{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</TH1>
            <FormattedHTMLMessage id="GIOSTRE__tecnoexerciser__descrizione" />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <TH4>{formatMessage({ id: "GENERAL__gamma" })}</TH4>
        <p>{formatMessage({ id: "GIOSTRE__tecnoexerciser__gamma__text" })}</p>

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
                label: formatMessage({ id: `GIOSTRE__tecnoexerciser__dimensioni-${dimension}` }),
                file: withPrefix(`/giostra-tecnoexerciser-${dimension}.pdf`),
              }))}
            />
          </Grid>

          <Grid item md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manauli" })}
              rows={[
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-quadro" }),
                  file: withPrefix(`/giostra-tecnoexerciser-manuale-quadro.pdf`),
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-collegamento-elettrico" }),
                  file: withPrefix(`/giostra-collegamento-elettrico.pdf`),
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__istruzioni-montaggio" }),
                  link: "/giostre/tecnoexerciser/istruzioni-montaggio",
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__procedura-lubrificazione" }),
                  file: "https://www.youtube.com/watch?v=QMA4wPxq_ow",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}
export default injectIntl(Tecnoexerciser)
