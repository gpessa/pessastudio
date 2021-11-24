import { t, Trans } from "@lingui/macro"
import { AccountBalance, Apps, Architecture, Restore, TurnedInNot } from "@mui/icons-material"
import { Benefits, Hero, Products, Testimonials } from "components"
import React from "react"

const Index: React.FC = () => {
  const TESTIMONIALS = [
    t`Ho ricevuto questa mattina il materiale. I miei complimenti per la qualità dei prodotti, l'imballo ed il trasportatore`,
    t`Ringrazio tutto il team per la professionalità, gentilezza, velocità e sopratutto per l'ottimo risultato`,
    t`Splendido niente da dire! Il tondino è ben pensato e ingegnoso. Molto bene!`,
    t`Gli ostacoli sono arrivati. Sono fantastici!`,
  ]

  const BENEFITS = [
    {
      icon: TurnedInNot,
      title: <Trans>Innovativi</Trans>,
      description: <Trans>Innovazione tecnologica e qualità sono le caratteristiche chiave dei nostri prodotti</Trans>,
    },
    {
      icon: Architecture,
      title: <Trans>Personalizzabili</Trans>,
      description: (
        <Trans>Prodotti MADE IN ITALY, costruiti da Pessastudio e personalizzabili (in dimensioni o colori)</Trans>
      ),
    },
    {
      icon: AccountBalance,
      title: <Trans>Accessibili</Trans>,
      description: (
        <Trans>Da anni Pessastudio è focalizzata nel produrre prodotti di qualità a costi accessibili</Trans>
      ),
    },
    {
      icon: Restore,
      title: <Trans>Apprezzati</Trans>,
      description: <Trans>I prodotti vengono venduti ed apprezzati sia in Italia che all'estero</Trans>,
    },
    {
      icon: Apps,
      title: <Trans>Indistruttibili</Trans>,
      description: (
        <Trans>
          I nostri prodotti sono pensati per resistere nel tempo, anche se soggetti a difficili condizioni climatiche
        </Trans>
      ),
    },
    {
      icon: Apps,
      title: <Trans>Una lunga storia</Trans>,
      description: (
        <Trans>
          Pessastudio nasce 28 fa dall'ingegno e dalla passione per i cavalli del fondatore Luciano Pessa. Oggi, la
          figlia Anna, continua a portare avanti lo stesso sogno
        </Trans>
      ),
    },
  ]

  return (
    <>
      <Hero image={require("assets/pages/home/background.jpg").default} text={t`Tradizione e qualità`} />

      <Benefits
        benefits={BENEFITS}
        subtitle={t`Perché?`}
        title={t`Pessastudio, una scelta di qualità`}
        text={t`Scopri perché ogni anno centinaia di persone si affidano a Pessastudio per i loro articoli d'equitazione`}
      />

      <Products />

      <Testimonials
        subtitle={t`Dicono di noi`}
        title={t`Cosa dicono di noi`}
        text={t`Scopri la qualità dei nostri prodotti attraverso la testimonianza dei clienti`}
        testimonials={TESTIMONIALS}
      />
    </>
  )
}

export default Index
