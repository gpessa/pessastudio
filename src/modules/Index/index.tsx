import AccountBalance from "@mui/icons-material/AccountBalance";
import Apps from "@mui/icons-material/Apps";
import Architecture from "@mui/icons-material/Architecture";
import Restore from "@mui/icons-material/Restore";
import TurnedInNot from "@mui/icons-material/TurnedInNot";
import { Typography } from "@mui/material";
import { Benefits, Hero } from "components";
import { Trans, useTranslation } from "next-i18next";
import React from "react";
import hero from "./assets/background.jpg";
import IndexProducts from "./components/IndexProducts";
import IndexTestimonials from "./components/IndexTestimonials";

const Index: React.FC = () => {
  const { t } = useTranslation();

  const TESTIMONIALS = {
    subtitle: t("Index.testimonials.subtitle", {
      defaultValue: "Dicono di noi",
    }),
    title: t("Index.testimonials.title", {
      defaultValue: "Cosa dicono di noi",
    }),
    text: t("Index.testimonials.text", {
      defaultValue:
        "Scopri la qualità dei nostri prodotti attraverso la testimonianza dei clienti",
    }),
    testimonials: [
      t("Index.testimonials.list.item_1", {
        defaultValue:
          "Ho ricevuto questa mattina il materiale. I miei complimenti per la qualità dei prodotti, l'imballo ed il trasportatore",
      }),
      t("Index.testimonials.list.item_2", {
        defaultValue:
          "Ringrazio tutto il team per la professionalità, gentilezza, velocità e sopratutto per l'ottimo risultato",
      }),
      t("Index.testimonials.list.item_3", {
        defaultValue:
          "Splendido niente da dire! Il tondino è ben pensato e ingegnoso. Molto bene!",
      }),
      t("Index.testimonials.list.item_4", {
        defaultValue: "Gli ostacoli sono arrivati. Sono fantastici!",
      }),
    ],
  };

  const HERO = {
    image: hero,
    text: t("Index.hero.text", {
      defaultValue: "Tradizione e qualità",
    }),
  };

  const BENEFITS = {
    subtitle: t("Index.benefits.subtitle", {
      defaultValue: "Perché?",
    }),
    title: t("Index.benefits.title", {
      defaultValue: "Pessastudio, una scelta di qualità",
    }),
    text: (
      <Trans i18nKey="Index.benefits.text">
        <Typography paragraph>
          Pessastudio è un'azienda altamente affidabile e rinomata nel settore
          dell'equitazione. Ogni anno, centinaia di persone scelgono i nostri
          articoli d'equitazione per la qualità superiore che li caratterizza.
        </Typography>
        <Typography paragraph>
          La gamma di prodotti offerti è ampia e diversificata, con
          un'attenzione particolare alla funzionalità e al design. La competenza
          e l'esperienza del team di Pessastudio sono alla base del successo
          dell'azienda e della sua reputazione di affidabilità e
          professionalità.
        </Typography>
      </Trans>
    ),
    benefits: [
      {
        icon: TurnedInNot,
        title: t("Index.benefits.innovative.title", {
          defaultValue: "Innovativi",
        }),
        description: t("Index.benefits.innovative.text", {
          defaultValue:
            "Innovazione tecnologica e qualità sono le caratteristiche chiave dei nostri prodotti",
        }),
      },
      {
        icon: Architecture,
        title: t("Index.benefits.customisable.title", {
          defaultValue: "Personalizzabili",
        }),
        description: t("Index.benefits.customisable.text", {
          defaultValue:
            "Prodotti MADE IN ITALY, costruiti da Pessastudio e personalizzabili (in dimensioni o colori)",
        }),
      },
      {
        icon: AccountBalance,
        title: t("Index.benefits.affordable.title", {
          defaultValue: "Accessibili",
        }),
        description: t("Index.benefits.affordable.text", {
          defaultValue:
            "Da anni Pessastudio è focalizzata nel produrre prodotti di qualità a costi accessibili",
        }),
      },
      {
        icon: Restore,
        title: t("Index.benefits.renowned.title", {
          defaultValue: "Apprezzati",
        }),
        description: t("Index.benefits.renowned.text", {
          defaultValue:
            "I prodotti vengono venduti ed apprezzati sia in Italia che all'estero",
        }),
      },
      {
        icon: Apps,
        title: t("Index.benefits.indestructible.title", {
          defaultValue: "Indistruttibili",
        }),
        description: t("Index.benefits.indestructible.text", {
          defaultValue:
            "I nostri prodotti sono pensati per resistere nel tempo, anche se soggetti a difficili condizioni climatiche",
        }),
      },
      {
        icon: Apps,
        title: t("Index.benefits.history.title", {
          defaultValue: "Una lunga storia",
        }),
        description: t("Index.benefits.history.text", {
          defaultValue:
            "Pessastudio nasce 28 fa dall'ingegno e dalla passione per i cavalli del fondatore Luciano Pessa. Oggi, la figlia Anna, continua a portare avanti lo stesso sogno",
        }),
      },
    ],
  };

  return (
    <>
      <Hero {...HERO} />
      <Benefits {...BENEFITS} />
      <IndexProducts />
      <IndexTestimonials {...TESTIMONIALS} />
    </>
  );
};

export default Index;
