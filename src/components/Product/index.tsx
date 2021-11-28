import { i18n } from "@lingui/core"
import { Trans } from "@lingui/macro"
import { Box, Grid, GridSize, styled, Typography } from "@mui/material"
import { useLocation } from "@reach/router"
import { Data, TH } from "components"
import { seoQuery } from "components/Seo"
import { useStaticQuery } from "gatsby"
import { SEDE_OPERATIVA } from "pages/contatti"
import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import { helmetJsonLdProp } from "react-schemaorg"
import { Product as ProductSchema } from "schema-dts"
import { snakeCase } from "snake-case"
import { BREAKPOINT, PRODUCT_GUTTER } from "theme"
import { Colors } from "utils/constants"
import ColorsList from "./ProductColorsList"
import ProductImages, { ProductImagesProps } from "./ProductImages"
import ProductPrice, { PriceProps } from "./ProductPrice"

const DataStyled = styled(Grid)(({ theme }) => ({
  order: -1,
  display: "flex",
  minHeight: "100%",
  flexDirection: "column",
  [theme.breakpoints.up(BREAKPOINT)]: {
    order: "unset",
  },
}))

type Attributes = {
  materials?: JSX.Element[]
  thickness?: number
  diameter?: number
  colors?: Colors[]
  height?: number
  length?: number
  weight?: number
  depth?: number
  width?: number
}

export type ProductProps = {
  images: ProductImagesProps["images"]
  description?: string | ReactNode
  price?: PriceProps["price"]
  className?: string
  vertical?: boolean
  name: string
} & Attributes

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
  }[id])

const getDataData = (id: keyof Attributes, attribute: number | Colors[] | string[] | JSX.Element[]) => {
  switch (id) {
    case "materials":
      return attribute

    case "weight":
      return `${i18n.number(attribute as number)} kg.`

    case "diameter":
    case "thickness":
    case "height":
    case "length":
    case "depth":
    case "width":
      return `${i18n.number((attribute as number) / 10)} cm.`

    case "colors":
      return <ColorsList colors={attribute as Colors[]} />
  }
}

const getData = (attributes: Attributes) => {
  return Object.entries(attributes).map(([id, attribute]) => ({
    id,
    label: getDataLabel(id as keyof Attributes),
    value: getDataData(id as keyof Attributes, attribute),
  }))
}

const getSeoPrice = (price: ProductProps["price"], url: string) => {
  if (!price) return undefined

  const common = {
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  }

  if (typeof price === "number")
    return {
      ...common,
      "@type": "Offer",
      price,
      url,
    }

  if (typeof price === "object" && price.length === 1)
    return {
      ...common,
      "@type": "Offer",
      "price": price[0].price,
      url,
    }

  if (typeof price === "object" && price.length > 1) {
    const order = price.sort((a, b) => a.price - b.price)
    return {
      ...common,
      "@type": "AggregateOffer",
      "lowPrice": order[0].price,
      "highPrice": order[order.length - 1].price,
      url,
    }
  }
}

const Product: React.FC<ProductProps> = ({ className, images, vertical, price, name, description, ...attributes }) => {
  const md = (vertical ? 12 : 12 / (images.length + 1)) as GridSize
  const data = getData(attributes)
  const { pathname } = useLocation()
  const id = snakeCase(name)
  const siteUrl = useStaticQuery(seoQuery).site.siteMetadata.siteUrl
  const itemUrl = `${siteUrl}${pathname}#${id}`

  return (
    <Box id={id} className={className}>
      <Helmet
        script={[
          helmetJsonLdProp<ProductSchema>({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": name,
            "image": images.map(({ src }) => siteUrl + src),
            "offers": getSeoPrice(price, itemUrl),
            "brand": {
              "@type": "Brand",
              "name": SEDE_OPERATIVA.name,
            },
          }),
        ]}
      />
      <Grid container spacing={PRODUCT_GUTTER}>
        <ProductImages {...{ images, md, name }} />

        <DataStyled item xs={12} md={md}>
          <TH variant="h6" sans sx={{ textTransform: "uppercase" }}>
            {name}
          </TH>

          {description && (
            <Typography paragraph component="div">
              {description}
            </Typography>
          )}

          {data.map(item => (
            <Data {...item} />
          ))}

          <ProductPrice price={price} />
        </DataStyled>
      </Grid>
    </Box>
  )
}

export default Product
