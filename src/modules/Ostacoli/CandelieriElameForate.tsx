import { t } from "@lingui/core/macro";
import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import { PRODUCT_GUTTER } from "theme";

const CandelieriLameForate: React.FC<{ products: ProductData[] }> = ({
  products,
}) => (
  <>
    <Title sx={{ mb: PRODUCT_GUTTER }} title={t`Candelieri e lame forate`} />
    <Grid container spacing={PRODUCT_GUTTER}>
      {products.map((product, index) => (
        <Grid
          key={`candelieri_lame_forate_${index}`}
          size={{
            md: 3,
            xs: 12
          }}>
          <Product {...product} vertical />
        </Grid>
      ))}
    </Grid>
  </>
);

export default CandelieriLameForate;
