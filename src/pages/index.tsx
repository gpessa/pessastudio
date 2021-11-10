import { Benefits, Hero, Products, Testimonials } from "@components"
import { t } from "@lingui/macro"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import AppsIcon from "@mui/icons-material/Apps"
import ArchitectureIcon from "@mui/icons-material/Architecture"
import RestoreIcon from "@mui/icons-material/Restore"
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot"
import { withPrefix } from "gatsby"
import React from "react"

const Index: React.FC = () => {
  const BENEFITS = [
    {
      icon: TurnedInNotIcon,
      title: t`Innovativi`,
      description: t`L'innovazione tecnologica e la qualità sono le caratteristiche chiave dei nostri prodotti`,
    },
    {
      icon: ArchitectureIcon,
      title: t`Personalizzabili`,
      description: t`I nostri prodotti sono MADE IN ITALY, costruiti da Pessastudio e personalizzabili (in dimensioni o colori)`,
    },
    {
      icon: AccountBalanceIcon,
      title: t`Accessibili`,
      description: t`Da anni Pessastudio è focalizzata nel produrre prodotti di qualità a costi accessibili`,
    },
    {
      icon: RestoreIcon,
      title: t`Apprezzati`,
      description: t`I prodotti vengono venduti ed apprezzati sia in Italia che all'estero`,
    },
    {
      icon: AppsIcon,
      title: t`Indistruttibili`,
      description: t`I nostri prodotti sono pensati per resistere nel tempo, anche se soggetti a difficili condizioni climatiche`,
    },
    {
      icon: AppsIcon,
      title: t`Una lunga storia`,
      description: t`Pessastudio nasce 28 anni fa dalla famiglia Pessa, gente di cavalli da generazioni, oggi Luciano Pessa il fondatore si avvale della forza commerciale della figlia`,
    },
  ]

  return (
    <>
      <Hero image={withPrefix("/pages/home/background.jpg")} text={t`Tradizione e qualità`} />

      <Benefits
        benefits={BENEFITS}
        subtitle={"Perché?"}
        title={t`Pessastudio, una scelta di qualità`}
        text={t`Scopri perché ogni anno centinaia di persone si affidano a Pessastudio per i loro articoli d'equitazione`}
      />

      <Products />

      <Testimonials />
    </>
  )
}

export default Index
