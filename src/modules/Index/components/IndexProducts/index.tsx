import { Trans } from "@lingui/macro";
import { Grid, styled, useMediaQuery } from "@mui/material";
import Section from "components/Section";
import Title from "components/Title";

import { usePages } from "hooks";
import {
  Slider as Carousel,
  CarouselProvider,
  Slide,
} from "pure-react-carousel";
import React from "react";
import theme, { BREAKPOINT } from "theme";
import ProductsItem from "../ProductsItem";
import ProductsSelector from "../ProductsSelector";

const CarouselContainerStyled = styled(Grid)(({ theme }) => ({
  margin: `${theme.spacing(5)} 0`,
  [theme.breakpoints.up(BREAKPOINT)]: {
    margin: "unset",
  },
}));

const CarouselStyled = styled(Carousel)(({ theme }) => ({
  overflow: "visible!important",
}));

const TextStyled = styled(Grid)({
  justifyContent: "space-between",
  flexDirection: "column",
  display: "flex",
  zIndex: 1,
});

const SliderSelectorStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    position: "relative",
    marginTop: -50,
    zIndex: 1,
  },
}));

const IndexProducts: React.FC = () => {
  const isTable = useMediaQuery(theme.breakpoints.up("sm"));
  const ITEM_TO_SHOW = isTable ? 2 : 1;
  const { PRODUCTS } = usePages();
  const product = Object.values(PRODUCTS);

  const CAROUSEL_CONFIGURATION = {
    totalSlides: product.length,
    naturalSlideHeight: 500,
    naturalSlideWidth: 400,
    currentSlide: 0,
    step: 2,
  };

  return (
    <CarouselProvider {...CAROUSEL_CONFIGURATION} visibleSlides={ITEM_TO_SHOW}>
      <Section image="dots" type="horizontal">
        <Grid container justifyContent="space-between">
          <TextStyled item md={3} xs={12}>
            <Title
              subtitle={<Trans>Prodotti</Trans>}
              title={<Trans>Scopri la nostra gamma di prodotti</Trans>}
            />
          </TextStyled>

          <CarouselContainerStyled item md={8} xs={12}>
            <CarouselStyled>
              {product.map(({ url, title, description, image }, index) => (
                <Slide index={index} key={url}>
                  <ProductsItem
                    index={index}
                    title={title}
                    url={url}
                    description={description}
                    image={image!}
                  />
                </Slide>
              ))}
            </CarouselStyled>
          </CarouselContainerStyled>

          <SliderSelectorStyled item md={3} xs={12}>
            <ProductsSelector />
          </SliderSelectorStyled>
        </Grid>
      </Section>
    </CarouselProvider>
  );
};

export default IndexProducts;
