"use client";

import { Trans, useLingui } from "@lingui/react/macro";
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Apps from "@mui/icons-material/Apps";
import DomainDisabled from "@mui/icons-material/DomainDisabled";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import VideogameAsset from "@mui/icons-material/VideogameAsset";
import { Box, Button, Typography } from "@mui/material";
import {
  Benefits,
  Columns,
  ContactUs,
  Gallery,
  Hero,
  Section,
  Th,
  Video,
} from "components";
import { BeneftisProps } from "components/Benefits";
import { HeroProps } from "components/Hero";
import { usePages } from "hooks";
import NextLink from "next/link";
import React from "react";
import { NAME } from "utils/constants";

import image from "./assets/background.jpg";

const Giostre: React.FC = () => {
  const { t } = useLingui();
  const {
    PAGES: {
      GIOSTRE,
      GIOSTRE_TECNOEXERCISER_COPERTA,
      GIOSTRE_TECNOEXERCISER_SCOPERTA,
    },
  } = usePages();

  const BENEFITS: BeneftisProps = {
    benefits: [
      {
        description: (
          <Trans>
            {NAME} è stata scelta da oltre 3.000 clienti in tutto il mondo per
            la realizzazione della propria giostra.
          </Trans>
        ),
        icon: AccessibilityNew,
        title: <Trans>3.000 giostre installate</Trans>,
      },
      {
        description: (
          <Trans>
            È possibile acquistare le nostre giostre in diverse versioni adatte
            ad ogni budget ed esigenza
          </Trans>
        ),
        icon: Apps,
        title: <Trans>Ampia gamma</Trans>,
      },
      {
        description: (
          <Trans>
            Le nostre giostre sono considerate strutture precarie. Non avrete
            bisogno di nessuna concessione edilizia
          </Trans>
        ),
        icon: DomainDisabled,
        title: <Trans>Nessuna concessione edilizia</Trans>,
      },
      {
        description: (
          <Trans>
            Usa il nostro semplice pannello di controllo per scegliere uno dei
            nostri "training programs" o seleziona manualmente la velocità
            desiderata
          </Trans>
        ),
        icon: VideogameAsset,
        title: <Trans>Facile da usare</Trans>,
      },
    ],
    subtitle: GIOSTRE.title,
    text: (
      <Trans>
        <Typography mx={{ marginBottom: 15 }}>
          La nostra azienda si distingue per le giostre, il nostro punto di
          forza.{" "}
        </Typography>
        <Typography mx={{ marginBottom: 15 }}>
          La loro creazione è stata il risultato della ricerca condotta da{" "}
          <strong>Luciano Pessa</strong>, con l'intento di sviluppare uno
          strumento di lavoro affidabile e semplice da utilizzare per
          l'allenamento dei cavalli anche in assenza del cavaliere.
        </Typography>
        <Typography mx={{ marginBottom: 15 }}>
          La giostra consente non solo di raffreddare il cavallo dopo
          l'allenamento, ma anche di creare una vera e propria sessione di
          lavoro, passando da un'andatura all'altra e cambiando di mano. Grazie
          alla sua versatilità, rappresenta una soluzione pratica ed efficace
          per l'allenamento quotidiano dei cavalli.
        </Typography>
      </Trans>
    ),
    title: <Trans>Perché una giostra Pessastudio</Trans>,
  };

  const IMAGES: Picture[] = [
    {
      caption: t`Quadro elettrico modello easy`,
      image: require("./assets/gallery/quadro-tecno-easy.jpg"),
    },
    {
      caption: t`Ingresso`,
      image: require("./assets/gallery/porta.jpg"),
    },
    {
      caption: t`Quadro di comando`,
      image: require("./assets/gallery/quadro.jpg"),
    },
    {
      caption: t`Quadro di comando`,
      image: require("./assets/gallery/quadro-di-comando.jpg"),
    },
    {
      caption: t`Interno giostra con alveolo`,
      image: require("./assets/gallery/giostra-con-alveolo.jpg"),
    },
    {
      caption: t`Giostra per cavalli Tecnoexerciser`,
      image: require("./assets/gallery/giostra-2.jpg"),
    },
    {
      caption: t`Porta mobile`,
      image: require("./assets/gallery/porta-mobile.jpg"),
    },
    {
      caption: t`Corridoio coperto per accesso giostra ${GIOSTRE_TECNOEXERCISER_COPERTA.title}`,
      image: require("./assets/gallery/corridoio-coperto.jpg"),
    },
  ];

  const HERO: HeroProps = {
    image,
    text: GIOSTRE.title,
  };

  return (
    <>
      <Hero {...HERO} />

      <Benefits {...BENEFITS} />

      <Section
        maxWidth="md"
        sx={{
          textAlign: "center",
        }}
      >
        <Th variant="h2">
          <Trans>Gamma</Trans>
        </Th>

        <Trans>
          <Typography mx={{ marginBottom: 15 }}>
            Il nostro modello Tecnoexerciser, rappresenta lo strumento più
            avanzato nel suo campo. Frutto di oltre 20 anni di esperienza e
            studi, il Tecnoexerciser offre prestazioni professionali senza pari,
            garantendo il massimo in termini di qualità e innovazione.
          </Typography>
          <Typography mx={{ marginBottom: 15 }}>
            Nei vari anni abbiamo voluto creare una gamma completa per ogni
            esigenza e budget dei nostri clienti, creando cosi varie soluzioni
            di corridoio coperto o scoperto.
          </Typography>
          <Typography mx={{ marginBottom: 15 }}>
            Troverete giostre da 4, 5, 6, 8 cavalli con vari diametri
            disponibili 12, 14.40, 16, 17.60, 19.20 mt. La giostra
            Tecnoexerciser ha un motore da 0.75 kw 220 volt che ti permetterà di
            utilizzarla senza consumi elettrici esagerati e potrai regolare la
            cadenza fra 60 e 220 metri al minuto.
          </Typography>
        </Trans>
      </Section>

      <Columns
        left={
          <Box textAlign="center">
            <Th variant="h3" sans>
              {GIOSTRE_TECNOEXERCISER_COPERTA.title}
            </Th>
            <Button
              component={NextLink}
              href={GIOSTRE_TECNOEXERCISER_COPERTA.url}
              color="warm2"
              size="large"
              startIcon={<RemoveRedEyeOutlined />}
            >
              <Trans>Scopri di piú</Trans>
            </Button>
          </Box>
        }
        right={
          <Box textAlign="center">
            <Th variant="h3" sans>
              {GIOSTRE_TECNOEXERCISER_SCOPERTA.title}
            </Th>
            <Button
              color="primary"
              size="large"
              component={NextLink}
              href={GIOSTRE_TECNOEXERCISER_SCOPERTA.url}
              endIcon={<RemoveRedEyeOutlined />}
            >
              <Trans>Scopri di piú</Trans>
            </Button>
          </Box>
        }
      />

      <Video videoid="1C7R5u270QE" />

      <Section color="primary">
        <Gallery images={IMAGES} md={3} />
      </Section>

      <ContactUs color="warm1" />
    </>
  );
};

export default Giostre;
