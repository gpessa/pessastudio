"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import { ProductData } from "hooks/useProducts";
import { PRODUCT_GUTTER } from "theme";
import ProductImages from "./components/ProductImages";
import ProductInformations from "./components/ProductInformations";
import ProductSeo from "./components/ProductSeo";

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
          <Grid
            size={{
              md: md,
              xs: 12,
            }}
          >
            <ProductInformations {...product} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Product;
