import { ButtonBase, Grid, GridSize } from "@mui/material"
import styled from "@mui/styled-engine"
import ModalGallery, { Picture } from "components/ModalGallery"
import React from "react"
import { ProductProps } from ".."

const ButtonBaseStyled = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  paddingBottom: "100%",
  position: "relative",
  overflow: "hidden",
  borderRadius: 10,
  width: "100%",
}))

const ImgStyled = styled("img")(({}) => ({
  transform: "translateY(-50%)",
  position: "absolute",
  marginTop: "50%",
  width: "100%",
  top: 0,
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
