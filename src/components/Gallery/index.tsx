import { ButtonBase, Grid, GridProps, styled } from "@mui/material";
import ModalGallery, { Picture } from "components/ModalGallery";
import Image from "next/image";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const ButtonBaseStyled = styled(ButtonBase)(() => ({
  textAlign: "left",
  display: "block",
}));

const ImageStyled = styled(Image)(() => ({
  borderRadius: 10,
  maxWidth: "100%",
  width: "100%",
  height: "auto",
}));

const FigcaptionStyled = styled("figcaption")(() => ({
  fontSize: "0.8rem",
  lineHeight: 1,
  marginTop: 2,
}));

const FigureStyled = styled("figure")(() => ({
  padding: 0,
  margin: 0,
}));

type Props = {
  images: Picture[];
} & Pick<GridProps, "xs" | "md">;

const Gallery: React.FC<Props> = ({ images, xs = 6, md = 6 }) => (
  <ModalGallery
    images={images}
    render={({ open, images }) => (
      <Grid container spacing={PRODUCT_GUTTER}>
        {images.map((item, index) => (
          <Grid
            item
            xs={xs}
            md={md}
            key={index}
            onClick={() => open(item)}
            component={ButtonBaseStyled}
          >
            <FigureStyled>
              <ImageStyled
                alt={item.caption || ""}
                src={item.image}
                height={200}
                width={200}
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
