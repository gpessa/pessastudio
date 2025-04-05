import { Trans } from "@lingui/macro";
import { Grid, useMediaQuery } from "@mui/material";
import Section from "components/Section";
import Title from "components/Title";
import { styled } from "@mui/material/styles";

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

const CarouselStyled = styled(Carousel)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    overflow: "visible!important",
  },
}));

const SliderSelectorStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    position: "absolute",
    top: "50%",
    width: "100%",
  },
}));

const IndexProducts: React.FC = () => {
  const isTable = useMediaQuery(theme.breakpoints.up("sm"));
  const ITEM_TO_SHOW = isTable ? 2.1 : 1.1;
  const { PRODUCTS } = usePages();
  const product = Object.values(PRODUCTS);

  const CAROUSEL_CONFIGURATION = {
    currentSlide: 0,
    naturalSlideHeight: 500,
    naturalSlideWidth: 400,
    step: 2,
    totalSlides: product.length,
  };

  return (
    <CarouselProvider {...CAROUSEL_CONFIGURATION} visibleSlides={ITEM_TO_SHOW}>
      <Section image="dots" type="horizontal">
        <Grid container justifyContent="space-between">
          <Grid
            size={{
              md: 3,
              xs: 12,
            }}
          >
            <Title
              subtitle={<Trans>Prodotti</Trans>}
              title={<Trans>Scopri la nostra gamma di prodotti</Trans>}
            />
          </Grid>

          <Grid
            size={{
              md: 8,
              xs: 12,
            }}
          >
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
          </Grid>

          <SliderSelectorStyled size={{ md: 3, xs: 12 }}>
            <ProductsSelector />
          </SliderSelectorStyled>
        </Grid>
      </Section>
    </CarouselProvider>
  );
};

export default IndexProducts;
