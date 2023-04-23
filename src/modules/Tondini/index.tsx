import AccountBalance from "@mui/icons-material/AccountBalance";
import DomainDisabled from "@mui/icons-material/DomainDisabled";
import Lock from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import { Grid, Typography } from "@mui/material";
import {
  Accessori,
  Benefits,
  ContentTable,
  Gallery,
  Hero,
  Section,
  Th,
} from "components";
import { Picture } from "components/ModalGallery";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE } from "utils/constants";

import productsTondiniAccessoriAntivento_1 from "assets/products/tondini/accessori/antivento-1.jpg";
import productsTondiniAccessoriAntivento_2 from "assets/products/tondini/accessori/antivento-2.jpg";
import productsTondiniAccessoriAntiventoPortIngresso_1 from "assets/products/tondini/accessori/antivento-port-ingresso-1.jpg";
import productsTondiniAccessoriAntiventoPortIngresso_2 from "assets/products/tondini/accessori/antivento-port-ingresso-2.jpg";
import productsTondiniAccessoriCoperturaTerra_1 from "assets/products/tondini/accessori/copertura-terra-1.jpg";
import productsTondiniAccessoriIrrigazione_1 from "assets/products/tondini/accessori/irrigazione-1.jpg";
import productsTondiniGalleryTondino_0 from "assets/products/tondini/gallery/tondino-0.jpg";
import productsTondiniGalleryTondino_1 from "assets/products/tondini/gallery/tondino-1.jpg";
import productsTondiniGalleryTondino_10 from "assets/products/tondini/gallery/tondino-10.jpg";
import productsTondiniGalleryTondino_11 from "assets/products/tondini/gallery/tondino-11.jpg";
import productsTondiniGalleryTondino_2 from "assets/products/tondini/gallery/tondino-2.jpg";
import productsTondiniGalleryTondino_3 from "assets/products/tondini/gallery/tondino-3.jpg";
import productsTondiniGalleryTondino_4 from "assets/products/tondini/gallery/tondino-4.jpg";
import productsTondiniGalleryTondino_5 from "assets/products/tondini/gallery/tondino-5.jpg";
import productsTondiniGalleryTondino_6 from "assets/products/tondini/gallery/tondino-6.jpg";
import productsTondiniGalleryTondino_7 from "assets/products/tondini/gallery/tondino-7.jpg";
import productsTondiniGalleryTondino_8 from "assets/products/tondini/gallery/tondino-8.jpg";
import productsTondiniGalleryTondino_9 from "assets/products/tondini/gallery/tondino-9.jpg";
import { usePages } from "hooks";
import { Trans, useTranslation } from "next-i18next";
import pagesTondiniBackground from "./assets/background.jpg";

