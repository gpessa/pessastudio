import { ButtonBase, Grid, GridProps, styled } from "@mui/material"
import { ModalGallery } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"
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
            <ButtonBaseStyled onClick={() => open(image)}>
              <figure>
                <ImageStyled src={image.src} alt={image.caption} />
                <FigcaptionStyled>{image.caption}</FigcaptionStyled>
              </figure>
            </ButtonBaseStyled>
          </Grid>
        ))}
      </Grid>
    )}
  />
)

export default Gallery
