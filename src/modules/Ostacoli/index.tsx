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

import assetsProductsOstacoliCubiMaxi_01 from "assets/products/ostacoli/cubi-maxi-01.png";
import assetsProductsOstacoliCubiMaxi_02 from "assets/products/ostacoli/cubi-maxi-02.png";
import assetsProductsOstacoliCubiMaxi_03 from "assets/products/ostacoli/cubi-maxi-03.png";
import assetsProductsOstacoliCubiMini_01 from "assets/products/ostacoli/cubi-mini-01.png";
import assetsProductsOstacoliCubiMini_02 from "assets/products/ostacoli/cubi-mini-02.png";
import assetsProductsOstacoliCubiMini_03 from "assets/products/ostacoli/cubi-mini-03.png";

import { ProductData } from "components/Product";
import { Colors } from "theme";

export const getServerSideProps = getServerSidePropsWithProdcuts([
  ProductId.CubiMaxi,
  ProductId.CubiMini,
]);

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"];

const Ostacoli: React.FC<Props> = ({ products }) => {
  const { PAGES } = usePages();

  const CUBI: ProductData[] = [
    {
      ...products[ProductId.CubiMini],
      name: t`Cubi mini`,
      pictures: [
        assetsProductsOstacoliCubiMini_01,
        assetsProductsOstacoliCubiMini_02,
        assetsProductsOstacoliCubiMini_03,
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
      ...products[ProductId.CubiMaxi],
      name: t`Cubi maxi`,
      pictures: [
        assetsProductsOstacoliCubiMaxi_01,
        assetsProductsOstacoliCubiMaxi_02,
        assetsProductsOstacoliCubiMaxi_03,
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
        <Barriere />
      </Section>

      <Section id="fosso">
        <Fosso />
      </Section>

      <Section id="cavalletti" color="warm1">
        <Cavalletti />
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
