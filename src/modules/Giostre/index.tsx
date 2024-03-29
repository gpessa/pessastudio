import { t, Trans } from "@lingui/macro";
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Apps from "@mui/icons-material/Apps";
import DomainDisabled from "@mui/icons-material/DomainDisabled";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import VideogameAsset from "@mui/icons-material/VideogameAsset";
import { Box, Button, Link, styled, Typography } from "@mui/material";
import {
  Benefits,
  Columns,
  Gallery,
  Hero,
  Section,
  Th,
  Video,
} from "components";
import { usePages } from "hooks";
import NextLink from "next/link";
import React from "react";
import { NAME } from "utils/constants";

import { useLingui } from "@lingui/react";
import productsGiostreGalleryGiostraConAlveolo from "assets/products/giostre/gallery/giostra-con-alveolo.jpg";
import productsGiostreGalleryGiostraDrone from "assets/products/giostre/gallery/giostra-drone.jpg";
import productsGiostreGalleryGiostra from "assets/products/giostre/gallery/giostra.jpg";
import productsGiostreGalleryPorta from "assets/products/giostre/gallery/porta.jpg";
import productsGiostreGalleryQuadro from "assets/products/giostre/gallery/quadro.jpg";
import { BeneftisProps } from "components/Benefits";
import { HeroProps } from "components/Hero";
import image from "./assets/background.jpg";
export { getStaticProps } from "utils/getProps";

const GammaSectionStyled = styled(Section)({
  textAlign: "center",
});

export enum GiostraModels {
  Tecnoexerciser = "Tecnoexerciser",
  Ippowalker = "Ippowalker",
}

const Giostre: React.FC = () => {
  useLingui(); // Fix on locale change
  const { PAGES } = usePages();

  const BENEFITS: BeneftisProps = {
    title: <Trans>Perché una giostra Pessastudio</Trans>,
    subtitle: PAGES.GIOSTRE.title,
    text: (
      <Trans>
        <Typography paragraph>
          La nostra azienda si distingue per le giostre, il nostro punto di
          forza.{" "}
        </Typography>
        <Typography paragraph>
          La loro creazione è stata il risultato della ricerca condotta da{" "}
          <strong>Luciano Pessa</strong>, con l'intento di sviluppare uno
          strumento di lavoro affidabile e semplice da utilizzare per
          l'allenamento dei cavalli anche in assenza del cavaliere.
        </Typography>
        <Typography paragraph>
          La giostra consente non solo di raffreddare il cavallo dopo
          l'allenamento, ma anche di creare una vera e propria sessione di
          lavoro, passando da un'andatura all'altra e cambiando di mano. Grazie
          alla sua versatilità, rappresenta una soluzione pratica ed efficace
          per l'allenamento quotidiano dei cavalli.
        </Typography>
      </Trans>
    ),
    benefits: [
      {
        icon: AccessibilityNew,
        title: <Trans>3.000 giostre installate</Trans>,
        description: (
          <Trans>
            {NAME} è stata scelta da oltre 3.000 clienti in tutto il mondo per
            la realizzazione della propria giostra.
          </Trans>
        ),
      },
      {
        icon: Apps,
        title: <Trans>Ampia gamma</Trans>,
        description: (
          <Trans>
            È possibile acquistare le nostre giostre in diverse versioni adatte
            ad ogni budget ed esigenza
          </Trans>
        ),
      },
      {
        icon: DomainDisabled,
        title: <Trans>Nessuna concessione edilizia</Trans>,
        description: (
          <Trans>
            Le nostre giostre sono considerate strutture precarie. Non avrete
            bisogno di nessuna concessione edilizia
          </Trans>
        ),
      },
      {
        icon: VideogameAsset,
        title: <Trans>Facile da usare</Trans>,
        description: (
          <Trans>
            Usa il nostro semplice pannello di controllo per scegliere uno dei
            nostri "training programs" o seleziona manualmente la velocità
            desiderata
          </Trans>
        ),
      },
    ],
  };

  const IMAGES: Picture[] = [
    {
      image: productsGiostreGalleryGiostra,
      caption: t`Giostra per cavalli Tecnoexerciser`,
    },
    {
      image: productsGiostreGalleryGiostraConAlveolo,
      caption: t`Interno giostra con alveolo`,
    },
    {
      image: productsGiostreGalleryPorta,
      caption: t`Ingresso`,
    },
    {
      image: productsGiostreGalleryQuadro,
      caption: t`Quadro di comando`,
    },
    {
      image: productsGiostreGalleryGiostraDrone,
      caption: t`Giostra per cavalli Tecnoexerciser`,
    },
  ];

  const HERO: HeroProps = {
    text: PAGES.GIOSTRE.title,
    image,
  };

  return (
    <>
      <Hero {...HERO} />

      <Benefits {...BENEFITS} />

      <GammaSectionStyled maxWidth="md">
        <Th variant="h2">
          <Trans>Gamma</Trans>
        </Th>

        <Trans>
          Due sono i modelli di giostra che proponiamo: il modello{" "}
          <Link href={PAGES.GIOSTRE_TECNOEXERCISER.url} component={NextLink}>
            {GiostraModels.Tecnoexerciser}
          </Link>
          , prodotta da oltre 20 anni, e il modello{" "}
          <Link href={PAGES.GIOSTRE_IPPOWALKER.url} component={NextLink}>
            {GiostraModels.Ippowalker}
          </Link>
          , pensata per rispondere alle esigenze di un mercato che richiede un
          prodotto affidabile e al tempo stesso economico.
        </Trans>
      </GammaSectionStyled>

      <Columns
        left={
          <Box textAlign="center">
            <Th variant="h3" sans>
              {GiostraModels.Tecnoexerciser}
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
              {GiostraModels.Ippowalker}
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

      <Video
        src={"https://www.youtube.com/embed/1C7R5u270QE"}
        title={t`Giostra in movimento`}
      />

      <Section color="primary">
        <Gallery images={IMAGES} md={3} />
      </Section>
    </>
  );
};

export default Giostre;
