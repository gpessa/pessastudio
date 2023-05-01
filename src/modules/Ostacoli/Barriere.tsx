import { Trans, t } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Product, Title } from "components";
import { Colors, PRODUCT_GUTTER } from "theme";

import { useLingui } from "@lingui/react";
import productsOstacoliBarriere_01 from "assets/products/ostacoli/barriere-01.png";
import productsOstacoliBarriere_02 from "assets/products/ostacoli/barriere-02.png";
import productsOstacoliBarriere_03 from "assets/products/ostacoli/barriere-03.png";
import { ProductData } from "components/Product";
import { ProductId } from "types/graphql";

const Barriere = () => {
  useLingui(); // Fix on locale change

  const PRODUCT: ProductData = {
    id: ProductId.Barriera_3Mt,
    description: (
      <Trans>
        Costruisci la tua barriera personalizzata scegliendo tra i colori a
        disposizione
      </Trans>
    ),
    name: t`Barriera 3 mt.`,
    pictures: [
      productsOstacoliBarriere_01,
      productsOstacoliBarriere_02,
      productsOstacoliBarriere_03,
    ],
    price: 50,
    weight: 9.75,
    length: 2990,
    diameter: 95,
    colors: [Colors.BLU, Colors.GREEN, Colors.RED, Colors.WHITE, Colors.YELLOW],
  };

  return (
    <>
      <Title
        sx={{ mb: PRODUCT_GUTTER }}
        title={t`Barriere`}
        text={
          <Trans>
            <Typography>
              Sono le componenti dell'ostacolo più stressate, poiché, come i
              candelieri e i pilieri, sono perennemente sottoposte all'azione
              aggressiva degli agenti atmosferici (caldo, freddo, sole,
              pioggia). A questi si aggiungono anche gli urti degli zoccoli dei
              cavalli, frequenti ribaltamenti e le manipolazioni necessarie per
              aggiustarne le altezze.
            </Typography>
            <Typography>
              Le barriere di abete, comunemente usate, richiedono una continua
              manutenzione perché si piegano, scoloriscono nel tempo e si
              rompono frequentemente.
            </Typography>
            <Typography>
              Le barriere sintetiche di Pessastudio, invece, hanno lo stesso
              peso di quelle in abete, ma perdono il loro colore solamente dopo
              anni, non si scrostano e, solo raramente, si rompono sotto
              l'azione di un carico eccessivo.
            </Typography>
          </Trans>
        }
      />
      <Product {...PRODUCT} />
    </>
  );
};

export default Barriere;
