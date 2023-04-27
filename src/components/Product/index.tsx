import { Box, Grid, GridSize, styled, Typography } from "@mui/material";

import Data from "components/Data";
import Th from "components/Th";
import React, { ReactNode } from "react";
import { helmetJsonLdProp } from "react-schemaorg";
import { Offer, ProductModel, WithContext } from "schema-dts";
import { snakeCase } from "snake-case";
import { BREAKPOINT, Colors, PRODUCT_GUTTER } from "theme";

import { Picture } from "components/ModalGallery";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { SEDE_OPERATIVA, WEBSITE } from "utils/constants";
import ColorsList from "./ProductColorsList";
import ProductImages from "./ProductImages";
import ProductPrice, { PriceProps } from "./ProductPrice";
import { Trans, useTranslation } from "next-i18next";

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
  materials?: JSX.Element[];
  thickness?: number;
  diameter?: number;
  colors?: Colors[];
  height?: number;
  length?: number;
  weight?: number;
  depth?: number;
  width?: number;
};

export type ProductData = Attributes & {
  pictures: StaticImageData[];
  description?: string | ReactNode;
  price?: PriceProps["price"];
  vertical?: boolean;
  name: string;
};

export type ProductProps = ProductData & { className?: string };

const getDataLabel = (id: keyof Attributes) =>
  ({
    colors: <Trans i18nKey="General.attributes.color">Colori</Trans>,
    materials: <Trans i18nKey="General.attributes.material">Materiali</Trans>,
    depth: <Trans i18nKey="General.attributes.depth">Profondità</Trans>,
    diameter: <Trans i18nKey="General.attributes.diameter">Diametro</Trans>,
    height: <Trans i18nKey="General.attributes.height">Altezza</Trans>,
    length: <Trans i18nKey="General.attributes.lenght">Lunghezza</Trans>,
    thickness: <Trans i18nKey="General.attributes.tickness">Spessore</Trans>,
    weight: <Trans i18nKey="General.attributes.weight">Peso</Trans>,
    width: <Trans i18nKey="General.attributes.width">Larghezza</Trans>,
  }[id]);

const getDataData = (
  id: keyof Attributes,
  attribute: number | Colors[] | string[] | JSX.Element[]
) => {
  const { t } = useTranslation();

  switch (id) {
    case "materials":
      return attribute;

    case "weight":
      return Intl.NumberFormat().format(attribute as number) + " kg.";

    case "diameter":
    case "thickness":
    case "height":
    case "length":
    case "depth":
    case "width":
      return Intl.NumberFormat().format((attribute as number) / 10) + " cm.";

    case "colors":
      return <ColorsList colors={attribute as Colors[]} />;
  }
};

const getData = (attributes: Attributes) => {
  return Object.entries(attributes).map(([id, attribute]) => ({
    id,
    label: getDataLabel(id as keyof Attributes),
    value: getDataData(id as keyof Attributes, attribute),
  }));
};

const getSeoPrice = (
  price: ProductProps["price"],
  url: string
): Offer | undefined => {
  if (!price) return undefined;

  var date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  const priceValidUntil = date.toISOString().slice(0, 10);

  return {
    url,
    priceValidUntil,
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    price: typeof price === "number" ? price : price[0].price,
  };
};

const Product: React.FC<ProductProps> = ({
  className,
  pictures,
  vertical,
  price,
  name,
  description,
  ...attributes
}) => {
  const md = (vertical ? 12 : 12 / (pictures.length + 1)) as GridSize;
  const data = getData(attributes);
  const { pathname } = useRouter();
  const id = snakeCase(name);

  const itemUrl = `${WEBSITE}${pathname}#${id}`;

  const jsonLd: WithContext<ProductModel> = {
    "@context": "https://schema.org",
    "@type": "ProductModel",
    name: name,
    image: pictures.map(({ src }) => WEBSITE + src),
    brand: {
      "@type": "Brand",
      name: SEDE_OPERATIVA.name as string,
    },
  };

  const offers = getSeoPrice(price, itemUrl);
  if (offers) {
    jsonLd.offers = offers;
  }

  const meta = helmetJsonLdProp(jsonLd);

  const images = pictures.map(
    (image): Picture => ({
      caption: name,
      image,
    })
  );

  return (
    <Box id={id} className={className}>
      <script
        type={meta.type}
        dangerouslySetInnerHTML={{
          __html: meta.innerHTML,
        }}
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

          {data.map((item) => (
            <Data {...item} key={`${id}_${item.id}`} />
          ))}

          <ProductPrice price={price} />
        </DataStyled>
      </Grid>
    </Box>
  );
};

export default Product;
