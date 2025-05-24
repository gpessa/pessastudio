import { ButtonBase, Grid, GridSize } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";
import ModalGallery from "components/ModalGallery";

const ButtonBaseStyled = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 10,
  overflow: "hidden",
  paddingBottom: "100%",
  position: "relative",
  width: "100%",
}));

const ImgStyled = styled(Image)(() => ({
  height: "auto",
  marginTop: "50%",
  position: "absolute",
  top: 0,
  transform: "translateY(-50%)",
  width: "100%",
}));

export type ProductImagesProps = {
  images: Picture[];
  md?: GridSize;
};

const DIM = 300;

const ProductImages: React.FC<ProductImagesProps> = ({ images, md }) => (
  <ModalGallery
    images={images}
    render={({ images, open }) => (
      <>
        {images.map((image, index) => (
          <Grid
            key={`${image.image.src}_${index}`}
            onClick={() => open(image)}
            size={{
              md: md,
              xs: 12,
            }}
          >
            <ButtonBaseStyled>
              <ImgStyled
                placeholder="blur"
                src={image.image}
                alt={image.caption || ""}
                width={DIM}
                height={DIM}
              />
            </ButtonBaseStyled>
          </Grid>
        ))}
      </>
    )}
  />
);

export default ProductImages;
