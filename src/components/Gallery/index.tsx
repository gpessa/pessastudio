"use client";

import { ButtonBase, Grid, GridSize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ModalGallery } from "components";
import Image from "next/image";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const ButtonBaseStyled = styled(ButtonBase)(() => ({
  display: "block",
  textAlign: "left",
}));

const ImageStyled = styled(Image)(() => ({
  borderRadius: 10,
  height: "auto",
  maxWidth: "100%",
  width: "100%",
}));

const FigcaptionStyled = styled("figcaption")(() => ({
  fontSize: "0.8rem",
  lineHeight: 1,
  marginTop: 2,
}));

const FigureStyled = styled("figure")(() => ({
  margin: 0,
  padding: 0,
}));

type Props = {
  images: Picture[];
} & { xs?: GridSize; md?: GridSize };

const Gallery: React.FC<Props> = ({ images, xs = 6, md = 6 }) => (
  <ModalGallery
    images={images}
    render={({ open, images }) => (
      <Grid container spacing={PRODUCT_GUTTER}>
        {images.map((item, index) => (
          <Grid
            key={`${item.image.src}_${index}`}
            onClick={() => open(item)}
            component={ButtonBaseStyled}
            size={{
              md: md,
              xs: xs,
            }}
          >
            <FigureStyled>
              <ImageStyled
                alt={item.caption || ""}
                src={item.image}
                height={200}
                width={200}
                placeholder="blur"
              />
              <FigcaptionStyled>{item.caption}</FigcaptionStyled>
            </FigureStyled>
          </Grid>
        ))}
      </Grid>
    )}
  />
);

export default Gallery;
