import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import { PRODUCT_GUTTER } from "theme";

const CandelieriLameForate: React.FC<{ products: ProductData[] }> = ({
  products,
}) => (
  <>
    <Title sx={{ mb: PRODUCT_GUTTER }} title={`Candelieri e lame forate`} />
    <Grid container spacing={PRODUCT_GUTTER}>
      {products.map((product, index) => (
        <Grid item xs={12} key={`candelieri_lame_forate_${index}`}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default CandelieriLameForate;
