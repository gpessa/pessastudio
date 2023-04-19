import { t, Trans } from "@lingui/macro";
import AccountBalance from "@mui/icons-material/AccountBalance";
import DomainDisabled from "@mui/icons-material/DomainDisabled";
import Lock from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import { Grid } from "@mui/material";
import {
  Accessori,
  Benefits,
  ContentTable,
  Gallery,
  Hero,
  Section,
  Th,
} from "components";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE } from "utils/constants";

import { useLingui } from "@lingui/react";
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
import { AccessoriProps } from "components/Accessori";
import { BeneftisProps } from "components/Benefits";
import { usePages } from "hooks";
import image from "./assets/background.jpg";
export { getStaticProps } from "utils/getProps";

const Tondini: React.FC = () => {
  useLingui(); // Fix on locale change
  const { PAGES } = usePages();

  const ACCESSORI: AccessoriProps = {
    accessories: [
      {
        name: <Trans>Rete antivento</Trans>,
        description: (
          <Trans>
            La rete antivento protegge l'interno della tondino da correnti
            d'aria consentendo il cavallo a rimanere concentrato durante
            l'allenamento.
          </Trans>
        ),
        pictures: [
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
        name: <Trans>Irrigazione</Trans>,
        description: (
          <Trans>
            Tutti i cavalieri sanno quanto sia spiacevole cavalcare in un
            ambiente polveroso.
            <br />
            La polvere può contribuire a problemi respiratori per te e per i
            tuoi cavalli e può indicare che il fondo non fornisce un adeguato un
            supporto allo zoccolo del cavallo. <br />
            Per ovviare a questo problema, è possibile installare il nostro
            sistema di irrigazione. Un rosone verrà posizionato al centro del
            tondino e ti permetterà di irrigarlo facilmente.
          </Trans>
        ),
        pictures: [
          {
            image: productsTondiniAccessoriIrrigazione_1,
            md: 3,
          },
        ],
      },
      {
        name: <Trans>Rete antivento ingresso</Trans>,
        description: (
          <Trans>
            La rete antivento della porta è un’ulteriore protezione che offriamo
            per rendere ancora di più il tuo tondino sicuro in caso di forte
            vento e per garantire una maggiore concentrazione del tuo cavallo.
          </Trans>
        ),
        pictures: [
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
        name: <Trans>Chiusura a terra</Trans>,
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        pictures: [
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
      caption: t`Tondino coperto ${18} pannelli ${15} mt.`,
      image: productsTondiniGalleryTondino_0,
    },
    {
      caption: t`Tondino coperto ${24} pannelli ${13.2} mt.`,
      image: productsTondiniGalleryTondino_1,
    },
    {
      caption: t`Interno tondino coperto`,
      image: productsTondiniGalleryTondino_2,
    },
    {
      caption: t`Interno tondino coperto`,
      image: productsTondiniGalleryTondino_3,
    },
    {
      caption: t`Tondino coperto per cavalli`,
      image: productsTondiniGalleryTondino_4,
    },
    {
      caption: t`Copertura`,
      image: productsTondiniGalleryTondino_5,
    },
    {
      caption: t`Copertura`,
      image: productsTondiniGalleryTondino_6,
    },
    {
      caption: t`Copertura`,
      image: productsTondiniGalleryTondino_7,
    },
    {
      caption: t`Ingresso di 2,05 mt. con catenaccio verticale`,
      image: productsTondiniGalleryTondino_8,
    },
    {
      caption: t`Tondino`,
      image: productsTondiniGalleryTondino_9,
    },
    {
      caption: t`Interno tondino coperto`,
      image: productsTondiniGalleryTondino_10,
    },
    {
      caption: t`Tondino`,
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
    label: t`Tondino coperto ${sides} pannelli ${size} mt.`,
    file,
  }));

  const MANUALS = [
    {
      label: <Trans>Come preparare il fondo</Trans>,
      link: "/tondini/come-preparare-il-fondo",
    },
  ];

  const BENEFITS: BeneftisProps = {
    subtitle: t`Caratteristiche`,
    title: t`Scopri il nostro tondino Tecnohalle`,
    text: (
      <Trans>
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
        title: <Trans>Materiali di qualità</Trans>,
        description: (
          <Trans>
            È costituito da pannelli laterali in compensato marino fissati a
            colonne in acciaio zincato. La copertura in telo spalmato in PVC, è
            disponibile in bianco, verde o crema
          </Trans>
        ),
      },
      {
        icon: DomainDisabled,
        title: <Trans>Nessuna concessione edilizia</Trans>,
        description: (
          <Trans>
            I nostri tondini sono considerati strutture precarie. Non avrete
            bisogno di nessuna concessione edilizia
          </Trans>
        ),
      },
      {
        icon: Visibility,
        title: <Trans>Bello e funzionale</Trans>,
        description: (
          <Trans>
            É una struttura semplice, leggera e piacevole alla vista
          </Trans>
        ),
      },
      {
        icon: Lock,
        title: <Trans>Sicuro</Trans>,
        description: (
          <Trans>
            La struttura è stata progettata per garantire un carico neve fino a
            120 kg/mq e la velocità del vento fino a 110 km/h.
          </Trans>
        ),
      },
    ],
  };

  const HERO = {
    text: PAGES.TONDINI.title,
    image,
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
        <Th variant="h4">{<Trans>Supporto clienti</Trans>}</Th>
        <Grid container spacing={PRODUCT_GUTTER}>
          <Grid item xs={12} md={6}>
            <ContentTable title={<Trans>Dimensioni</Trans>} rows={DIMENSIONS} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentTable title={<Trans>Manuali</Trans>} rows={MANUALS} />
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default Tondini;
