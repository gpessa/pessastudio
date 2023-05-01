import { t, Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { MATERIALS } from "utils/constants";

import { useLingui } from "@lingui/react";
import assetsProductsOstacoliCucchiaioDe_01 from "assets/products/ostacoli/cucchiaio-de-01.png";
import assetsProductsOstacoliCucchiaioDe_02 from "assets/products/ostacoli/cucchiaio-de-02.png";
import assetsProductsOstacoliCucchiaioDe_03 from "assets/products/ostacoli/cucchiaio-de-03.png";
import assetsProductsOstacoliCucchiaioPs_01 from "assets/products/ostacoli/cucchiaio-ps-01.png";
import assetsProductsOstacoliCucchiaioPs_02 from "assets/products/ostacoli/cucchiaio-ps-02.png";
import assetsProductsOstacoliCucchiaioPs_03 from "assets/products/ostacoli/cucchiaio-ps-03.png";
import assetsProductsOstacoliSupportoDiSicurezza_01 from "assets/products/ostacoli/supporto-di-sicurezza-01.png";
import assetsProductsOstacoliSupportoDiSicurezza_03 from "assets/products/ostacoli/supporto-di-sicurezza-03.png";
import assetsProductsOstacoliSupportoDiSicurezza_04 from "assets/products/ostacoli/supporto-di-sicurezza-04.png";
import { ProductId } from "types/graphql";

const CucchiaiSegnaletica: React.FC = () => {
  useLingui(); // Fix on locale change

  const MODELS = {
    DE: "DE",
    PS: "PS",
  };

  const PRODUCTS: ProductData[] = [
    {
      id: ProductId.CucchiaioDe,
      name: t`Cucchiaio ${MODELS.DE}`,
      description: (
        <Trans>
          Il cucchiaio standard utilizzato al livello internazionale
        </Trans>
      ),
      pictures: [
        assetsProductsOstacoliCucchiaioDe_01,
        assetsProductsOstacoliCucchiaioDe_02,
        assetsProductsOstacoliCucchiaioDe_03,
      ],
      materials: [MATERIALS.TECNOPOLIMERO],
      depth: 20,
      weight: 0.15,
      price: 3.5,
    },
    {
      id: ProductId.CucchiaioPs,
      name: t`Cucchiaio ${MODELS.PS}`,
      description: (
        <Trans>
          Il cucchiaio dotato del nostro sistema brevettato di aggancio
        </Trans>
      ),
      pictures: [
        assetsProductsOstacoliCucchiaioPs_01,
        assetsProductsOstacoliCucchiaioPs_02,
        assetsProductsOstacoliCucchiaioPs_03,
      ],
      materials: [MATERIALS.TECNOPOLIMERO],
      price: 4.5,
    },
    {
      id: ProductId.SupportoSicurezza,
      name: t`Supporto di sicurezza`,
      description: (
        <Trans>
          Supporti di sicurezza da applicare ai nostri cucchiai per
          salvaguardare l'integrità degli arti dei vostri cavalli in maniera
          efficace ed economica.
        </Trans>
      ),
      pictures: [
        assetsProductsOstacoliSupportoDiSicurezza_01,
        assetsProductsOstacoliSupportoDiSicurezza_03,
        assetsProductsOstacoliSupportoDiSicurezza_04,
      ],
      materials: [MATERIALS.PLASTICA],
      width: 37,
      weight: 0.05,
      price: 4,
    },
  ];

  return (
    <>
      <Title sx={{ mb: PRODUCT_GUTTER }} title={t`Cucchiai`} />

      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12} key={`cucchiai-segnaletica_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CucchiaiSegnaletica;
