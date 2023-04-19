import { t, Trans } from "@lingui/macro";
import { Grid, Typography } from "@mui/material";
import { Product, Title } from "components";
import React from "react";
import { Colors, PRODUCT_GUTTER } from "theme";

import productsOstacoliCavalletto_01 from "assets/products/ostacoli/cavalletto-01.png";
import productsOstacoliCavallettoBarriera_01 from "assets/products/ostacoli/cavalletto-barriera-01.png";
import { ProductData } from "components/Product";

const Cavalletti: React.FC = () => {
  const PRODUCTS: ProductData[] = [
    {
      name: t`Cavalletti Caprilli`,
      description: (
        <Trans>
          Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.
        </Trans>
      ),
      pictures: [productsOstacoliCavalletto_01],
      thickness: 100,
      length: 500,
      height: 500,
      weight: 2,
      price: [{ price: 34, note: <Trans>Singolo cavvalleto</Trans> }],
      colors: [
        Colors.WHITE,
        Colors.BLU,
        Colors.YELLOW,
        Colors.RED,
        Colors.GREEN,
      ],
    },
    {
      name: t`Kit Cavalletti Caprilli + barriera`,
      description: (
        <Trans>
          Kit comprensivo di 2 cavalletti e una barriera in PPO di colore
          bianco, diametro 95, lunghezza 2 mt.
        </Trans>
      ),
      pictures: [productsOstacoliCavallettoBarriera_01],
      diameter: 85,
      length: 2000,
      weight: 5.3,
      price: 92,
    },
  ];

  return (
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid item md={6}>
        <Title
          title={<Trans>Cavalletti Caprilli</Trans>}
          text={
            <Trans>
              <Typography paragraph>
                I cavalletti Caprilli rappresentano uno strumento essenziale per
                l'allenamento del vostro animale, il passaggio sui cavalletti,
                rinforza la schiena del cavallo, scioglie la muscolatura e lo
                induce a flettere le articolazioni.
              </Typography>
              <Typography>
                Lavati con idropulitrice riprendono i colori originari anche
                dopo 20 anni.
              </Typography>
            </Trans>
          }
        />
      </Grid>
      <Grid item container md={6} spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12} key={`cavalletti_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Cavalletti;
