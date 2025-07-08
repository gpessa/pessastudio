import { useLingui } from "@lingui/react/macro";
import { Grid } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "hooks/useProducts";
import { PRODUCT_GUTTER } from "theme";

const CandelieriLameForate: React.FC<{ products: ProductData[] }> = ({
  products,
}) => {
  const { t } = useLingui();

  return (
    <>
      <Title sx={{ mb: PRODUCT_GUTTER }} title={t`Candelieri e lame forate`} />
      <Grid container spacing={PRODUCT_GUTTER}>
        {products.map((product, index) => (
          <Grid
            key={`candelieri_lame_forate_${index}`}
            size={{
              md: 3,
              xs: 12,
            }}
          >
            <Product {...product} vertical />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CandelieriLameForate;
