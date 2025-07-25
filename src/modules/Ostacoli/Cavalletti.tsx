import { Trans,useLingui } from "@lingui/react/macro";
import { Grid, Typography } from "@mui/material";
import { Product, Title } from "components";
import { ProductDataTranslated } from "hooks/useProducts";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const Cavalletti: React.FC<{ products: ProductDataTranslated[] }> = ({
  products,
}) => {
  const { t } = useLingui();

  return (
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid
        size={{
          md: 6,
        }}
      >
        <Title
          title={t`Cavalletti Caprilli`}
          text={
            <Trans>
              <Typography mx={{ marginBottom: 15 }}>
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
      <Grid
        container
        spacing={PRODUCT_GUTTER}
        size={{
          md: 6,
        }}
      >
        {products.map((product, index) => (
          <Grid key={`cavalletti_${index}`} size={12}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Cavalletti;
