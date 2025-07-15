"use client";

import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { BREAKPOINT } from "theme";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  display: "inline-block",
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h2.fontSize,
    padding: theme.spacing(2),
  },
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
  text?: ReactNode;
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
