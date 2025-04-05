import { Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import { Product, Section, Th } from "components";
import { PRODUCT_GUTTER } from "theme";

import { ProductData } from "components/Product";

const Accessori: React.FC<{ products: ProductData[] }> = ({ products }) => (
  <Section color="warm1">
    <Th variant="h2">
      <Trans>Accessori</Trans>
    </Th>
    <Grid container spacing={PRODUCT_GUTTER}>
      {products.map((product, index) => (
        <Grid
          key={index}
          size={{
            md: 12,
            xs: 12
          }}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </Section>
);

export default Accessori;
