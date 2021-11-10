import { Data, ModalGallery, TH } from "@components"
import { Colors } from "@constants"
import { i18n } from "@lingui/core"
import { t } from "@lingui/macro"
import { ButtonBase, Grid, GridSize, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { BREAKPOINT, PRODUCT_GUTTER } from "@theme"
import { LocalizedLink } from "gatsby-theme-i18n"
import React, { ReactNode } from "react"
import ColorsList from "./ColorsList"
import Price, { PriceProp } from "./Price"

const ButtonBaseStyled = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  overflow: "hidden",
  borderRadius: 10,
  paddingBottom: "100%",
  position: "relative",
  width: "100%",
}))

const ImgStyled = styled("img")(({}) => ({
  top: 0,
  width: "100%",
  marginTop: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
}))

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
  colors?: Colors[]
  materials?: string[]
  depth?: number
  diameter?: number
  height?: number
  length?: number
  thickness?: number
  weight?: number
  width?: number
}

const getDataLabel = (id: keyof Attributes) => {
  switch (id) {
    case "colors":
      return t`Colori`
    case "materials":
      return t`Materiali`
    case "depth":
      return t`Profondità`
    case "diameter":
      return t`Diametro`
    case "height":
      return t`Altezza`
    case "length":
      return t`Lunghezza`
    case "thickness":
      return t`Spessore`
    case "weight":
      return t`Peso`
    case "width":
      return t`Larghezza`
  }
}

const getDataData = (id: keyof Attributes, attribute: number | Colors[] | string[]) => {
  switch (id) {
    case "materials":
      return attribute

    case "weight":
      return `${i18n.number(attribute)} kg.`

    case "diameter":
    case "thickness":
    case "height":
    case "length":
    case "depth":
    case "width":
      return `${i18n.number(attribute / 10)} cm.`

    case "colors":
      return <ColorsList colors={attribute} />
  }
}

const getData = (attributes: Attributes) => {
  const result = Object.entries(attributes)
    .map(([id, attribute]) => ({
      id,
      label: getDataLabel(id as keyof Attributes),
      value: getDataData(id as keyof Attributes, attribute),
    }))
    .map(attribute => <Data value={attribute.value} label={attribute.label} />)

  return result
}

const Product = ({ images, vertical, price, url, name, description, ...attributes }: Props) => {
  const Tag = url ? LocalizedLink : "div"
  const span = (vertical ? 12 : 12 / (images.length + 1)) as GridSize

  return (
    <ModalGallery
      images={images}
      render={({ images, open }) => (
        <Tag to={url} sx={{ transform: "scale(1)" }}>
          <Grid container spacing={PRODUCT_GUTTER}>
            {images.map(image => (
              <Grid item xs={12} md={span} key={image.src} onClick={() => open(image)}>
                <ButtonBaseStyled>
                  <ImgStyled src={image.src} alt={image.caption || name} />
                </ButtonBaseStyled>
              </Grid>
            ))}
            <DataStyled item xs={12} md={span}>
              <TH variant="h6" sans sx={{ textTransform: "uppercase" }}>
                {name}
              </TH>

              {description && <Typography paragraph>{description}</Typography>}

              {getData(attributes)}

              <Price price={price} />
            </DataStyled>
          </Grid>
        </Tag>
      )}
    />
  )
}

type Props = {
  vertical?: boolean
  images: Picture[]
  name: string | JSX.Element
  description?: string | ReactNode
  url?: string
  price: PriceProp
} & Attributes

export default Product
