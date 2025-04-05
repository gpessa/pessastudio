import { t, Trans } from "@lingui/macro";
import { Grid, Typography } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const Cubi: React.FC<{ products: ProductData[] }> = ({ products }) => (
  <>
    <Title
      sx={{ mb: PRODUCT_GUTTER }}
      title={t`Cubi per campo ostacoli`}
      text={
        <Trans>
          <Typography>
            Bianchi, rossi, blu o gialli, sono utilizzati nei maneggi sia come
            riempitivi sotto le barriere, sia per realizzare sequenze di piccoli
            salti.
          </Typography>
          <Typography>
            Ottimi per indicare le traiettorie quando si predispongono esercizi
            per i principianti ma anche per preparare una successione di
            cavalletti quando si addestrano cavalli.
          </Typography>
          <Typography>
            Sovrapponibili, costruiti con plastica resistente agli agenti
            atmosferici, nel caso di impatto accidentale garantiscono
            l'incolumità di cavalli e cavalieri.
          </Typography>
        </Trans>
      }
    />

    <Grid container spacing={PRODUCT_GUTTER}>
      {products.map((product, index) => (
        <Grid key={`cubi_${index}`} size={12}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </>
);
export default Cubi;
