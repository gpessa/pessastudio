import { t } from "@lingui/macro";
import { Box, Grid, styled, Typography } from "@mui/material";
import Data from "components/Data";
import Th from "components/Th";
import { ProductJsonLd, ProductJsonLdProps } from "next-seo";
import React, { ReactNode } from "react";
import { BREAKPOINT, Colors, PRODUCT_GUTTER } from "theme";

import { Offers } from "next-seo/lib/types";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Material, WEBSITE } from "utils/constants";
import { formatSize, formatWeight } from "utils/format";
import { ProductId } from "utils/products";
import ProductColorsList from "./ProductColorsList";
import ProductImages from "./ProductImages";
import ProductMaterialsList from "./ProductMaterialsList";
import ProductPrice, { PriceProps } from "./ProductPrice";

const DataStyled = styled(Grid)(({ theme }) => ({
  order: -1,
  display: "flex",
  minHeight: "100%",
  flexDirection: "column",
  [theme.breakpoints.up(BREAKPOINT)]: {
    order: "unset",
  },
}));

type Attributes = {
  colors?: Colors[];
  depth?: number;
  diameter?: number;
  height?: number;
  length?: number;
  materials?: Material[];
  thickness?: number;
  weight?: number;
  width?: number;
};

export type ProductData = Attributes & {
  pictures: StaticImageData[];
  description?: string | ReactNode;
  price?: PriceProps["price"];
  vertical?: boolean;
  name: string;
  id: ProductId;
};

export type ProductProps = ProductData & { className?: string };

const getSeoOffer = (
  price: ProductProps["price"],
  url: string
): Offers | undefined => {
  if (!price) return undefined;

  var date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  const priceValidUntil = date.toISOString().slice(0, 10);

  return {
    url,
    priceValidUntil,
    price: String(price),
    priceCurrency: "EUR",
    seller: { name: "Pessastudio" },
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  };
};

const useSeoProps = ({
  name: productName,
  description,
  pictures,
  price,
  id,
}: ProductData): ProductJsonLdProps => {
  const { pathname } = useRouter();

  const images = pictures.map(({ src }) => `${WEBSITE}${src}`);
  const itemUrl = `${WEBSITE}${pathname}#${id}`;
  const brand = "Pessastudio";
  const offers = getSeoOffer(price, itemUrl);

  let result: ProductJsonLdProps = {
    productName,
    itemUrl,
    offers,
    images,
    brand,
  };

  if (typeof description === "string") {
    result.disambiguatingDescription = description;
  }

  return result;
};

const Product: React.FC<ProductProps> = (product) => {
  const {
    className,
    colors,
    depth,
    description,
    diameter,
    height,
    id,
    length,
    materials,
    name,
    pictures,
    price,
    thickness,
    vertical,
    weight,
    width,
  } = product;

  const md = vertical ? 12 : 12 / (pictures.length + 1);
  const jsonld = useSeoProps(product);
  const images = pictures.map((image) => ({
    caption: name,
    image,
  }));

  return (
    <Box id={String(id)} className={className}>
      <ProductJsonLd {...jsonld} keyOverride={product.id} />

      <Grid container spacing={PRODUCT_GUTTER}>
        <ProductImages {...{ images, md, name }} />

        <DataStyled item xs={12} md={md}>
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
          {depth && <Data value={formatSize(depth)} label={t`Profondità`} />}
          {thickness && (
            <Data value={formatSize(thickness)} label={t`Spessore`} />
          )}
          {diameter && (
            <Data value={formatSize(diameter)} label={t`Diametro`} />
          )}
          {weight && <Data value={formatWeight(weight)} label={t`Peso`} />}
          {materials && (
            <Data
              value={<ProductMaterialsList materials={materials} />}
              label={t`Materiali`}
            />
          )}
          {colors && (
            <Data
              value={<ProductColorsList colors={colors} />}
              label={t`Colori`}
            />
          )}

          <ProductPrice price={price} />
        </DataStyled>
      </Grid>
    </Box>
  );
};

export default Product;
