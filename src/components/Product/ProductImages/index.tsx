import { ButtonBase, Grid, GridSize } from "@mui/material"
import styled from "@mui/styled-engine"
import ModalGallery, { Picture } from "components/ModalGallery"
import React from "react"
import { ProductProps } from ".."

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

export type ProductImagesProps = {
  name: ProductProps["name"]
  images: Picture[]
  md: GridSize
}

const ProductImages: React.FC<ProductImagesProps> = ({ images, md, name }) => (
  <ModalGallery
    images={images}
    render={({ images, open }) => (
      <>
        {images.map(image => (
          <Grid item xs={12} md={md} key={image.src} onClick={() => open(image)}>
            <ButtonBaseStyled>
              <ImgStyled src={image.src} alt={image.caption || name} />
            </ButtonBaseStyled>
          </Grid>
        ))}
      </>
    )}
  />
)

export default ProductImages
