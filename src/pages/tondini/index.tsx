import { t, Trans } from "@lingui/macro"
import { AccountBalance, DomainDisabled, Lock, Visibility } from "@mui/icons-material"
import { Grid } from "@mui/material"
import { Accessori, Benefits, ContentTable, Gallery, Hero, Section, TH } from "components"
import { Picture } from "components/ModalGallery"
import React from "react"
import { PRODUCT_GUTTER } from "theme"
import { GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE } from "utils/constants"

const Tondini: React.FC = () => {
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
            La rete antivento protegge l'interno della tondino da correnti d'aria consentendo il cavallo a rimanere
            concentrato durante l'allenamento.
          </Trans>
        ),
        images: [
          {
            src: require("assets/products/tondini/accessori/antivento-1.jpg").default,
            md: 3,
          },
          {
            src: require("assets/products/tondini/accessori/antivento-2.jpg").default,
            md: 4,
          },
        ],
      },
      {
        name: <Trans>Irrigazione</Trans>,
        description: (
          <Trans>
            Tutti i cavalieri sanno quanto sia spiacevole cavalcare in un ambiente polveroso.
            <br />
            La polvere può contribuire a problemi respiratori per te e per i tuoi cavalli e può indicare che il fondo
            non fornisce un adeguato un supporto allo zoccolo del cavallo. <br />
            Per ovviare a questo problema, è possibile installare il nostro sistema di irrigazione. Un rosone verrà
            posizionato al centro del tondino e ti permetterà di irrigarlo facilmente.
          </Trans>
        ),
        images: [
          {
            src: require("assets/products/tondini/accessori/irrigazione-1.jpg").default,
            md: 3,
          },
        ],
      },
      {
        name: <Trans>Rete antivento ingresso</Trans>,
        description: (
          <Trans>
            La rete antivento della porta è un’ulteriore protezione che offriamo per rendere ancora di più il tuo
            tondino sicuro in caso di forte vento e per garantire una maggiore concentrazione del tuo cavallo.
          </Trans>
        ),
        images: [
          {
            src: require("assets/products/tondini/accessori/antivento-port-ingresso-1.jpg").default,
            md: 3,
          },
          {
            src: require("assets/products/tondini/accessori/antivento-port-ingresso-2.jpg").default,
            md: 4,
          },
        ],
      },
      {
        name: <Trans>Chiusura a terra</Trans>,
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        images: [
          {
            src: require("assets/products/tondini/accessori/copertura-terra-1.jpg").default,
            md: 4,
            top: "60%",
            left: "30%",
          },
        ],
      },
    ],
  }

  const IMAGES: Picture[] = [
    {
      caption: t`Tondino coperto ${18} pannelli ${15} mt.`,
      src: require("assets/products/tondini/gallery/tondino-0.jpg").default,
    },
    {
      caption: t`Tondino coperto ${24} pannelli ${13.2} mt.`,
      src: require("assets/products/tondini/gallery/tondino-1.jpg").default,
    },
    {
      caption: t`Interno tondino coperto`,
      src: require("assets/products/tondini/gallery/tondino-2.jpg").default,
    },
    {
      caption: t`Interno tondino coperto`,
      src: require("assets/products/tondini/gallery/tondino-3.jpg").default,
    },
    {
      caption: t`Tondino coperto`,
      src: require("assets/products/tondini/gallery/tondino-4.jpg").default,
    },
    {
      caption: t`Copertura`,
      src: require("assets/products/tondini/gallery/tondino-5.jpg").default,
    },
    {
      caption: t`Copertura`,
      src: require("assets/products/tondini/gallery/tondino-6.jpg").default,
    },
    {
      caption: t`Copertura`,
      src: require("assets/products/tondini/gallery/tondino-7.jpg").default,
    },
    {
      caption: t`Ingresso di 2,05 mt. con catenaccio verticale`,
      src: require("assets/products/tondini/gallery/tondino-8.jpg").default,
    },
    {
      caption: t`Tondino`,
      src: require("assets/products/tondini/gallery/tondino-9.jpg").default,
    },
    {
      caption: t`Interno tondino coperto`,
      src: require("assets/products/tondini/gallery/tondino-10.jpg").default,
    },
    {
      caption: t`Tondino`,
      src: require("assets/products/tondini/gallery/tondino-11.jpg").default,
    },
  ]

  const DIMENSIONS = [
    { sides: 16, size: 13.2, file: require("assets/products/tondini/pdf/tondino-16.pdf").default },
    { sides: 18, size: 15.0, file: require("assets/products/tondini/pdf/tondino-18.pdf").default },
    { sides: 20, size: 16.6, file: require("assets/products/tondini/pdf/tondino-20.pdf").default },
    { sides: 22, size: 18.3, file: require("assets/products/tondini/pdf/tondino-22.pdf").default },
    { sides: 24, size: 19.9, file: require("assets/products/tondini/pdf/tondino-24.pdf").default },
  ].map(({ sides, size, file }) => ({
    label: <Trans id={`Tondino coperto {sides} pannelli {size} mt.`} values={{ sides, size }} />,
    file,
  }))

  const MANUALS = [
    {
      label: <Trans>Come preparare il fondo</Trans>,
      link: "/tondini/come-preparare-il-fondo",
    },
  ]

  const BENEFITS = [
    {
      icon: AccountBalance,
      title: <Trans>Materiali di qualità</Trans>,
      description: (
        <Trans>
          È costituito da pannelli laterali in compensato marino fissati a colonne in acciaio zincato. La copertura in
          telo spalmato in PVC, è disponibile in bianco, verde o crema
        </Trans>
      ),
    },
    {
      icon: DomainDisabled,
      title: <Trans>Nessuna concessione edilizia</Trans>,
      description: (
        <Trans>
          I nostri tondini sono considerati strutture precarie. Non avrete bisogno di nessuna concessione edilizia
        </Trans>
      ),
    },
    {
      icon: Visibility,
      title: <Trans>Bello e funzionale</Trans>,
      description: <Trans>É una struttura semplice, leggera e piacevole alla vista</Trans>,
    },
    {
      icon: Lock,
      title: <Trans>Sicuro</Trans>,
      description: (
        <Trans>
          La struttura è stata progettata per garantire un carico neve fino a 120 kg/mq e la velocità del vento fino a
          110 km/h.
        </Trans>
      ),
    },
  ]

  return (
    <>
      <Hero image={require("assets/pages/tondini/background.jpg").default} text={<Trans>Tondini</Trans>} />

      <Benefits
        benefits={BENEFITS}
        subtitle={<Trans>Caratteristiche</Trans>}
        title={<Trans>Scopri il nostro tondino Tecnohalle</Trans>}
        text={
          <Trans>
            Il tondino coperto è adatto a svolgere molteplici attività, rappresenta la migliore soluzione per addestrare
            puledri in libertà o lavorare cavalli alla corda. Inoltre facilita il controllo del cavallo durante le
            lezioni ai principianti ed è indispensabile per il longeur durante le riprese di volteggi.
          </Trans>
        }
      />

      <Section color="primary">
        <Gallery images={IMAGES} md={3} />
      </Section>

      <Accessori {...ACCESSORI} />

      <Section color="warm1">
        <TH variant="h4">{<Trans>Supporto clienti</Trans>}</TH>
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
  )
}

export default Tondini
