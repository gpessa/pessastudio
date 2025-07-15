import { Trans,useLingui } from "@lingui/react/macro";
import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductDataTranslated } from "hooks/useProducts";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const CucchiaiSegnaletica: React.FC<{ products: ProductDataTranslated[] }> = ({
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
