import { t, Trans } from "@lingui/macro"
import { AccountBalance, DomainDisabled, Lock, Visibility } from "@mui/icons-material"
import { Grid } from "@mui/material"
import React from "react"
import { Accessori, Benefits, ContentTable, Gallery, Hero, Section, TH } from "src/components"
import { Picture } from "src/components/ModalGallery"
import { GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE } from "src/constants"
import { PRODUCT_GUTTER } from "src/theme"

const ACCESSORI = {
  intro: (
    <Trans>
      Alcuni accessori possono essere acquistati separatamente e permettono di migliorare ulteriormente le condizioni
      d'uso.
    </Trans>
  ),
  accessories: [
    {
      name: <Trans>Rete antivento</Trans>,
      description: (
        <Trans>
          La rete antivento protegge l'interno della tondino da correnti d'aria inoltre aiuta il cavallo a rimanere
          concentrato mentre lo lavorate al suo interno.
        </Trans>
      ),
      images: [
        {
          src: require("src/static/products/tondini/accessori/antivento-1.jpg").default,
          md: 3,
        },
        {
          src: require("src/static/products/tondini/accessori/antivento-2.jpg").default,
          md: 4,
        },
      ],
    },
    {
      name: <Trans>Irrigazione</Trans>,
      description: <Trans>Un rosone posizionato nel centro ti permetterà di irrigare il tuo tondino.</Trans>,
      images: [
        {
          src: require("src/static/products/tondini/accessori/irrigazione-1.jpg").default,
          md: 3,
        },
      ],
    },
    {
      name: <Trans>Rete antivento ingresso</Trans>,
      description: (
        <Trans>
          La rete antivento della porta è un’ulteriore protezione che offriamo per rendere ancora di più il tuo tondino
          sicuro in caso di forte vendo e per garantire una maggiore concentrazione del tuo cavallo.
        </Trans>
      ),
      images: [
        {
          src: require("src/static/products/tondini/accessori/antivento-port-ingresso-1.jpg").default,
          md: 3,
        },
        {
          src: require("src/static/products/tondini/accessori/antivento-port-ingresso-2.jpg").default,
          md: 4,
        },
      ],
    },
    {
      name: <Trans>Chiusura a terra</Trans>,
      description: <Trans id={GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE} />,
      images: [
        {
          src: require("src/static/products/tondini/accessori/copertura-terra-1.jpg").default,
          md: 4,
          top: "60%",
          left: "30%",
        },
      ],
    },
  ],
}

const Tondini: React.FC = () => {
  const IMAGES: Picture[] = [
    {
      caption: <Trans id={`Tondino coperto {sides} pannelli {size} mt.`} values={{ sides: 18, size: 15 }} />,
      src: require("src/static/products/tondini/gallery/tondino-0.jpg").default,
    },
    {
      caption: <Trans id={`Tondino coperto {sides} pannelli {size} mt.`} values={{ sides: 24, size: 13.2 }} />,
      src: require("src/static/products/tondini/gallery/tondino-1.jpg").default,
    },
    {
      caption: t`Interno tondino coperto`,
      src: require("src/static/products/tondini/gallery/tondino-2.jpg").default,
    },
    {
      caption: t`Interno tondino coperto`,
      src: require("src/static/products/tondini/gallery/tondino-3.jpg").default,
    },
    {
      caption: t`Tondino coperto`,
      src: require("src/static/products/tondini/gallery/tondino-4.jpg").default,
    },
    {
      caption: t`Copertura`,
      src: require("src/static/products/tondini/gallery/tondino-5.jpg").default,
    },
    {
      caption: t`Copertura`,
      src: require("src/static/products/tondini/gallery/tondino-6.jpg").default,
    },
    {
      caption: t`Copertura`,
      src: require("src/static/products/tondini/gallery/tondino-7.jpg").default,
    },
    {
      caption: t`Ingresso`,
      src: require("src/static/products/tondini/gallery/tondino-8.jpg").default,
    },
  ]

  const DIMENSIONS = [
    { sides: 16, size: 13.2, file: require("src/static/products/tondini/pdf/tondino-16.pdf").default },
    { sides: 18, size: 15.0, file: require("src/static/products/tondini/pdf/tondino-18.pdf").default },
    { sides: 20, size: 16.6, file: require("src/static/products/tondini/pdf/tondino-20.pdf").default },
    { sides: 22, size: 18.3, file: require("src/static/products/tondini/pdf/tondino-22.pdf").default },
    { sides: 24, size: 19.9, file: require("src/static/products/tondini/pdf/tondino-24.pdf").default },
  ].map(({ sides, size, file }) => ({
    label: <Trans id={`Tondino coperto {sides} pannelli {size} mt.`} values={{ sides, size }} />,
    file,
  }))

  const MANUALS = [
    {
      label: t`Come preparare il fondo`,
      link: "/tondini/come-preparare-il-fondo",
    },
  ]

  const BENEFITS = [
    {
      icon: AccountBalance,
      title: t`Materiali di qualità`,
      description: (
        <Trans>
          Costituito da pannelli laterali in compensato marino, fissati a colonne in acciaio zincato. Copertura in telo
          spalmato in PVC disponibile in bianco, verde o crema
        </Trans>
      ),
    },
    {
      icon: DomainDisabled,
      title: t`Nessuna concessione edilizia`,
      description: (
        <Trans>
          I nostri tondini sono considerati strutture precarie. Non avrete bisogno di nessuna concessione edilizia
        </Trans>
      ),
    },
    {
      icon: Visibility,
      title: t`Bello e funzionale`,
      description: <Trans>É una struttura semplice, leggera e piacevole alla vista</Trans>,
    },
    {
      icon: Lock,
      title: t`Sicuro`,
      description: (
        <Trans>Ampio ingresso di 2,05 mt. dotato di catenaccio verticale che garantisce l’assoluta sicurezza</Trans>
      ),
    },
  ]

  return (
    <>
      <Hero image={require("src/static/pages/tondini/background.jpg").default} text={t`Tondini`} />

      <Benefits
        benefits={BENEFITS}
        subtitle={t`Caratteristiche`}
        title={t`Scopri il nostro tondino`}
        text={
          <Trans>
            Il tondino coperto è adatto a svolgere molteplici attività, per esempio è la migliore soluzione per
            addestrare puledri in libertà o lavorare cavalli alla corda, aiuta a facilitare il controllo dei vostri
            animali durante le lezioni ai principianti, nelle riprese dei pony ed è indispensabile per il longeur
            durante le riprese di volteggi.
          </Trans>
        }
      />

      <Section color="primary">
        <Gallery images={IMAGES} md={3} />
      </Section>

      <Accessori {...ACCESSORI} />

      <Section color="warm1">
        <TH variant="h4">{t`Servizio clienti`}</TH>
        <Grid container spacing={PRODUCT_GUTTER}>
          <Grid item xs={12} md={6}>
            <ContentTable title={t`Dimensioni`} rows={DIMENSIONS} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentTable title={t`Manuali`} rows={MANUALS} />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default Tondini
