import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import { Box, Grid, GridSize, styled, Typography } from "@mui/material";

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
import { Maybe } from "graphql/jsutils/Maybe";

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
  materials?: Maybe<JSX.Element[]>;
  thickness?: Maybe<number>;
  diameter?: Maybe<number>;
  colors?: Maybe<Colors[]>;
  height?: Maybe<number>;
  length?: Maybe<number>;
  weight?: Maybe<number>;
  depth?: Maybe<number>;
  width?: Maybe<number>;
};

export type ProductData = Attributes & {
  pictures: StaticImageData[];
  description?: string | ReactNode;
  price?: PriceProps["price"] | null;
  vertical?: boolean;
  name: string;
  id: string;
};

export type ProductProps = ProductData & { className?: string };

const getDataLabel = (id: keyof Attributes) =>
  ({
    colors: <Trans>Colori</Trans>,
    materials: <Trans>Materiali</Trans>,
    depth: <Trans>Profondità</Trans>,
    diameter: <Trans>Diametro</Trans>,
    height: <Trans>Altezza</Trans>,
    length: <Trans>Lunghezza</Trans>,
    thickness: <Trans>Spessore</Trans>,
    weight: <Trans>Peso</Trans>,
    width: <Trans>Larghezza</Trans>,
  }[id]);

const getDataData = (
  id: keyof Attributes,
  attribute: number | Colors[] | JSX.Element[]
) => {
  switch (id) {
    case "materials":
      return attribute;

    case "weight":
      return `${i18n.number(attribute as number)} kg.`;

    case "diameter":
    case "thickness":
    case "height":
    case "length":
    case "depth":
    case "width":
      return `${i18n.number((attribute as number) / 10)} cm.`;

    case "colors":
      return <ColorsList colors={attribute as Colors[]} />;
  }
};

const getData = (attributes: Attributes) => {
  return Object.entries(attributes)
    .filter(([_, attribute]) => attribute != null)
    .filter(([_, attribute]) => attribute != undefined)
    .map(([id, attribute]) => ({
      key: id,
      label: getDataLabel(id as keyof Attributes),
      value: getDataData(id as keyof Attributes, attribute!),
    }));
};

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
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { name: "Pessastudio" },
    price: String(typeof price === "number" ? price : price[0].price),
  };
};

const Product: React.FC<ProductProps> = ({
  description,
  className,
  pictures,
  vertical,
  price,
  name,
  id,
  ...attributes
}) => {
  const md = (vertical ? 12 : 12 / (pictures.length + 1)) as GridSize;
  const data = getData(attributes);
  const { pathname } = useRouter();

  const itemUrl = `${WEBSITE}${pathname}#${id}`;

  const offers = getSeoPrice(price, itemUrl);

  const images = pictures.map(
    (image): Picture => ({
      caption: name,
      image,
    })
  );

  return (
    <Box id={id} className={className}>
      <ProductJsonLd
        productName={name}
        images={pictures.map(({ src }) => WEBSITE + src)}
        brand={SEDE_OPERATIVA.name}
        offers={offers ? offers : undefined}
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
          {data.map(({ key, ...item }) => (
            <Data {...item} key={key} />
          ))}
          <ProductPrice price={price} />
        </DataStyled>
      </Grid>
    </Box>
  );
};

export default Product;
