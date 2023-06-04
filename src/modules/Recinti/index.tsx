import { t, Trans } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Columns, ContentTable, Gallery, Section, Th } from "components";
import { usePages } from "hooks";
import { useRouter } from "next/router";
import React from "react";
import Accessori from "./_accessori";
import Gamma from "./_gamma";

import { useLingui } from "@lingui/react";
import productsRecintiGalleryRecintiImage2 from "assets/products/recinti/gallery/recinti-image-2.jpg";
import productsRecintiGalleryRecintiImage4 from "assets/products/recinti/gallery/recinti-image-4.jpg";
import productsRecintiGalleryRecintiImage5 from "assets/products/recinti/gallery/recinti-image-5.jpg";
import productsRecintiGalleryRecintiImage6 from "assets/products/recinti/gallery/recinti-image-6.jpg";
import productsRecintiGalleryRecintiImage7 from "assets/products/recinti/gallery/recinti-image-7.jpg";
import productsRecintiGalleryRecintiImage8 from "assets/products/recinti/gallery/recinti-image-8.jpg";
import productsRecintiPiedeMobile2 from "assets/products/recinti/piede-mobile-2.png";
import productsRecintiPiedeMobile3 from "assets/products/recinti/piede-mobile-3.png";
import productsRecintiPiedeMobile4 from "assets/products/recinti/piede-mobile-4.jpg";
import productsRecintiSvg1 from "assets/products/recinti/svg-1.svg";
import productsRecintiSvg2 from "assets/products/recinti/svg-2.svg";
import productsRecintiSvg3 from "assets/products/recinti/svg-3.svg";
import productsRecintiSvg4 from "assets/products/recinti/svg-4.svg";
import { ProductData } from "components/Product";
import { Colors } from "theme";
import { Material } from "utils/constants";
import { ProductId } from "utils/products";
export { getStaticProps } from "utils/getProps";

const Recinti: React.FC = () => {
  useLingui(); // Fix on locale change
  const { PAGES } = usePages();
  const { locale } = useRouter();

  const IMAGES: Picture[] = [
    {
      image: productsRecintiGalleryRecintiImage7,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: productsRecintiGalleryRecintiImage8,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: productsRecintiGalleryRecintiImage2,
      caption: t`Recinzione cavalli a ${3} filagne`,
    },
    {
      image: productsRecintiGalleryRecintiImage4,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: productsRecintiGalleryRecintiImage5,
      caption: t`Recinzione cavalli a ${2} filagne`,
    },
    {
      image: productsRecintiGalleryRecintiImage6,
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
        label: t`Istruzioni di montaggio`,
        file: "/products/recinti/recinti-istruzioni-montaggio.pdf",
      },
    ],
  }[locale!];

  const PRODUCTS: ProductData[] = [
    {
      height: 1250,
      name: t`Recinzione cavalli a ${1} filagna`,
      id: ProductId.RECINZIONE_1_FILAGNA,
      pictures: [productsRecintiSvg1],
      colors: [Colors.WHITE],
      materials: [Material.POLIPROPILENE],
      description: t`La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa`,
    },
    {
      height: 1400,
      name: t`Recinzione cavalli a ${2} filagne`,
      id: ProductId.RECINZIONE_2_FILAGNE,
      pictures: [productsRecintiSvg2],
      colors: [Colors.WHITE],
      materials: [Material.POLIPROPILENE],
      description: t`La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare paddock dove i cavalli sono comunque osservati dal personale presente`,
    },
    {
      height: 1650,
      name: t`Recinzione cavalli a ${3} filagne`,
      id: ProductId.RECINZIONE_3_FILAGNE,
      pictures: [productsRecintiSvg3],
      colors: [Colors.WHITE],
      materials: [Material.POLIPROPILENE],
      description: t`La recinzione a tre filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al giorno incustoditi oppure per delimitare confini di proprietà o aree. Per garantirne una maggiore sicurezza è possibile installare un impianto d'elettrificazione sulle filagne`,
    },
    {
      height: 1950,
      name: t`Recinzione cavalli a ${4} filagne`,
      id: ProductId.RECINZIONE_4_FILAGNE,
      pictures: [productsRecintiSvg4],
      colors: [Colors.WHITE],
      materials: [Material.POLIPROPILENE],
      description: t`Le recinzioni a quattro filagne sono utilizzate per delimitare paddock per stalloni, realizzare tondini per la doma e l'addestramento o per formare ovali per il salto in libertà`,
    },
  ];

  const ACCESSORI: ProductData[] = [
    {
      colors: [Colors.WHITE, Colors.GREEN],
      description: t`Diamo la possibilità di montare nella vostra recinzione un piede mobile che vi consentirà di posizionarla e spostarla a seconda delle vostre esigenze`,
      name: t`Piede mobile`,
      height: 300,
      id: ProductId.RECINZIONE_PIEDE_MOBILE,
      pictures: [
        productsRecintiPiedeMobile2,
        productsRecintiPiedeMobile3,
        productsRecintiPiedeMobile4,
      ],
      price: 35,
    },
  ];

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

      <Gamma products={PRODUCTS} />

      <Accessori products={ACCESSORI} />

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
