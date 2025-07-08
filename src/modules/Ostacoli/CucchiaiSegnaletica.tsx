import { useLingui, Trans } from "@lingui/react/macro";

import { Grid } from "@mui/material";
import React from "react";
import { Product, Title } from "components";
import { ProductData } from "hooks/useProducts";
import { PRODUCT_GUTTER } from "theme";

const CucchiaiSegnaletica: React.FC<{ products: ProductData[] }> = ({
  products,
}) => {
  const { t } = useLingui();

  return (
    <>
      <Title sx={{ mb: PRODUCT_GUTTER }} title={t`Cucchiai`} />

      <Grid container spacing={PRODUCT_GUTTER}>
        {products.map((product, index) => (
          <Grid key={`cucchiai-segnaletica_${index}`} size={12}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CucchiaiSegnaletica;
