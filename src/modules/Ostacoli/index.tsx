import { Trans, t } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Section, Th } from "components";
import { usePages } from "hooks";
import React from "react";
import { ProductId } from "types/graphql";
import { getServerSidePropsWithProdcuts } from "utils/getProps";
import Barriere from "./Barriere";
import CandelieriLameForate from "./CandelieriElameForate";
import Cavalletti from "./Cavalletti";
import Cubi from "./Cubi";
import Cucchiai from "./CucchiaiSegnaletica";
import Fosso from "./Fosso";
import Segnaletica from "./Segnaletica";

import productsOstacoliBarriere_01 from "assets/products/ostacoli/barriere-01.png";
import productsOstacoliBarriere_02 from "assets/products/ostacoli/barriere-02.png";
import productsOstacoliBarriere_03 from "assets/products/ostacoli/barriere-03.png";
import productsOstacoliCavalletto_01 from "assets/products/ostacoli/cavalletto-01.png";
import productsOstacoliCavallettoBarriera_01 from "assets/products/ostacoli/cavalletto-barriera-01.png";
import productsOstacoliCubiMaxi_01 from "assets/products/ostacoli/cubi-maxi-01.png";
import productsOstacoliCubiMaxi_02 from "assets/products/ostacoli/cubi-maxi-02.png";
import productsOstacoliCubiMaxi_03 from "assets/products/ostacoli/cubi-maxi-03.png";
import productsOstacoliCubiMini_01 from "assets/products/ostacoli/cubi-mini-01.png";
import productsOstacoliCubiMini_02 from "assets/products/ostacoli/cubi-mini-02.png";
import productsOstacoliCubiMini_03 from "assets/products/ostacoli/cubi-mini-03.png";
import productsOstacoliFosso from "assets/products/ostacoli/fosso.png";

import { Colors } from "theme";

import { ProductData } from "components/Product";

export const getServerSideProps = getServerSidePropsWithProdcuts([
  ProductId.CubiMaxi,
  ProductId.CubiMini,
  ProductId.Barriera_3Mt,
  ProductId.Fosso,
  ProductId.CavallettiCaprilli,
  ProductId.CavallettiCaprilliBarrieraKit,
]);

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"];

const Ostacoli: React.FC<Props> = ({ products }) => {
  const { PAGES } = usePages();

  const CUBI: ProductData[] = [
    {
      ...products.CUBI_MINI,
      name: t`Cubi mini`,
      pictures: [
        productsOstacoliCubiMini_01,
        productsOstacoliCubiMini_02,
        productsOstacoliCubiMini_03,
      ],
      colors: [
        Colors.WHITE,
        Colors.BLU,
        Colors.YELLOW,
        Colors.RED,
        Colors.GREEN,
      ],
    },
    {
      ...products.CUBI_MAXI,
      name: t`Cubi maxi`,
      pictures: [
        productsOstacoliCubiMaxi_01,
        productsOstacoliCubiMaxi_02,
        productsOstacoliCubiMaxi_03,
      ],
      colors: [
        Colors.WHITE,
        Colors.BLU,
        Colors.YELLOW,
        Colors.RED,
        Colors.GREEN,
      ],
    },
  ];

  const FOSSO: ProductData = {
    ...products.FOSSO,
    pictures: [productsOstacoliFosso],
    name: t`Fosso`,
  };

  const BARRIERE: ProductData = {
    ...products.BARRIERA_3_MT,
    name: t`Barriera 3 mt.`,
    description: `Costruisci la tua barriera personalizzata scegliendo tra i colori a disposizione`,
    pictures: [
      productsOstacoliBarriere_01,
      productsOstacoliBarriere_02,
      productsOstacoliBarriere_03,
    ],
    colors: [Colors.BLU, Colors.GREEN, Colors.RED, Colors.WHITE, Colors.YELLOW],
  };

  const CAVALLETTI: ProductData[] = [
    {
      ...products.CAVALLETTI_CAPRILLI,
      name: t`Cavalletti Caprilli`,
      description: t`Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.`,
      pictures: [productsOstacoliCavalletto_01],
      colors: [
        Colors.WHITE,
        Colors.BLU,
        Colors.YELLOW,
        Colors.RED,
        Colors.GREEN,
      ],
    },
    {
      ...products.CAVALLETTI_CAPRILLI_BARRIERA_KIT,
      name: t`Kit Cavalletti Caprilli + barriera`,
      description: t`Kit comprensivo di 2 cavalletti e una barriera in PPO di colore bianco, diametro 95, lunghezza 2 mt.`,
      pictures: [productsOstacoliCavallettoBarriera_01],
    },
  ];

  return (
    <>
      <Section>
        <Th variant="h1">{PAGES.OSTACOLI.title}</Th>
        <Trans>
          <Typography>
            I nostri ostacoli sono progettati e costruiti per durare nel tempo
            non richiedono alcuna manutenzione e conservano, inalterata, la loro
            bellezza anche se lasciati nel campo per anni.
          </Typography>
          <Typography paragraph>
            Se gli ostacoli per il professionista sono uno strumento di lavoro,
            per molti altri appassionati rappresentano la realizzazione di un
            sogno. Noi abbiamo deciso di rendere questi strumenti resistenti nel
            tempo per fare in modo che questo sogno duri.
          </Typography>
          <Typography>
            Potrete scegliere le quantità e i colori nella nostra gamma di
            produzione e acquistare anche singoli pezzi di ricambio.
          </Typography>
        </Trans>
      </Section>

      <Section id="barriere" color="warm1">
        <Barriere product={BARRIERE} />
      </Section>

      <Section id="fosso">
        <Fosso product={FOSSO} />
      </Section>

      <Section id="cavalletti" color="warm1">
        <Cavalletti products={CAVALLETTI} />
      </Section>

      <Section id="cubi">
        <Cubi products={CUBI} />
      </Section>

      <Section id="candelierilameforate" color="warm1">
        <CandelieriLameForate />
      </Section>

      <Section id="cucchiai">
        <Cucchiai />
      </Section>

      <Section id="segnaletica" color="warm1">
        <Segnaletica />
      </Section>
    </>
  );
};

export default Ostacoli;
