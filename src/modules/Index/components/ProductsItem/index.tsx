import { Box, Link, styled, Typography } from "@mui/material";
import Th from "components/Th";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import { CarouselContext } from "pure-react-carousel";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { BREAKPOINT } from "theme";

type Props = {
  readonly index: number;
  description?: ReactElement | string;
  image: StaticImageData;
  title: string;
  url: string;
};

const ImgStyled = styled(Image)(() => ({
  // position: "absolute",
  height: "auto",
  width: "100%",
  // top: 0,
}));

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(3),
  position: "relative",
  zIndex: 1,
}));

const DescriptionStyled = styled(Typography)(({ theme }) => ({
  minHeight: `${(theme.typography.body1.lineHeight as number) * 4}rem`,
}));

const LinkStyled = styled(Link)<{ index: number }>(({ theme }) => ({
  "&:hover": {
    transform: "scale(1.03)",
  },
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "flex-end",
  marginRight: 30,
  position: "relative",
  transition: theme.transitions.create(["opacity", "transform"], {
    duration: theme.transitions.duration.short,
  }),
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginLeft: 30,
    marginRight: 0,
  },
}));

const ProductsItem: React.FC<Props> = (props) => {
  const { index, title, description, image, url } = props;
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );
  const visible = index >= currentSlide;

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <NextLink href={url} passHref legacyBehavior>
      <LinkStyled
        underline="none"
        index={index}
        sx={{ opacity: visible ? 1 : 0 }}
      >
        <ImgStyled src={image} alt={title} width={300} height={300} />
        <BoxStyled>
          <Th variant="h6" sans sx={{ textTransform: "uppercase" }}>
            {title}
          </Th>
          <DescriptionStyled>{description}</DescriptionStyled>
        </BoxStyled>
      </LinkStyled>
    </NextLink>
  );
};

export default ProductsItem;
