import { t, Trans } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Columns, ContentTable, Gallery, Section, Th } from "components";
import { Picture } from "components/ModalGallery";
import { usePages } from "hooks";
import { useRouter } from "next/router";
import React from "react";
import Accessori from "./_accessori";
import Gamma from "./_gamma";

import assetsProductsRecintiGalleryRecintiImage2 from "assets/products/recinti/gallery/recinti-image-2.jpg";
import assetsProductsRecintiGalleryRecintiImage4 from "assets/products/recinti/gallery/recinti-image-4.jpg";
import assetsProductsRecintiGalleryRecintiImage5 from "assets/products/recinti/gallery/recinti-image-5.jpg";
import assetsProductsRecintiGalleryRecintiImage6 from "assets/products/recinti/gallery/recinti-image-6.jpg";
import assetsProductsRecintiGalleryRecintiImage7 from "assets/products/recinti/gallery/recinti-image-7.jpg";
import assetsProductsRecintiGalleryRecintiImage8 from "assets/products/recinti/gallery/recinti-image-8.jpg";

const Recinti: React.FC = () => {
  const { PAGES } = usePages();
  const { locale } = useRouter();

  const IMAGES: Picture[] = [
    {
      image: assetsProductsRecintiGalleryRecintiImage7,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: assetsProductsRecintiGalleryRecintiImage8,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: assetsProductsRecintiGalleryRecintiImage2,
      caption: t`Recinzione cavalli a ${3} filagne`,
    },
    {
      image: assetsProductsRecintiGalleryRecintiImage4,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: assetsProductsRecintiGalleryRecintiImage5,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: assetsProductsRecintiGalleryRecintiImage6,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
  ];

  const FILES = {
    it: [
      {
        label: PAGES.RECINTI_COME_PREPARARE_IL_FONDO.title,
        link: PAGES.RECINTI_COME_PREPARARE_IL_FONDO.url,
      },
      {
        label: <Trans>Istruzioni di montaggio</Trans>,
        file: "/products/recinti/recinti-istruzioni-montaggio.pdf",
      },
    ],
  }[locale!];

  return (
    <>
      <Columns
        left={
          <>
            <Th variant="h1">{<Trans>Recinti</Trans>}</Th>
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

      <Gamma />

      <Accessori />

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
