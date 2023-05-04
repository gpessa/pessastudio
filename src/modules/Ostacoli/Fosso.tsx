import { Trans } from "@lingui/macro";
import { Grid, Typography } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const Fosso: React.FC<{ product: ProductData }> = ({ product }) => (
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
              Il fosso ha il fondo in PVC di colore azzurro con un bordo saldato
              alto 6 cm.
            </Typography>
          </Trans>
        }
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <Product {...product} />
    </Grid>
  </Grid>
);

export default Fosso;
