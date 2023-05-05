import { t, Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import { Product, Section, Th } from "components";
import { Colors, PRODUCT_GUTTER } from "theme";

import { useLingui } from "@lingui/react";
import assetsProductsRecintiPiedeMobile2 from "assets/products/recinti/piede-mobile-2.png";
import assetsProductsRecintiPiedeMobile3 from "assets/products/recinti/piede-mobile-3.png";
import assetsProductsRecintiPiedeMobile4 from "assets/products/recinti/piede-mobile-4.jpg";
import { ProductData } from "components/Product";
import { ProductId } from "utils/products";

const Accessori = () => {
  useLingui(); // Fix on locale change

  const PRODUCTS: ProductData[] = [
    {
      colors: [Colors.WHITE, Colors.GREEN],
      description: (
        <Trans>
          Diamo la possibilità di montare nella vostra recinzione un piede
          mobile che vi consentirà di posizionarla e spostarla a seconda delle
          vostre esigenze
        </Trans>
      ),
      name: t`Piede mobile`,
      height: 300,
      id: ProductId.PiedeMobile,
      pictures: [
        assetsProductsRecintiPiedeMobile2,
        assetsProductsRecintiPiedeMobile3,
        assetsProductsRecintiPiedeMobile4,
      ],
      price: 35,
    },
  ];

  return (
    <Section color="warm1">
      <Th variant="h2">
        <Trans>Accessori</Trans>
      </Th>
      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid key={index} xs={12} md={12} item>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Accessori;
