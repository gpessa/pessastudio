import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Columns, ContentTable, Gallery, TH1, Section, TH4, Compare } from "@components"
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
    {
      src: require("@images/product/giostre/ippowalker/galleria/porte.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-4" }),
    },
  ]

  const DIMENSIONS = [4, 6]

  const PRODUCTS = [
    {
      image: require("@images/product/giostre/ippowalker/gamma/solo-motore.jpg"),
      name: "Giostra <br />Base",
      description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
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
      name: "Giostra<br />corridoio Tecnofence",
      description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
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
      name: "Giostra coperta<br />con corridoio Flat",
      description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
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
            <TH1>{formatMessage({ id: "NAVIGATION__ippowalker" })}</TH1>
            <FormattedHTMLMessage id="GIOSTRE__ippowalker__descrizione" />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      {/* <Section maxWidth={false}>
        <Container>
          <TH2>{'Caratteristiche'}</TH2>
        </Container>
        <SubSection>
          <Box mb={10}>
            <Title
              title={"Motore"}
              subtitle={'Caratteristiche'}
              text={"Il motore offre una potenza di 0.37 kw e permette una cadenza compresa fra 60 e 210 metri al minuto"}
            />
          </Box>
          
          <Box>
            <Title
              title={"Pareti di separazione"}
              subtitle={'Caratteristiche'}
              text={"Robuste pareti permettono di operari diversi cavalli in sicurezza."}
            />
          </Box>
        </SubSection>
      </Section> */}


      <Compare
        title={formatMessage({ id: "GENERAL__gamma" })}
        text={formatMessage({ id: "GIOSTRE__ippowalker__gamma__text" })}
        products={PRODUCTS}
      />

      <Section>
        <TH4>{formatMessage({ id: "GENERAL__client-service" })}</TH4>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `GIOSTRE__ippowalker__dimensioni-${dimension}` }),
                file: withPrefix(`/giostra-ippowalker-${dimension}.pdf`),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6}>
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
