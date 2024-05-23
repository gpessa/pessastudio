import { t, Trans } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Columns, ContentTable, Gallery, Section, Th } from "components";
import { usePages, useProducts } from "hooks";
import { useRouter } from "next/router";
import React from "react";
import Accessori from "./_accessori";
import Gamma from "./_gamma";

export { getStaticProps } from "utils/getProps";

const Recinti: React.FC = () => {
  const {
    RECINZIONE_1_FILAGNA,
    RECINZIONE_2_FILAGNE,
    RECINZIONE_3_FILAGNE,
    RECINZIONE_4_FILAGNE,
    RECINZIONE_PIEDE_MOBILE,
  } = useProducts();
  const { PAGES } = usePages();
  const { locale } = useRouter();

  const IMAGES: Picture[] = [
    {
      caption: t`Recinzione cavalli a ${2} filagne`,
      image: require("assets/products/recinti/gallery/recinti-image-7.jpg"),
    },
    {
      caption: t`Recinzione cavalli a ${2} filagne`,
      image: require("assets/products/recinti/gallery/recinti-image-8.jpg"),
    },
    {
      caption: t`Recinzione cavalli a ${3} filagne`,
      image: require("assets/products/recinti/gallery/recinti-image-2.jpg"),
    },
    {
      caption: t`Recinzione cavalli a ${2} filagne`,
      image: require("assets/products/recinti/gallery/recinti-image-4.jpg"),
    },
    {
      caption: t`Recinzione cavalli a ${2} filagne`,
      image: require("assets/products/recinti/gallery/recinti-image-5.jpg"),
    },
    {
      caption: t`Recinzione cavalli a ${2} filagne`,
      image: require("assets/products/recinti/gallery/recinti-image-6.jpg"),
    },
  ];

  const FILES = {
    it: [
      {
        label: PAGES.RECINTI_COME_PREPARARE_IL_FONDO.title,
        link: PAGES.RECINTI_COME_PREPARARE_IL_FONDO.url,
      },
      {
        file: "/products/recinti/recinti-istruzioni-montaggio.pdf",
        label: t`Istruzioni di montaggio`,
      },
    ],
  }[locale!];

  return (
    <>
      <Columns
        left={
          <>
            <Th variant="h1">{PAGES.RECINTI.title}</Th>
            <Trans>
              <Typography paragraph>
                Le recinzioni <strong>TECNOFENCE</strong> sono realizzate con
                materiale particolarmente adatto a durare nel tempo anche in
                presenza delle più avverse condizioni meteorologiche.
              </Typography>
              <Typography paragraph>
                A differenza del legno o di altri prodotti utilizzati per il
                medesimo scopo, gli animali non mordono la recinzione.
              </Typography>
              <Typography paragraph>
                <strong>TECNOFENCE</strong>, non presenta spigoli vivi e
                inoltre, essendo elastica, è in grado di assorbire gli urti
                senza rompersi evitando cosi di provocare infortuni a persone e
                animali.
              </Typography>
              <Typography paragraph>
                Il materiale impiegato è lo stesso che viene utilizzato per la
                produzione di serramenti dove l’inalterabilità del colore e
                delle caratteristiche tecniche sono condizioni indispensabili
                per garantire un prodotto di qualità. L’inclusione di inibitori
                dei raggi ultravioletti consente anche di prevenire crepe e
                rotture e di resistere alla corrosione e allo sfogliamento
                mantenendo inalterate le caratteristiche originali anche con
                temperature variabili da +70 °C a -20 °C.
              </Typography>
              <Typography paragraph>
                Principalmente prodotte nel colore bianco, possono essere
                fornite, a richiesta, anche nel colore verde.
              </Typography>
              <Typography paragraph>
                In ogni recinzione inoltre si possono inserire uno o più
                cancelli scorrevoli in alluminio.
              </Typography>
              <Typography paragraph>
                Tutte le nostre recinzioni sono personalizzate in base alle
                esigenze di metratura e di figura del cliente.
              </Typography>
            </Trans>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Gamma
        products={[
          RECINZIONE_1_FILAGNA,
          RECINZIONE_2_FILAGNE,
          RECINZIONE_3_FILAGNE,
          RECINZIONE_4_FILAGNE,
        ]}
      />

      <Accessori products={[RECINZIONE_PIEDE_MOBILE]} />

      {FILES && (
        <Section>
          <Th variant="h2">{<Trans>Supporto clienti</Trans>}</Th>
          <ContentTable
            title={<Trans>Manuale d'istruzioni</Trans>}
            rows={FILES}
          />
        </Section>
      )}
    </>
  );
};

export default Recinti;
