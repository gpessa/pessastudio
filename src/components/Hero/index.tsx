import { Box, Container, styled, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { BREAKPOINT } from "theme";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  display: "inline-block",
  padding: theme.spacing(3),
}));

const BoxStyled = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  padding: "23% 0 25%",
  position: "relative",
  [theme.breakpoints.up(BREAKPOINT)]: {
    padding: "13% 0 15%",
  },
}));

const ImageStyled = styled(Image)(({ theme }) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "auto",
  zIndex: -1,
  [theme.breakpoints.up(BREAKPOINT)]: {
    height: "auto",
    width: "100%",
  },
}));

export type HeroProps = {
  image: StaticImageData;
  text?: JSX.Element | string;
} & React.HTMLAttributes<HTMLElement>;

const Hero = ({ text, image, className }: HeroProps) => (
  <BoxStyled className={className}>
    <ImageStyled src={image} alt="" />
    {text && (
      <Container maxWidth="lg">
        <TypographyStyled variant="h1">{text}</TypographyStyled>
      </Container>
    )}
  </BoxStyled>
);

export default Hero;
