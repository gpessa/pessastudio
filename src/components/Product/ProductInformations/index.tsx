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
  diameter,
  height,
  length,
  materials,
  name,
  price,
  thickness,
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
    {thickness && <Data value={formatSize(thickness)} label={t`Spessore`} />}
    {diameter && <Data value={formatSize(diameter)} label={t`Diametro`} />}
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
