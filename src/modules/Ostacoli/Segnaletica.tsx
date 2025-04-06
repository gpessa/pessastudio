import { t } from "@lingui/core/macro";
import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const Segnaletica: React.FC<{ products: ProductData[] }> = ({ products }) => (
  <>
    <Title title={t`Segnaletica`} />
    <Grid container spacing={PRODUCT_GUTTER}>
      {products.map((product, index) => (
        <Grid
          key={`segnaletica_${index}`}
          size={{
            md: 6,
            xs: 12
          }}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default Segnaletica;
