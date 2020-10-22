import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { COLORS } from "@theme"
import { Columns, ContentTable, Gallery, TH1, Section, TH4, Compare } from "@components"
import { Grid } from "@material-ui/core"

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
      src: require("@images/product/giostre/tecnoexerciser/galleria/separazione-2.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-3" }),
    },{
      src: require("@images/product/giostre/tecnoexerciser/galleria/interno.jpg"),
      caption: formatMessage({ id: "GIOSTRE__tecnoexerciser__image-4" }),
    }, {
      src: require("@images/product/giostre/tecnoexerciser/galleria/porte.jpg"),
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
    name: "Giostra base",
    description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    features: [
      { name: "Diametro", value: "Da 12 mt. o 14.2 mt."},
      { name: "Numero cavalli", value: "da 4 o 6 cavalli <br/><small>(A seconda del diametro scelto)</small>"},
      { name: "Motore", value: "Potenza motore 0.37 kw e cadenza regolabile fra 60 e 210 metri al minuto" },
      { name: "Irrigazione", value: "Irrigazione del percorso controllabile dal quadro di comando" },
      { name: "Porte", value: "Porte di separazione <br/><small>(Elettrificatione inclusa 200-240 Volt monofase)</small>" },
      { name: "Quadro di controllo", value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
    ]
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-tecnofence.jpg"),
    name: "Giostra con corridoio tecnofence",
    description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    features: [
      { name: "Diametro", value: "Da 12 mt. o 14.2 mt." },
      { name: "Numero cavalli", value: "da 4 o 6 cavalli <br/><small>(A seconda del diametro scelto)</small>"},
      { name: "Motore", value: "Potenza motore 0.37 kw e cadenza regolabile fra 60 e 210 metri al minuto" },
      { name: "Irrigazione", value: "Irrigazione del percorso controllabile dal quadro di comando" },
      { name: "Porte", value: "Porte di separazione <br/><small>(Elettrificatione inclusa 200-240 Volt monofase)</small>" },
      { name: "Quadro di controllo", value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
      { name: "Recinzione", value: "Corridoio composto da recinzione TECNOFENCE in PVC <small>(2 o 4 filagne)</small>" },
    ]
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/gamma/con-corridoio-coperto.jpg"),
    name: "Giostra con corridoio Coperto",
    description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    features: [
      { name: "Diametro", value: "Da 12 mt. o 14.2 mt." },
      { name: "Numero cavalli", value: "da 4 o 6 cavalli <br/><small>(A seconda del diametro scelto)</small>"},
      { name: "Motore", value: "Potenza motore 0.37 kw e cadenza regolabile fra 60 e 210 metri al minuto" },
      { name: "Irrigazione", value: "Irrigazione del percorso controllabile dal quadro di comando" },
      { name: "Porte", value: "Porte di separazione <br/><small>(Elettrificatione inclusa 200-240 Volt monofase)</small>" },
      { name: "Quadro di controllo", value: "Controllo manuale della cadenza o accesso ai \"training programs\" automatici che vi consentiranno di allenare i vostri cavalli fino ad ottenere performance atletiche." },
      { name: "Recinzione", value: "Corridoio composto da pannelli laterali in compensato marino" },
      { name: "Copertura", value: "Copertura in PVC crema o verde <br/><small>(Portata di 80 kg mq. In presenza di nevicate che superino la portata consentita, è opportuno intervenire rimuovendo l’eccesso di neve)</small>" }, 
    ]
  }]

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

      <Compare
        title={formatMessage({ id: "GENERAL__gamma" })}
        text={formatMessage({ id: "GIOSTRE__tecnoexerciser__gamma__text" })}
        products={PRODUCTS}
      />

      <Section color={COLORS.WARM2}>
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
