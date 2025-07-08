"use client";

import { Trans, useLingui } from "@lingui/react/macro";
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Apps from "@mui/icons-material/Apps";
import DomainDisabled from "@mui/icons-material/DomainDisabled";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import VideogameAsset from "@mui/icons-material/VideogameAsset";
import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

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
import { NAME } from "utils/constants";
import { usePages } from "hooks";
import React from "react";
import image from "./assets/background.jpg";

export const GIOSTRE_MODELS = {
  IPPOWALKER: "Ippowalker",
  TECNOEXERCISER: "Tecnoexerciser",
};

const Giostre: React.FC = () => {
  const { t } = useLingui();
  const { PAGES } = usePages();

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
    subtitle: PAGES.GIOSTRE.title,
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
      caption: t`Giostra per cavalli Tecnoexerciser`,
      image: require("assets/products/giostre/gallery/giostra-1.jpg"),
    },
    {
      caption: t`Ingresso`,
      image: require("assets/products/giostre/gallery/porta.jpg"),
    },
    {
      caption: t`Quadro di comando`,
      image: require("assets/products/giostre/gallery/quadro.jpg"),
    },
    {
      caption: t`Giostra per cavalli Tecnoexerciser`,
      image: require("assets/products/giostre/gallery/giostra-drone.jpg"),
    },
    {
      caption: t`Interno giostra con alveolo`,
      image: require("assets/products/giostre/gallery/giostra-con-alveolo.jpg"),
    },
    {
      caption: t`Giostra per cavalli Tecnoexerciser`,
      image: require("assets/products/giostre/gallery/giostra-2.jpg"),
    },
    {
      caption: t`Porta mobile`,
      image: require("assets/products/giostre/gallery/porta-mobile.jpg"),
    },
    {
      caption: t`Corridoio coperto per accesso giostra ${GIOSTRE_MODELS.TECNOEXERCISER}`,
      image: require("assets/products/giostre/gallery/corridoio-coperto.jpg"),
    },
  ];

  const HERO: HeroProps = {
    image,
    text: PAGES.GIOSTRE.title,
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
            Il nostro modello di punta, il{" "}
            <strong>{GIOSTRE_MODELS.TECNOEXERCISER}</strong>, rappresenta lo
            strumento più avanzato nel suo campo. Frutto di oltre 20 anni di
            esperienza e studi, il{" "}
            <strong>{GIOSTRE_MODELS.TECNOEXERCISER}</strong> offre prestazioni
            professionali senza pari, garantendo il massimo in termini di
            qualità e innovazione.
          </Typography>

          <Typography mx={{ marginBottom: 15 }}>
            Per chi cerca una soluzione più economica ma comunque affidabile,
            proponiamo l'<strong>{GIOSTRE_MODELS.IPPOWALKER}</strong>. Questo
            modello base è perfetto per chi desidera un'opzione conveniente
            senza compromettere la sicurezza e l'efficacia.
          </Typography>

          <Typography>
            Qualunque sia la vostra esigenza, siamo certi di avere il prodotto
            giusto per voi e i vostri cavalli.
          </Typography>
        </Trans>
      </Section>

      <Columns
        left={
          <Box textAlign="center">
            <Th variant="h3" sans>
              {GIOSTRE_MODELS.TECNOEXERCISER}
            </Th>
            <Button
              component={NextLink}
              href={PAGES.GIOSTRE_TECNOEXERCISER.url}
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
              {GIOSTRE_MODELS.IPPOWALKER}
            </Th>
            <Button
              color="primary"
              size="large"
              component={NextLink}
              href={PAGES.GIOSTRE_IPPOWALKER.url}
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
