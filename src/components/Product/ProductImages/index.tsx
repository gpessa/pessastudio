import { ButtonBase, Grid, GridSize } from "@mui/material";
import ModalGallery, { Picture } from "components/ModalGallery";
import Image from "next/image";
import React from "react";

import { styled } from "@mui/material";

const ButtonBaseStyled = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  paddingBottom: "100%",
  position: "relative",
  overflow: "hidden",
  borderRadius: 10,
  width: "100%",
}));

const ImgStyled = styled(Image)(({}) => ({
  transform: "translateY(-50%)",
  position: "absolute",
  marginTop: "50%",
  width: "100%",
  height: "auto",
  top: 0,
}));

export type ProductImagesProps = {
  images: Picture[];
  md: GridSize;
};

const DIM = 300;

const ProductImages: React.FC<ProductImagesProps> = ({ images, md }) => (
  <ModalGallery
    images={images}
    render={({ images, open }) => (
      <>
        {images.map((image) => (
          <Grid
            item
            xs={12}
            md={md}
            key={image.image.src}
            onClick={() => open(image)}
          >
            <ButtonBaseStyled>
              <ImgStyled
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
