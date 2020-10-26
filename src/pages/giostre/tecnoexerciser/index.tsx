import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Columns, ContentTable, Gallery, TH1, Section, TH4, Compare } from "@components"
import { Grid, Typography } from "@material-ui/core"

const Tecnoexerciser: React.FC = () => {
  const { formatMessage } = useIntl()

  const IMAGES: Picture[] = [{
      src: require("@images/product/giostre/tecnoexerciser/galleria/giostra.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-0" }),
    },{
      src: require("@images/product/giostre/tecnoexerciser/galleria/motore.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-1" }),
    },{
      src: require("@images/product/giostre/tecnoexerciser/galleria/separazione-1.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-2" }),
    },{
      src: require("@images/product/giostre/tecnoexerciser/galleria/interno.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-3" }),
    }, {
      src: require("@images/product/giostre/tecnoexerciser/galleria/porte.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-4" }),
    }, {
      src: require("@images/product/giostre/tecnoexerciser/galleria/tecnofence-1.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-5" }),
    }, {
      src: require("@images/product/giostre/tecnoexerciser/galleria/tecnofence-2.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-5" }),
    }]

  const ATTACHMENT = [{
      label: formatMessage({ id: "GIOSTRE__manuali__manuale-quadro" }),
      file: withPrefix(`/giostra-tecnoexerciser-manuale-quadro.pdf`),
    },{
      label: formatMessage({ id: "GIOSTRE__manuali__manuale-collegamento-elettrico" }),
      file: withPrefix(`/giostra-collegamento-elettrico.pdf`),
    },{
      label: formatMessage({ id: "GIOSTRE__manuali__istruzioni-montaggio" }),
      link: "/giostre/tecnoexerciser/istruzioni-montaggio",
    },{
      label: formatMessage({ id: "GIOSTRE__manuali__procedura-lubrificazione" }),
      file: "https://www.youtube.com/watch?v=QMA4wPxq_ow",
  }]
  
  const DIMENSIONS = [15, 18, 20, 22, 24].map(dimension => ({
    label: formatMessage({ id: `GIOSTRE__tecnoexerciser__dimensioni-${dimension}` }),
    file: withPrefix(`/giostra-tecnoexerciser-${dimension}.pdf`),
  }))

  const PRODUCTS = [{
    image: require("@images/product/giostre/tecnoexerciser/gamma/solo-motore.jpg"),
    name: "Giostra <br />base",
    description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    features: [
      { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
    ]
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-tecnofence.jpg"),
    name: "Giostra <br />corridoio tecnofence",
    description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    features: [
      { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__irrigazione_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__porte" }), value: formatMessage({ id: "GIOSTRE__caratteristica__porte_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__quadro" }), value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__recinzione" }), value: formatMessage({ id: "GIOSTRE__caratteristica__quadro_value" }) },
    ]
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-coperto.jpg"),
    name: "Giostra coperta<br />con corridoio Flat",
    description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    features: [
      { name: formatMessage({ id: "GIOSTRE__caratteristica__diametro" }), value: formatMessage({ id: "GIOSTRE__caratteristica__diametro_value" }) },
      { name: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli" }), value: formatMessage({ id: "GIOSTRE__caratteristica__numero_cavalli_value" })},
      { name: formatMessage({ id: "GIOSTRE__caratteristica__motore" }), value: formatMessage({ id: "GIOSTRE__caratteristica__motore_value" }) },
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
            <TH1>{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</TH1>
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
        <TH4>{formatMessage({ id: "GENERAL__client-service" })}</TH4>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <ContentTable rows={DIMENSIONS} title={formatMessage({ id: "GENERAL__dimensioni" })} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentTable rows={ATTACHMENT} title={formatMessage({ id: "GENERAL__manauli" })} />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}
export default Tecnoexerciser
