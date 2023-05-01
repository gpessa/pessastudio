import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Grid, Typography } from "@mui/material";
import assetsProductsOstacoliFosso from "assets/products/ostacoli/fosso.png";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { ProductId } from "types/graphql";

const Fosso: React.FC = () => {
  useLingui(); // Fix on locale change

  const PRODUCT: ProductData = {
    id: ProductId.Fosso,
    pictures: [assetsProductsOstacoliFosso],
    name: t`Fosso`,
    length: 1500,
    width: 2800,
    price: 440,
    height: 80,
  };

  return (
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid item xs={12} md={6}>
        <Title
          title={<Trans>Fosso</Trans>}
          text={
            <Trans>
              <Typography>
                Ottimo per insegnare ai vostri cavalli/puledri a saltarlo.
              </Typography>
              <Typography>
                Il fosso ha il fondo in PVC di colore azzurro con un bordo
                saldato alto 6 cm.
              </Typography>
            </Trans>
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Product {...PRODUCT} />
      </Grid>
    </Grid>
  );
};

export default Fosso;
