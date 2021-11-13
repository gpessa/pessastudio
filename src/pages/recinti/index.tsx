import { Columns, ContentTable, Gallery, Section, TH } from "src/components"
import { t, Trans } from "@lingui/macro"
import { Typography } from "@mui/material"
import { withPrefix } from "gatsby"
import React from "react"
import Accessori from "./_accessori"
import Gamma from "./_gamma"
import { Picture } from "src/components/ModalGallery"

const Recinti: React.FC = () => {
  const IMAGES: Picture[] = [
    {
      src: require("src/static/products/recinti/gallery/recinti-image-7.jpg").default,
      caption: <Trans id="Recinzione 2 filagne" />,
    },
    {
      src: require("src/static/products/recinti/gallery/recinti-image-8.jpg").default,
      caption: <Trans id="Recinzione 2 filagne" />,
    },
    {
      src: require("src/static/products/recinti/gallery/recinti-image-2.jpg").default,
      caption: <Trans id="Recinzione 3 filagne" />,
    },
    {
      src: require("src/static/products/recinti/gallery/recinti-image-4.jpg").default,
      caption: <Trans id="Recinzione 2 filagne" />,
    },
    {
      src: require("src/static/products/recinti/gallery/recinti-image-5.jpg").default,
      caption: <Trans id="Recinzione 2 filagne" />,
    },
    {
      src: require("src/static/products/recinti/gallery/recinti-image-6.jpg").default,
      caption: <Trans id="Recinzione 2 filagne" />,
    },
  ]

  const FILES = [
    {
      label: t`Come preparare il fondo`,
      link: "/recinti/come-preparare-il-fondo",
    },
    {
      label: t`Istruzioni di montaggio`,
      file: require("src/static/recinti-istruzioni-montaggio.pdf").default,
    },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <TH variant="h1">{t`Recinti`}</TH>
            <Trans>
              <Typography paragraph>
                Le recinzioni <strong>TECNOFENCE</strong> sono realizzate con materiale particolarmente adatto a durare
                nel tempo anche in presenza delle più avverse condizioni meteorologiche.
              </Typography>
              <Typography paragraph>
                Sono in grado di sopportare senza rompersi i calci e le spinte dei cavalli. A differenza del legno o di
                altri prodotti utilizzati per il medesimo scopo, gli animali non mordono la recinzione.
              </Typography>
              <Typography paragraph>
                <strong>TECNOFENCE</strong>, non presenta spigoli vivi e inoltre, essendo elastica, è in grado di
                assorbire gli urti senza rompersi evitando cosi di provocare infortuni a persone e animali.
              </Typography>
              <Typography paragraph>
                Il materiale impiegato è lo stesso che viene utilizzato per la produzione di serramenti dove
                l’inalterabilità del colore e delle caratteristiche tecniche sono condizioni indispensabili per
                garantire un prodotto di qualità. L’inclusione di inibitori dei raggi ultravioletti consente anche di
                prevenire crepe e rotture e di resistere alla corrosione e allo sfogliamento mantenendo inalterate le
                caratteristiche originali anche con temperature variabili da +70 °C a -20 °C.
              </Typography>
              <Typography paragraph>
                Principalmente prodotte nel colore bianco, possono essere fornite, a richiesta, anche nel colore verde.
              </Typography>
              <Typography paragraph>
                In ogni recinzione inoltre si possono inserire uno o più cancelli scorrevoli in alluminio.
              </Typography>
              <Typography paragraph>
                Tutte le nostre recinzioni sono personalizzate in base alle esigenze di metratura e di figura del
                cliente.
              </Typography>
            </Trans>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Gamma />

      <Accessori />

      <Section>
        <TH variant="h2">{t`Servizio clienti`}</TH>
        <ContentTable title={t`Manuale d'istruzioni`} rows={FILES} />
      </Section>
    </>
  )
}

export default Recinti
