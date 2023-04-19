import { t, Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import { PRODUCT_GUTTER } from "theme";
import { MATERIALS } from "utils/constants";

import productsOstacoliCandelierePvc_01 from "assets/products/ostacoli/candeliere-pvc-01.png";
import productsOstacoliCandelierePvc_02 from "assets/products/ostacoli/candeliere-pvc-02.png";
import productsOstacoliCandelierePvc_03 from "assets/products/ostacoli/candeliere-pvc-03.png";
import productsOstacoliLamaDe_01 from "assets/products/ostacoli/lama-de-01.png";
import productsOstacoliLamaDe_02 from "assets/products/ostacoli/lama-de-02.png";
import productsOstacoliLamaDe_03 from "assets/products/ostacoli/lama-de-03.png";

const CandelieriLameForate = () => {
  const PRODUCTS: ProductData[] = [
    {
      name: t`Candeliere con piede in PVC`,
      description: (
        <Trans>
          I candelieri sono costruiti con un montante di alluminio verniciato di
          colore bianco e sono muniti di 4 piedi rivestiti con puntali di
          plastica che garantiscono, in caso di ribaltamento, l’incolumità
          vostra e dei vostri cavalli.
        </Trans>
      ),
      pictures: [
        productsOstacoliCandelierePvc_03,
        productsOstacoliCandelierePvc_02,
        productsOstacoliCandelierePvc_01,
      ],
      width: 720,
      depth: 720,
      height: 1700,
      weight: 7,
      price: [
        { price: 89, note: <Trans>Altezza {170} cm.</Trans> },
        { price: 96, note: <Trans>Lama {190} cm.</Trans> },
      ],
    },
    {
      name: t`Lama DE da 50/150 cm.`,
      materials: [MATERIALS.ACCIAIO_ZINCATO],
      description: (
        <Trans>
          Per consentirvi di realizzare ostacoli di vostra creazione possiamo
          fornirvi le lame forate in due diverse lunghezze.
        </Trans>
      ),
      pictures: [
        productsOstacoliLamaDe_02,
        productsOstacoliLamaDe_01,
        productsOstacoliLamaDe_03,
      ],
      length: 500,
      thickness: 2,
      width: 65,
      price: [
        { price: 8.5, note: <Trans>Lama {50} cm.</Trans> },
        { price: 17.0, note: <Trans>Lama {150} cm.</Trans> },
      ],
    },
  ];

  return (
    <>
      <Title
        sx={{ mb: PRODUCT_GUTTER }}
        title={<Trans>Candelieri e lame forate</Trans>}
      />
      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12} key={`candelieri_lame_forate_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CandelieriLameForate;
