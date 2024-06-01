import { t } from "@lingui/macro";
import { Typography, Box } from "@mui/material";
import Data from "components/Data";
import Th from "components/Th";
import { formatSize, formatWeight } from "utils/format";
import ProductColorsList from "../ProductColorsList";
import ProductMaterialsList from "../ProductMaterialsList";
import ProductPrice from "../ProductPrice";
import { ProductData } from "../index";

const ProductInformations = ({
  colors,
  description,
  height,
  length,
  materials,
  name,
  price,
  weight,
  width,
  className,
}: ProductData & {
  className?: string;
}) => (
  <Box className={className}>
    <Th variant="h6" sans sx={{ textTransform: "uppercase" }}>
      {name}
    </Th>
    {description && (
      <Typography paragraph component="div">
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

export default ProductInformations;
