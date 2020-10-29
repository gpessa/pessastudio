import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Columns, ContentTable, Gallery, Section, TH, Compare } from "@components"
import { Grid, Typography } from "@material-ui/core"
import { graphql } from "gatsby"

export const query = graphql`
  query GiostraTecnoexerciserGallery {
    allFile(filter: {relativeDirectory: {in: "product/giostre/tecnoexerciser/gallery"}}) {
      edges {
        node {
          name,
          relativePath
        }
      }
    }
  }
`
const Tecnoexerciser: React.FC<{ data: ImagesQuery }> = ({ data }) => {
  const { formatMessage, formatHTMLMessage, locale } = useIntl()

  const IMAGES = data.allFile.edges.map(({ node }) => ({
    caption: formatMessage({ id: `GIOSTRE__tecnoexerciser__gallery__image-${node.name}` }),
    src: require(`@images/${node.relativePath}`),
  }))


  const ATTACHMENT = [{
    label: formatMessage({ id: "GIOSTRE__manuali__manuale-quadro" }),
    file: withPrefix(`/manuale-quadro-tecnoexerciser-${locale}.pdf`),
  },{
    label: formatMessage({ id: "GIOSTRE__manuali__manuale-collegamento-elettrico" }),
    file: withPrefix(`/giostra-collegamento-elettrico.pdf`),
  },{
    label: formatMessage({ id: "GIOSTRE__manuali__istruzioni-montaggio" }),
    link: "/giostre/tecnoexerciser/istruzioni-montaggio",
  },{
    label: formatMessage({ id: "GIOSTRE__manuali__procedura-lubrificazione" }),
      file: formatMessage({ id: "GIOSTRE__manuali__procedura-lubrificazione-link" }),
  }]
  
  const DIMENSIONS = [15, 18, 20, 22, 24].map(dimension => ({
    label: formatMessage({ id: `GIOSTRE__tecnoexerciser__dimensioni-${dimension}` }),
    file: withPrefix(`/giostra-tecnoexerciser-${dimension}.pdf`),
  }))

  const PRODUCTS = [{
    image: require("@images/product/giostre/tecnoexerciser/gamma/solo-motore.jpg"),
    name: formatHTMLMessage({ id: 'GIOSTRE__name--base' }),
    description: formatHTMLMessage({ id: "GIOSTRE__description--base" }),
    features: [
      { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_tecnoexerciser__value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_tecnoexerciser_value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_tecnoexerciser_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
    ]
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-tecnofence.jpg"),
    name: formatHTMLMessage({ id: 'GIOSTRE__name--tecnofence' }),
    description: formatHTMLMessage({ id: "GIOSTRE__description--tecnofence" }),
    features: [
      { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_tecnoexerciser_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_tecnoexerciser_value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_tecnoexerciser_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__recinzione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__quadro_value" }) },
    ]
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-coperto.jpg"),
    name: formatHTMLMessage({ id: 'GIOSTRE__name--flat' }),
    description: formatHTMLMessage({ id: "GIOSTRE__description--flat" }),
    features: [
      { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_tecnoexerciser_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_tecnoexerciser_value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_tecnoexerciser_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__recinzione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__recinzione_value_pannello_marino" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__copertura" }), value: formatMessage({ id: "GIOSTRE__caratteristica__copertura_value" }) }, 
    ]
  }]

  return (
    <>
      <Columns
        left={
          <>
            <TH variant="h1">{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</TH>
            <Typography variant="body2">
              <FormattedHTMLMessage id="GIOSTRE__tecnoexerciser__descrizione" />
            </Typography>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Compare
        title={formatMessage({ id: "GENERAL__gamma" })}
        text={formatMessage({ id: "GIOSTRE__tecnoexerciser__gamma__text" })}
        products={PRODUCTS}
      />

      <Section>
        <TH variant="h4">{formatMessage({ id: "GENERAL__client-service" })}</TH>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <ContentTable rows={DIMENSIONS} title={formatMessage({ id: "GENERAL__dimensioni" })} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentTable rows={ATTACHMENT} title={formatMessage({ id: "GENERAL__manuali" })} />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}
export default Tecnoexerciser
