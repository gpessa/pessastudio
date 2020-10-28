import { graphql, withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Columns, ContentTable, Gallery, Section, TH, Compare } from "@components"
import { Grid } from "@material-ui/core"

export const query = graphql`
  query GiostraIppowalkerGallery {
    allFile(filter: {relativeDirectory: {in: "product/giostre/ippowalker/gallery"}}) {
      edges {
        node {
          name
          relativePath
        }
      }
    }
  }
`

const Ippowalker: React.FC<{ data: ImagesQuery }> = ({ data }) => {
  const { formatMessage, formatHTMLMessage } = useIntl()

  const IMAGES = data.allFile.edges.map(({ node }) => ({
    caption: formatMessage({ id: `GIOSTRE__ippowalker__gallery__image-${node.name}` }),
    src: require(`@images/${node.relativePath}`),
  }))

  const DIMENSIONS = [4, 6].map(dimension => ({
    label: formatMessage({ id: `GIOSTRE__ippowalker__dimensioni-${dimension}` }),
    file: withPrefix(`/giostra-ippowalker-${dimension}.pdf`),
  }))

  const PRODUCTS = [
    {
      image: require("@images/product/giostre/ippowalker/gamma/solo-motore.jpg"),
      name: formatHTMLMessage({ id: 'GIOSTRE__name--base' }),
      description: formatHTMLMessage({ id: "GIOSTRE__description--base" }),
      features: [
        { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__quadro_value" }) },
      ]
    },
    {
      image: require("@images/product/giostre/ippowalker/gamma/con-corridoio-tecnofence.jpg"),
      name: formatHTMLMessage({ id: 'GIOSTRE__name--tecnofence' }),
      description: formatHTMLMessage({ id: "GIOSTRE__description--tecnofence" }),
      features: [
        { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__quadro_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__recinzione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__quadro_value" }) },
      ]
    },
    {
      image: require("@images/product/giostre/ippowalker/gamma/con-corridoio-flat.jpg"),
      name: formatHTMLMessage({ id: 'GIOSTRE__name--flat' }),
      description: formatHTMLMessage({ id: "GIOSTRE__description--flat" }),
      features: [
        { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__quadro_value" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__recinzione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__recinzione_value_pannello_marino" }) },
        { name: formatMessage({ id: "GIOSTRE__caratteristica__copertura" }), value: formatMessage({ id: "GIOSTRE__caratteristica__copertura_value" }) },
      ]
    },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <TH variant="h1">{formatMessage({ id: "NAVIGATION__ippowalker" })}</TH>
            <p dangerouslySetInnerHTML={{ __html: formatMessage({ id: "GIOSTRE__ippowalker__descrizione" }) }}/>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />


      <Compare
        title={formatMessage({ id: "GENERAL__gamma" })}
        text={formatMessage({ id: "GIOSTRE__ippowalker__gamma__text" })}
        products={PRODUCTS}
      />

      <Section>
        <TH variant="h4">{formatMessage({ id: "GENERAL__client-service" })}</TH>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manuali" })}
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

export default Ippowalker
