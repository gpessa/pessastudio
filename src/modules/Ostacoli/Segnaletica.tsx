import { t, Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import productsOstacoliBandierine from "assets/products/ostacoli/bandierine.jpg";
import productsOstacoliNumeroLight from "assets/products/ostacoli/numero-light.png";
import productsOstacoliNumeroProfessional from "assets/products/ostacoli/numero-professional.png";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { MATERIALS } from "utils/constants";

const Segnaletica: React.FC = () => {
  const PRODUCTS: ProductData[] = [
    {
      name: t`Bandierine`,
      pictures: [productsOstacoliBandierine],
      materials: [MATERIALS.PLASTICA],
      price: 2.1,
    },
    {
      name: t`Numero per campo ostacoli professional`,
      pictures: [productsOstacoliNumeroProfessional],
      materials: [MATERIALS.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 26,
    },
    {
      name: t`Numero per campo ostacoli light`,
      pictures: [productsOstacoliNumeroLight],
      materials: [MATERIALS.POLIPROPILENE],
      width: 330,
      height: 330,
      weight: 1.25,
      price: 16,
    },
  ];

  return (
    <>
      <Title title={<Trans>Segnaletica</Trans>} />
      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid xs={12} md={6} item key={`segnaletica_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Segnaletica;
