import { i18n } from "@lingui/core";
import { t } from "@lingui/macro";
import { Box, Grid, styled, Typography } from "@mui/material";
import Data from "components/Data";
import Th from "components/Th";
import { ProductJsonLd } from "next-seo";
import React, { ReactNode } from "react";
import { BREAKPOINT, Colors, PRODUCT_GUTTER } from "theme";

import { Offers } from "next-seo/lib/types";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { SEDE_OPERATIVA, WEBSITE } from "utils/constants";
import ColorsList from "./ProductColorsList";
import ProductImages from "./ProductImages";
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
  materials?: string[];
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
  id: string;
};

export type ProductProps = ProductData & { className?: string };

const getSeoPrice = (
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
    priceCurrency: "EUR",
    seller: { name: "Pessastudio" },
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    price: String(typeof price === "number" ? price : price[0].price),
  };
};

const formatSize = (value: number) => `${i18n.number(value / 10)} cm.`;

const Product: React.FC<ProductProps> = ({
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
}) => {
  const { pathname } = useRouter();
  const md = vertical ? 12 : 12 / (pictures.length + 1);
  const itemUrl = `${WEBSITE}${pathname}#${id}`;
  const offers = getSeoPrice(price, itemUrl);

  const images = pictures.map((image) => ({
    caption: name,
    image,
  }));

  return (
    <Box id={id} className={className}>
      <ProductJsonLd
        images={pictures.map(({ src }) => WEBSITE + src)}
        brand={SEDE_OPERATIVA.name}
        productName={name}
        offers={offers}
      />

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
          {weight && <Data value={formatSize(weight)} label={t`Peso`} />}
          {thickness && (
            <Data value={formatSize(thickness)} label={t`Spessore`} />
          )}
          {diameter && (
            <Data value={formatSize(diameter)} label={t`Diametro`} />
          )}
          {materials && <Data value={materials} label={t`Materiali`} />}
          {colors && (
            <Data value={<ColorsList colors={colors} />} label={t`Colori`} />
          )}

          <ProductPrice price={price} />
        </DataStyled>
      </Grid>
    </Box>
  );
};

export default Product;
