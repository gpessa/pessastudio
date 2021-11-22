import { ModalGallery } from "components"
import { ButtonBase, Grid, GridProps } from "@mui/material"
import { styled } from "@mui/material"
import { PRODUCT_GUTTER } from "theme"
import React from "react"
import { Picture } from "../ModalGallery"

const ButtonBaseStyled = styled(ButtonBase)(() => ({
  textAlign: "left",
  display: "block",
}))

const ImageStyled = styled("img")(() => ({
  width: "100%",
  borderRadius: 10,
}))

const FigcaptionStyled = styled("figcaption")(() => ({
  textTransform: "uppercase",
  fontSize: "0.8rem",
  lineHeight: 1,
}))

type Props = {
  images: Picture[]
} & Pick<GridProps, "xs" | "md">

const Gallery: React.FC<Props> = ({ images, xs = 6, md = 6 }) => (
  <ModalGallery
    images={images}
    render={({ open, images }) => (
      <Grid container spacing={PRODUCT_GUTTER}>
        {images.map((image, index) => (
          <Grid item xs={xs} md={md} key={index}>
            <ButtonBaseStyled onClick={() => open(image)} component="figure">
              <ImageStyled src={image.src} />
              <FigcaptionStyled>{image.caption}</FigcaptionStyled>
            </ButtonBaseStyled>
          </Grid>
        ))}
      </Grid>
    )}
  />
)

export default Gallery
