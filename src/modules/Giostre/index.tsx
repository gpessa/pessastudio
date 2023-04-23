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
import { Picture } from "components/ModalGallery";
import { usePages } from "hooks";
import NextLink from "next/link";
import React from "react";
import { NAME } from "utils/constants";

import productsGiostreGalleryGiostraConAlveolo from "assets/products/giostre/gallery/giostra-con-alveolo.jpg";
import productsGiostreGalleryGiostraDrone from "assets/products/giostre/gallery/giostra-drone.jpg";
import productsGiostreGalleryGiostra from "assets/products/giostre/gallery/giostra.jpg";
import productsGiostreGalleryPorta from "assets/products/giostre/gallery/porta.jpg";
import productsGiostreGalleryQuadro from "assets/products/giostre/gallery/quadro.jpg";
import { BenefitsProps } from "components/Benefits";
import { HeroProps } from "components/Hero";
import { Trans, useTranslation } from "next-i18next";
import background from "./assets/background.jpg";

const GammaSectionStyled = styled(Section)({
  textAlign: "center",
});

const Giostre: React.FC = () => {
  const { PAGES } = usePages();
  const { t } = useTranslation();

  const BENEFITS: BenefitsProps = {
    title: t("Giostre.benefits.title", {
      defaultValue: "Perché una giostra Pessastudi",
    })!,
    subtitle: t("Giostre.benefits.subtitle", {
      subtitle: "Giostrei",
    })!,
    text: (
      <Trans i18nKey="Giostre.benefits.text">
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
        title: t("Giostre.benefits.many.title", {
          defaultValue: "3.000 giostre installate",
        }),
        description: t("Giostre.benefits.many.description", {
          defaultValue: `{{ ${NAME} }} è stata scelta da oltre 3.000 clienti in tutto il mondo per la realizzazione della propria giostra.`,
        }),
      },
      {
        icon: Apps,
        title: t("Giostre.benefits.wideProductsRange.title", {
          defaultValue: "Ampia gamma",
        }),
        description: t("Giostre.benefits.wideProductsRange.description", {
          defaultValue: `È possibile acquistare le nostre giostre in diverse versioni adatte ad ogni budget ed esigenza`,
        }),
      },
      {
        icon: DomainDisabled,
        title: t("Giostre.benefits.easyToBuild.title", {
          defaultValue: "Nessuna concessione edilizia",
        }),
        description: t("Giostre.benefits.easyToBuild.description", {
          defaultValue: `Le nostre giostre sono considerate strutture precarie. Non avrete bisogno di nessuna concessione edilizia`,
        }),
      },
      {
        icon: VideogameAsset,
        title: t("Giostre.benefits.easy.title", {
          defaultValue: "Facile da usare",
        }),
        description: t("Giostre.benefits.easy.description", {
          defaultValue: `Usa il nostro semplice pannello di controllo per scegliere uno dei nostri "training programs" o seleziona manualmente la velocità desiderata`,
        }),
      },
    ],
  };

  const IMAGES: Picture[] = [
    {
      image: productsGiostreGalleryGiostra,
      caption: t("Giostre.gallery.image_1", {
        defaultValue: `Giostra per cavalli Tecnoexerciser`,
      }),
    },
    {
      image: productsGiostreGalleryGiostraConAlveolo,
      caption: t("Giostre.gallery.image_2", {
        defaultValue: `Interno giostra con alveolo`,
      }),
    },
    {
      image: productsGiostreGalleryPorta,
      caption: t("Giostre.gallery.image_3", { defaultValue: `Ingresso` }),
    },
    {
      image: productsGiostreGalleryQuadro,
      caption: t("Giostre.gallery.image_4", {
        defaultValue: `Quadro di comando`,
      }),
    },
    {
      image: productsGiostreGalleryGiostraDrone,
      caption: t("Giostre.gallery.image_5", {
        defaultValue: `Giostra per cavalli Tecnoexerciser`,
      }),
    },
  ];

  const HERO: HeroProps = {
    text: PAGES.GIOSTRE.title,
    image: background,
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
            tecnoexerciser
          </Link>
          , prodotta da oltre 20 anni, e il modello{" "}
          <Link href={PAGES.GIOSTRE_IPPOWALKER.url} component={NextLink}>
            Ippowalker
          </Link>
          , pensata per rispondere alle esigenze di un mercato che richiede un
          prodotto affidabile e al tempo stesso economico.
        </Trans>
      </GammaSectionStyled>

      <Columns
        left={
          <Box textAlign="center">
            <Th variant="h3" sans>
              <Trans>Tecnoexerciser</Trans>
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
              <Trans>Ippowalker</Trans>
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
