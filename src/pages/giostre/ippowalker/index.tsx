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
  ]

  const DIMENSIONS = [4, 6]

  const PRODUCTS = [
    {
      image: require("@images/product/giostre/ippowalker/gamma/solo-motore.jpg"),
      name: "Giostra",
      description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      features: [
        { name: "Diametro", value: "Da 12 mt. o 14.2 mt." },
        { name: "Numero cavalli", value: "da 4 o 6 cavalli <br/><small>(A seconda del diametro scelto)</small>" },
        { name: "Motore", value: "Potenza motore 0.37 kw e cadenza regolabile fra 60 e 210 metri al minuto" },
        { name: "Porte", value: "Porte di separazione <br/><small>(Elettrificatione inclusa 200-240 Volt monofase)</small>" },
        { name: "Quadro di controllo", value: "Quadro di comando con cui manualmente impostare la cadenza" },
      ]
    },
    {
      image: require("@images/product/giostre/ippowalker/gamma/con-corridoio-flat.jpg"),
      name: "Giostra con corridoio Flat",
      description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      features: [
        { name: "Diametro", value: "Da 12 mt. o 14.2 mt." },
        { name: "Numero cavalli", value: "da 4 o 6 cavalli <br/><small>(A seconda del diametro scelto)</small>" },
        { name: "Motore", value: "Potenza motore 0.37 kw e cadenza regolabile fra 60 e 210 metri al minuto" },
        { name: "Porte", value: "Porte di separazione <br/><small>(Elettrificatione inclusa 200-240 Volt monofase)</small>" },
        { name: "Quadro di controllo", value: "Quadro di comando con cui manualmente impostare la cadenza" },
        { name: "Recinzione", value: "Corridoio composto da recinzione TECNOFENCE in PVC <small>(2 o 4 filagne)</small>" },
      ]
    },
    {
      image: require("@images/product/giostre/ippowalker/gamma/con-corridoio-tecnofence.jpg"),
      name: "Giostra con corridoio Tecnofence",
      description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      features: [
        { name: "Diametro", value: "Da 12 mt. o 14.2 mt." },
        { name: "Numero cavalli", value: "da 4 o 6 cavalli <br/><small>(A seconda del diametro scelto)</small>" },
        { name: "Motore", value: "Potenza motore 0.37 kw e cadenza regolabile fra 60 e 210 metri al minuto" },
        { name: "Porte", value: "Porte di separazione <br/><small>(Elettrificatione inclusa 200-240 Volt monofase)</small>" },
        { name: "Quadro di controllo", value: "Quadro di comando con cui manualmente impostare la cadenza" },
        { name: "Recinzione", value: "Corridoio composto da pannelli laterali in compensato marino" },
        { name: "Copertura", value: "Copertura in PVC crema o verde <br/><small>(Portata di 80 kg mq. In presenza di nevicate che superino la portata consentita, è opportuno intervenire rimuovendo l’eccesso di neve)</small>" },
      ]
    }
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

      <Section color={COLORS.WARM2}>
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
