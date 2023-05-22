import { t } from "@lingui/macro";
import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const CucchiaiSegnaletica: React.FC<{ products: ProductData[] }> = ({
  products,
}) => (
  <>
    <Title sx={{ mb: PRODUCT_GUTTER }} title={t`Cucchiai`} />

    <Grid container spacing={PRODUCT_GUTTER}>
      {products.map((product, index) => (
        <Grid item xs={12} key={`cucchiai-segnaletica_${index}`}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default CucchiaiSegnaletica;
