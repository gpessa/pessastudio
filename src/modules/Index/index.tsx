"use client";

import { Trans, useLingui } from "@lingui/react/macro";
import AccountBalance from "@mui/icons-material/AccountBalance";
import Apps from "@mui/icons-material/Apps";
import Architecture from "@mui/icons-material/Architecture";
import Restore from "@mui/icons-material/Restore";
import TurnedInNot from "@mui/icons-material/TurnedInNot";
import { Typography } from "@mui/material";
import { Benefits, Hero } from "components";
import { HeroProps } from "components/Hero";
import { usePages } from "hooks";
import { NAME } from "utils/constants";

import image from "./assets/background.jpg";
import IndexFieraOstacoli from "./components/IndexFieraOstacoli";
import IndexProducts from "./components/IndexProducts";
import IndexTestimonials from "./components/IndexTestimonials";

export default function Index() {
  const {
    t,
    i18n: { locale },
  } = useLingui();
  const { PRODUCTS } = usePages();

  const TESTIMONIALS = {
    test_1: (
      <Trans>
        Ho ricevuto questa mattina il materiale. I miei complimenti per la
        qualità dei prodotti, l'imballo ed il trasportatore
      </Trans>
    ),
    test_2: (
      <Trans>
        Ringrazio tutto il team per la professionalità, gentilezza, velocità e
        sopratutto per l'ottimo risultato
      </Trans>
    ),
    test_3: (
      <Trans>
        Splendido niente da dire! Il tondino è ben pensato e ingegnoso. Molto
        bene!
      </Trans>
    ),
    test_4: <Trans>Gli ostacoli sono arrivati. Sono fantastici!</Trans>,
  };

  const BENEFITS = [
    {
      description: (
        <Trans>
          Innovazione tecnologica e qualità sono le caratteristiche chiave dei
          nostri prodotti
        </Trans>
      ),
      icon: TurnedInNot,
      title: <Trans>Innovativi</Trans>,
    },
    {
      description: (
        <Trans>
          Prodotti MADE IN ITALY, costruiti da Pessastudio e personalizzabili
          (in dimensioni o colori)
        </Trans>
      ),
      icon: Architecture,
      title: <Trans>Personalizzabili</Trans>,
    },
    {
      description: (
        <Trans>
          Da anni Pessastudio è focalizzata nel produrre prodotti di qualità a
          costi accessibili
        </Trans>
      ),
      icon: AccountBalance,
      title: <Trans>Accessibili</Trans>,
    },
    {
      description: (
        <Trans>
          I prodotti vengono venduti ed apprezzati sia in Italia che all'estero
        </Trans>
      ),
      icon: Restore,
      title: <Trans>Apprezzati</Trans>,
    },
    {
      description: (
        <Trans>
          I nostri prodotti sono pensati per resistere nel tempo, anche se
          soggetti a difficili condizioni climatiche
        </Trans>
      ),
      icon: Apps,
      title: <Trans>Indistruttibili</Trans>,
    },
    {
      description: (
        <Trans>
          Pessastudio nasce 28 fa dall'ingegno e dalla passione per i cavalli
          del fondatore Luciano Pessa. Oggi, la figlia Anna, continua a portare
          avanti lo stesso sogno
        </Trans>
      ),
      icon: Apps,
      title: <Trans>Una lunga storia</Trans>,
    },
  ];

  const isFieraTime = new Date() < new Date("10/11/2025");
  const isFieraMode = isFieraTime && locale === "it";

  const HERO: HeroProps = {
    image,
    text: <Trans>Tradizione e qualità</Trans>,
  };

  return (
    <>
      {isFieraMode ? <IndexFieraOstacoli /> : <Hero {...HERO} />}
      <Benefits
        benefits={BENEFITS}
        subtitle={<Trans>Perché?</Trans>}
        title={<Trans>Pessastudio, una scelta di qualità</Trans>}
        text={
          <Trans>
            <Typography mx={{ marginBottom: 15 }}>
              {NAME} è un'azienda altamente affidabile e rinomata nel settore
              dell'equitazione. Ogni anno, centinaia di persone scelgono i
              nostri articoli d'equitazione per la qualità superiore che li
              caratterizza.
            </Typography>
            <Typography mx={{ marginBottom: 15 }}>
              La gamma di prodotti offerti è ampia e diversificata, con
              un'attenzione particolare alla funzionalità e al design. La
              competenza e l'esperienza del team di {NAME} sono alla base del
              successo dell'azienda e della sua reputazione di affidabilità e
              professionalità.
            </Typography>
          </Trans>
        }
      />
      <IndexProducts products={Object.values(PRODUCTS)} />
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
}
