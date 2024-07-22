import { t, Trans } from "@lingui/macro";
import AccountBalance from "@mui/icons-material/AccountBalance";
import DomainDisabled from "@mui/icons-material/DomainDisabled";
import Lock from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import { Grid } from "@mui/material";
import {
  Accessori,
  Benefits,
  ContactUs,
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
import { AccessoriProps } from "components/Accessori";
import { BeneftisProps } from "components/Benefits";
import { usePages, useProducts } from "hooks";
import image from "./assets/background.jpg";
export { getStaticProps } from "utils/getProps";

const Tondini: React.FC = () => {
  const {
    i18n: { locale },
  } = useLingui(); // Fix on locale change
  const { PAGES } = usePages();
  const {
    TONDINO_1320,
    TONDINO_1500,
    TONDINO_1660,
    TONDINO_1830,
    TONDINO_1990,
  } = useProducts();

  const ACCESSORI: AccessoriProps = {
    accessories: [
      {
        description: (
          <Trans>
            La rete antivento protegge l'interno della tondino da correnti
            d'aria consentendo il cavallo a rimanere concentrato durante
            l'allenamento.
          </Trans>
        ),
        name: <Trans>Rete antivento</Trans>,
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
        name: <Trans>Irrigazione</Trans>,
        pictures: [
          {
            image: productsTondiniAccessoriIrrigazione_1,
            md: 3,
          },
        ],
      },
      {
        description: (
          <Trans>
            La rete antivento della porta è un’ulteriore protezione che offriamo
            per rendere ancora di più il tuo tondino sicuro in caso di forte
            vento e per garantire una maggiore concentrazione del tuo cavallo.
          </Trans>
        ),
        name: <Trans>Rete antivento ingresso</Trans>,
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
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        name: <Trans>Chiusura a terra</Trans>,
        pictures: [
          {
            image: productsTondiniAccessoriCoperturaTerra_1,
            left: "30%",
            md: 4,
            top: "60%",
          },
        ],
      },
    ],
  };

  const IMAGES: Picture[] = [
    ...[
      {
        image: require("assets/products/tondini/gallery/tondino-0.jpg"),
        sides: 22,
        size: 18.3,
      },
      {
        image: require("assets/products/tondini/gallery/tondino-1.jpg"),
        sides: 24,
        size: 19.9,
      },
    ].map(({ sides, size, image }) => ({
      caption: t`Tondino coperto ${sides} pannelli ${size}`,
      image,
    })),
    {
      caption: t`Interno tondino coperto`,
      image: require("assets/products/tondini/gallery/tondino-2.jpg"),
    },
    {
      caption: t`Interno tondino coperto`,
      image: require("assets/products/tondini/gallery/tondino-3.jpg"),
    },
    {
      caption: t`Tondino coperto per cavalli`,
      image: require("assets/products/tondini/gallery/tondino-4.jpg"),
    },
    {
      caption: t`Copertura`,
      image: require("assets/products/tondini/gallery/tondino-5.jpg"),
    },
    {
      caption: t`Copertura`,
      image: require("assets/products/tondini/gallery/tondino-6.jpg"),
    },
    {
      caption: t`Copertura`,
      image: require("assets/products/tondini/gallery/tondino-7.jpg"),
    },
    {
      caption: t`Ingresso di 2,05 mt. con catenaccio verticale`,
      image: require("assets/products/tondini/gallery/tondino-8.jpg"),
    },
    {
      caption: t`Tondino`,
      image: require("assets/products/tondini/gallery/tondino-9.jpg"),
    },
    {
      caption: t`Interno tondino coperto`,
      image: require("assets/products/tondini/gallery/tondino-10.jpg"),
    },
    {
      caption: t`Tondino`,
      image: require("assets/products/tondini/gallery/tondino-11.jpg"),
    },
    {
      caption: t`Tondino`,
      image: require("assets/products/tondini/gallery/tondino-12.jpg"),
    },
  ];

  const DIMENSIONS = [
    {
      file: `/products/tondini/scheda-techina-tondino-${locale!}.pdf`,
      label: t`Tondino coperto`,
    },
  ];

  const MANUALS = [
    {
      label: t`Come preparare il fondo`,
      link: "/tondini/come-preparare-il-fondo",
    },
  ];

  const BENEFITS: BeneftisProps = {
    benefits: [
      {
        description: (
          <Trans>
            È costituito da pannelli laterali in compensato marino fissati a
            colonne in acciaio zincato. La copertura in telo spalmato in PVC, è
            disponibile in bianco, verde o crema
          </Trans>
        ),
        icon: AccountBalance,
        title: <Trans>Materiali di qualità</Trans>,
      },
      {
        description: (
          <Trans>
            I nostri tondini sono considerati strutture precarie. Non avrete
            bisogno di nessuna concessione edilizia
          </Trans>
        ),
        icon: DomainDisabled,
        title: <Trans>Nessuna concessione edilizia</Trans>,
      },
      {
        description: (
          <Trans>
            É una struttura semplice, leggera e piacevole alla vista
          </Trans>
        ),
        icon: Visibility,
        title: <Trans>Bello e funzionale</Trans>,
      },
      {
        description: (
          <Trans>
            La struttura è stata progettata per garantire un carico neve fino a
            120 kg/mq e la velocità del vento fino a 110 km/h.
          </Trans>
        ),
        icon: Lock,
        title: <Trans>Sicuro</Trans>,
      },
    ],
    subtitle: t`Caratteristiche`,
    text: (
      <Trans>
        Il tondino coperto è adatto a svolgere molteplici attività, rappresenta
        la migliore soluzione per addestrare puledri in libertà o lavorare
        cavalli alla corda. Inoltre facilita il controllo del cavallo durante le
        lezioni ai principianti ed è indispensabile per il longeur durante le
        riprese di volteggi.
      </Trans>
    ),
    title: t`Scopri il nostro tondino Tecnohalle`,
  };

  const HERO = {
    image,
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

      <ContactUs />
    </>
  );
};

export default Tondini;
