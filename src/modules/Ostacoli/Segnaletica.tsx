import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Grid } from "@mui/material";
import productsOstacoliBandierine from "assets/products/ostacoli/bandierine.jpg";
import productsOstacoliNumeroLight from "assets/products/ostacoli/numero-light.png";
import productsOstacoliNumeroProfessional from "assets/products/ostacoli/numero-professional.png";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { MATERIALS } from "utils/constants";
import { ProductId } from "utils/products";

const Segnaletica: React.FC = () => {
  useLingui(); // Fix on locale change

  const MODELS = {
    PROFESSIONAL: "professional",
    LIGHT: "light",
  };

  const PRODUCTS: ProductData[] = [
    {
      id: ProductId.Bandierine,
      name: t`Bandierine`,
      pictures: [productsOstacoliBandierine],
      materials: [MATERIALS.PLASTICA],
      price: 2.1,
    },
    {
      id: ProductId.NumeroCampoOstacoliProfessional,
      name: t`Numero per campo ostacoli ${MODELS.PROFESSIONAL}`,
      pictures: [productsOstacoliNumeroProfessional],
      materials: [MATERIALS.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 26,
    },
    {
      id: ProductId.NumeroCampoOstacoliLight,
      name: t`Numero per campo ostacoli ${MODELS.LIGHT}`,
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
      <Title title={t`Segnaletica`} />
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
