import { t, Trans } from "@lingui/macro";
import { Grid, Typography } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const Cavalletti: React.FC<{ products: ProductData[] }> = ({ products }) => (
  <Grid container spacing={PRODUCT_GUTTER}>
    <Grid item md={6}>
      <Title
        title={t`Cavalletti Caprilli`}
        text={
          <Trans>
            <Typography paragraph>
              I cavalletti Caprilli rappresentano uno strumento essenziale per
              l'allenamento del vostro animale, il passaggio sui cavalletti,
              rinforza la schiena del cavallo, scioglie la muscolatura e lo
              induce a flettere le articolazioni.
            </Typography>
            <Typography>
              Lavati con idropulitrice riprendono i colori originari anche dopo
              20 anni.
            </Typography>
          </Trans>
        }
      />
    </Grid>
    <Grid item container md={6} spacing={PRODUCT_GUTTER}>
      {products.map((product, index) => (
        <Grid item xs={12} key={`cavalletti_${index}`}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default Cavalletti;
