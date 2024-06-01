import { Box, Grid } from "@mui/material";
import React, { ReactNode } from "react";
import { Colors, PRODUCT_GUTTER } from "theme";

import { ProductId } from "hooks/useProducts";
import { Material } from "utils/constants";
import ProductImages from "./ProductImages";
import ProductInformations from "./ProductInformations";
import { PriceProps } from "./ProductPrice";
import ProductSeo from "./ProductSeo";

export type ProductData = {
  pictures: any[];
  price?: PriceProps["price"];
  description?: string | ReactNode;
  name: string;
  id: ProductId;
  colors?: Colors[];
  height?: number;
  length?: number;
  materials?: Material[];
  weight?: number;
  width?: number;
  link: string;
};

export type ProductProps = ProductData & {
  className?: string;
  vertical?: boolean;
};

const Product: React.FC<ProductProps> = (product) => {
  const { className, id, name, pictures, vertical } = product;
  const md = vertical ? 12 : 12 / (pictures.length + 1);

  const images = pictures.map((image) => ({
    caption: name,
    image,
  }));

  return (
    <>
      <ProductSeo {...product} />
      <Box id={id} className={className}>
        <Grid container spacing={PRODUCT_GUTTER}>
          <ProductImages {...{ images, md }} />
          <Grid item xs={12} md={md}>
            <ProductInformations {...product} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Product;