const Tondini: React.FC = () => {
  const { PAGES } = usePages();
  const { t } = useTranslation();

  const ACCESSORI = {
    accessories: [
      {
        name: <Trans i18nKey="General.addon.windscreen">Rete antivento</Trans>,
        description: (
          <Trans i18nKey="Tondini.addon.windscreen.description">
            La rete antivento protegge l'interno della tondino da correnti
            d'aria consentendo il cavallo a rimanere concentrato durante
            l'allenamento.
          </Trans>
        ),
        images: [
          {
            image: productsTondiniAccessoriAntivento_1,
            md: 3,
          },
          {
            image: productsTondiniAccessoriAntivento_2,
            md: 4,
          },
        ],
      },
      {
        name: (
          <Trans i18nKey="General.addon.trackIrrigation">Irrigazione</Trans>
        ),
        description: (
          <Trans i18nKey="Tondini.addon.trackIrrigation.description">
            <Typography>
              Tutti i cavalieri sanno quanto sia spiacevole cavalcare in un
              ambiente polveroso.
            </Typography>
            <Typography>
              La polvere può contribuire a problemi respiratori per te e per i
              tuoi cavalli e può indicare che il fondo non fornisce un adeguato
              un supporto allo zoccolo del cavallo.
            </Typography>
            <Typography>
              Per ovviare a questo problema, è possibile installare il nostro
              sistema di irrigazione. Un rosone verrà posizionato al centro del
              tondino e ti permetterà di irrigarlo facilmente.
            </Typography>
          </Trans>
        ),
        images: [
          {
            image: productsTondiniAccessoriIrrigazione_1,
            md: 3,
          },
        ],
      },
      {
        name: (
          <Trans i18nKey="General.addon.windscreenEntrance">
            Rete antivento ingresso
          </Trans>
        ),
        description: (
          <Trans i18nKey="Tondini.addon.windscreenEntrance.description">
            La rete antivento della porta è un’ulteriore protezione che offriamo
            per rendere ancora di più il tuo tondino sicuro in caso di forte
            vento e per garantire una maggiore concentrazione del tuo cavallo.
          </Trans>
        ),
        images: [
          {
            image: productsTondiniAccessoriAntiventoPortIngresso_1,
            md: 3,
          },
          {
            image: productsTondiniAccessoriAntiventoPortIngresso_2,
            md: 4,
          },
        ],
      },
      {
        name: (
          <Trans i18nKey="General.addon.closedAtTheGround">
            Chiusura a terra
          </Trans>
        ),
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        images: [
          {
            image: productsTondiniAccessoriCoperturaTerra_1,
            md: 4,
            top: "60%",
            left: "30%",
          },
        ],
      },
    ],
  };

  const IMAGES: Picture[] = [
    {
      caption: t("Tondini.models", {
        defaultValue: `Tondino coperto {{sides}} pannelli {{size}} mt.`,
        sides: 18,
        size: 15,
      }),
      image: productsTondiniGalleryTondino_0,
    },
    {
      caption: t("Tondini.models", {
        defaultValue: `Tondino coperto {{sides}} pannelli {{size}} mt.`,
        sides: 24,
        size: 13.2,
      }),
      image: productsTondiniGalleryTondino_1,
    },
    {
      caption: t("Tondini.gallery.inside", {
        defaultValue: `Interno tondino coperto`,
      }),
      image: productsTondiniGalleryTondino_2,
    },
    {
      caption: t("Tondini.gallery.inside", {
        defaultValue: `Interno tondino coperto`,
      }),
      image: productsTondiniGalleryTondino_3,
    },
    {
      caption: t("Tondini.gallery.inside", {
        defaultValue: `Interno tondino coperto`,
      }),
      image: productsTondiniGalleryTondino_4,
    },
    {
      caption: t("Tondini.gallery.roof", { defaultValue: `Copertura` }),
      image: productsTondiniGalleryTondino_5,
    },
    {
      caption: t("Tondini.gallery.roof", { defaultValue: `Copertura` }),
      image: productsTondiniGalleryTondino_6,
    },
    {
      caption: t("Tondini.gallery.roof", { defaultValue: `Copertura` }),
      image: productsTondiniGalleryTondino_7,
    },
    {
      caption: t("Tondini.gallery.image_8", {
        defaultValue: `Ingresso di 2,05 mt. con catenaccio verticale`,
      }),
      image: productsTondiniGalleryTondino_8,
    },
    {
      caption: t("Tondini.gallery.image_9", { defaultValue: `Tondino` }),
      image: productsTondiniGalleryTondino_9,
    },
    {
      caption: t("Tondini.gallery.image_10", {
        defaultValue: `Interno tondino coperto`,
      }),
      image: productsTondiniGalleryTondino_10,
    },
    {
      caption: PAGES.TONDINI.title,
      image: productsTondiniGalleryTondino_11,
    },
  ];

  const DIMENSIONS = [
    {
      sides: 16,
      size: 13.2,
      file: "/products/tondini/tondino-16.pdf",
    },
    {
      sides: 18,
      size: 15.0,
      file: "/products/tondini/tondino-18.pdf",
    },
    {
      sides: 20,
      size: 16.6,
      file: "/products/tondini/tondino-20.pdf",
    },
    {
      sides: 22,
      size: 18.3,
      file: "/products/tondini/tondino-22.pdf",
    },
    {
      sides: 24,
      size: 19.9,
      file: "/products/tondini/tondino-24.pdf",
    },
  ].map(({ sides, size, file }) => ({
    label: t("Tondini.models", {
      defaultValue: `Tondino coperto {{sides}} pannelli {{size}} mt.`,
      sides,
      size,
    }),
    file,
  }));

  const MANUALS = [
    {
      label: PAGES.TONDINI_COME_PREPARARE_IL_FONDO.title,
      link: "/tondini/come-preparare-il-fondo",
    },
  ];

  const BENEFITS = {
    subtitle: t("Tondini.benefits.subtitle", {
      defaultValue: "Caratteristiche",
    }),
    title: t("Tondini.benefits.title", {
      defaultValue: "Scopri il nostro tondino Tecnohalle",
    }),
    text: (
      <Trans i18nKey="Tondini.benefits.text">
        Il tondino coperto è adatto a svolgere molteplici attività, rappresenta
        la migliore soluzione per addestrare puledri in libertà o lavorare
        cavalli alla corda. Inoltre facilita il controllo del cavallo durante le
        lezioni ai principianti ed è indispensabile per il longeur durante le
        riprese di volteggi.
      </Trans>
    ),
    benefits: [
      {
        icon: AccountBalance,
        title: t("Tondini.benefits.good.title", {
          defaultValue: "Materiali di qualità",
        }),
        description: t("Tondini.benefits.good.description", {
          defaultValue:
            "È costituito da pannelli laterali in compensato marino fissati a colonne in acciaio zincato. La copertura in telo spalmato in PVC, è disponibile in bianco, verde o crema",
        }),
      },
      {
        icon: DomainDisabled,
        title: t("Tondini.benefits.easy.title", {
          defaultValue: "Nessuna concessione edilizia",
        }),
        description: t("Tondini.benefits.easy.description", {
          defaultValue:
            "I nostri tondini sono considerati strutture precarie. Non avrete bisogno di nessuna concessione edilizia",
        }),
      },
      {
        icon: Visibility,
        title: t("Tondini.benefits.beautiful.title", {
          defaultValue: "Bello e funzionale",
        }),
        description: t("Tondini.benefits.beautiful.description", {
          defaultValue:
            "É una struttura semplice, leggera e piacevole alla vista",
        }),
      },
      {
        icon: Lock,
        title: t("Tondini.benefits.safe.title", { defaultValue: "Sicuro" }),
        description: t("Tondini.benefits.safe.description", {
          defaultValue:
            "La struttura è stata progettata per garantire un carico neve fino a 120 kg/mq e la velocità del vento fino a 110 km/h.",
        }),
      },
    ],
  };

  const HERO = {
    image: pagesTondiniBackground,
    text: PAGES.TONDINI.title,
  };

  return (
    <>
      <Hero {...HERO} />
      <Benefits {...BENEFITS} />

      <Section color="primary">
        <Gallery images={IMAGES} md={3} />
      </Section>

      <Accessori {...ACCESSORI} />

      <Section color="warm1">
        <Th variant="h4">
          {
            <Trans i18nKey="General.contacts.clientSupport">
              Supporto clienti
            </Trans>
          }
        </Th>
        <Grid container spacing={PRODUCT_GUTTER}>
          <Grid item xs={12} md={6}>
            <ContentTable
              title={<Trans i18nKey="General.size">Dimensioni</Trans>}
              rows={DIMENSIONS}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentTable
              title={<Trans i18nKey="General.manuals">Manuali</Trans>}
              rows={MANUALS}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default Tondini;
