import { gql, useQuery } from "@apollo/client";
import { Trans, t } from "@lingui/macro";
import AccountBalance from "@mui/icons-material/AccountBalance";
import Apps from "@mui/icons-material/Apps";
import Architecture from "@mui/icons-material/Architecture";
import Restore from "@mui/icons-material/Restore";
import TurnedInNot from "@mui/icons-material/TurnedInNot";
import { Typography } from "@mui/material";
import { Benefits, Hero } from "components";
import { HeroProps } from "components/Hero";
import React from "react";
import { NAME } from "utils/constants";
import image from "./assets/background.jpg";
import IndexProducts from "./components/IndexProducts";
import IndexTestimonials from "./components/IndexTestimonials";

const Index: React.FC = () => {
  const data = useQuery(gql`
    query ExampleQuery($numDice: Int!, $numSides: Int, $color: AllowedColor!) {
      rollDice(numDice: $numDice, numSides: $numSides, color: $color)
    }
  `);

  console.log(data);

  const TESTIMONIALS = [
    <Trans key="test_1">
      Ho ricevuto questa mattina il materiale. I miei complimenti per la qualità
      dei prodotti, l'imballo ed il trasportatore
    </Trans>,
    <Trans key="test_2">
      Ringrazio tutto il team per la professionalità, gentilezza, velocità e
      sopratutto per l'ottimo risultato
    </Trans>,
    <Trans key="test_3">
      Splendido niente da dire! Il tondino è ben pensato e ingegnoso. Molto
      bene!
    </Trans>,
    <Trans key="test_4">Gli ostacoli sono arrivati. Sono fantastici!</Trans>,
  ];

  const BENEFITS = [
    {
      icon: TurnedInNot,
      title: <Trans>Innovativi</Trans>,
      description: (
        <Trans>
          Innovazione tecnologica e qualità sono le caratteristiche chiave dei
          nostri prodotti
        </Trans>
      ),
    },
    {
      icon: Architecture,
      title: <Trans>Personalizzabili</Trans>,
      description: (
        <Trans>
          Prodotti MADE IN ITALY, costruiti da Pessastudio e personalizzabili
          (in dimensioni o colori)
        </Trans>
      ),
    },
    {
      icon: AccountBalance,
      title: <Trans>Accessibili</Trans>,
      description: (
        <Trans>
          Da anni Pessastudio è focalizzata nel produrre prodotti di qualità a
          costi accessibili
        </Trans>
      ),
    },
    {
      icon: Restore,
      title: <Trans>Apprezzati</Trans>,
      description: (
        <Trans>
          I prodotti vengono venduti ed apprezzati sia in Italia che all'estero
        </Trans>
      ),
    },
    {
      icon: Apps,
      title: <Trans>Indistruttibili</Trans>,
      description: (
        <Trans>
          I nostri prodotti sono pensati per resistere nel tempo, anche se
          soggetti a difficili condizioni climatiche
        </Trans>
      ),
    },
    {
      icon: Apps,
      title: <Trans>Una lunga storia</Trans>,
      description: (
        <Trans>
          Pessastudio nasce 28 fa dall'ingegno e dalla passione per i cavalli
          del fondatore Luciano Pessa. Oggi, la figlia Anna, continua a portare
          avanti lo stesso sogno
        </Trans>
      ),
    },
  ];

  const HERO: HeroProps = {
    text: <Trans>Tradizione e qualità</Trans>,
    image,
  };

  return (
    <>
      <Hero {...HERO} />
      <Benefits
        benefits={BENEFITS}
        subtitle={<Trans>Perché?</Trans>}
        title={<Trans>Pessastudio, una scelta di qualità</Trans>}
        text={
          <Trans>
            <Typography paragraph>
              {NAME} è un'azienda altamente affidabile e rinomata nel settore
              dell'equitazione. Ogni anno, centinaia di persone scelgono i
              nostri articoli d'equitazione per la qualità superiore che li
              caratterizza.
            </Typography>
            <Typography paragraph>
              La gamma di prodotti offerti è ampia e diversificata, con
              un'attenzione particolare alla funzionalità e al design. La
              competenza e l'esperienza del team di {NAME} sono alla base del
              successo dell'azienda e della sua reputazione di affidabilità e
              professionalità.
            </Typography>
          </Trans>
        }
      />
      <IndexProducts />
      <IndexTestimonials
        subtitle={<Trans>Dicono di noi</Trans>}
        title={<Trans>Cosa dicono di noi</Trans>}
        text={
          <Trans>
            Scopri la qualità dei nostri prodotti attraverso la testimonianza
            dei clienti
          </Trans>
        }
        testimonials={TESTIMONIALS}
      />
    </>
  );
};

export default Index;
