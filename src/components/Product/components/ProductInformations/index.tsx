import { useLingui } from "@lingui/react/macro";
import { Box, Typography } from "@mui/material";
import Data from "components/Data";
import Th from "components/Th";
import { ProductDataTranslated } from "hooks/useProducts";
import ProductColorsList from "../ProductColorsList";
import ProductMaterialsList from "../ProductMaterialsList";
import ProductPrice from "../ProductPrice";
import { useFormatter } from "hooks";

const ProductInformations = ({
  colors,
  description,
  materials,
  name,
  price,
  dimensions: { width, height, length, weight },
  className,
}: ProductDataTranslated & {
  className?: string;
}) => {
  const { t } = useLingui();
  const { formatSize, formatWeight } = useFormatter();

  return (
    <Box className={className}>
      <Th variant="h6" sans sx={{ textTransform: "uppercase" }}>
        {name}
      </Th>
      {description && (
        <Typography
          sx={{ fontSize: "96%" }}
          mx={{ marginBottom: 15 }}
          component="div"
        >
          {description}
        </Typography>
      )}
      {width && <Data value={formatSize(width)} label={t`Larghezza`} />}
      {height && <Data value={formatSize(height)} label={t`Altezza`} />}
      {length && <Data value={formatSize(length)} label={t`Lunghezza`} />}
      {weight && <Data value={formatWeight(weight)} label={t`Peso`} />}
      {materials && (
        <Data
          value={<ProductMaterialsList materials={materials} />}
          label={t`Materiali`}
        />
      )}
      {colors && (
        <Data value={<ProductColorsList colors={colors} />} label={t`Colori`} />
      )}

      <ProductPrice price={price} />
    </Box>
  );
};

export default ProductInformations;
