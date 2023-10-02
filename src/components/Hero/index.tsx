import { Box, Container, styled, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import React from "react";

const TypographyStyled = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  display: "inline-block",
}));

const BoxStyled = styled(Box)<{ image?: HeroProps["image"] }>(({ image }) => ({
  backgroundImage: `url(${image?.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  padding: "6% 0 25%",
}));

export type HeroProps = {
  image: StaticImageData;
  text?: JSX.Element | string;
} & React.HTMLAttributes<HTMLElement>;

const Hero = ({ text, image, className }: HeroProps) => (
  <BoxStyled className={className} image={image}>
    {text && (
      <Container maxWidth="lg">
        <TypographyStyled variant="h1">{text}</TypographyStyled>
      </Container>
    )}
  </BoxStyled>
);

export default Hero;
