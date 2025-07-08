"use client";

import { Trans } from "@lingui/react/macro";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Section from "components/Section";
import Title from "components/Title";
import { usePages } from "hooks";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import { BREAKPOINT } from "theme";
import IndexProductsButtonGroup from "./components/IndexProductsButtonGroup";
import IndexProductsItem, {
  IndexProductItem,
} from "./components/IndexProductsItem";
import styles from "./styles.module.css";

const CarouselStyled = styled(Carousel)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    overflow: "visible!important",
  },
}));

const IndexProducts: React.FC<{
  products: IndexProductItem[];
}> = ({ products }) => {
  const carousel = useRef<Carousel>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
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
          <CarouselStyled
            ssr
            beforeChange={setCurrentSlide}
            ref={carousel}
            itemClass={styles.root}
            renderButtonGroupOutside={true}
            customButtonGroup={<IndexProductsButtonGroup />}
            arrows={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
              superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
              },
            }}
          >
            {products.map(({ url, title, description, image }, index) => (
              <div key={url}>
                <IndexProductsItem
                  index={index}
                  title={title}
                  url={url}
                  description={description}
                  image={image!}
                  visible={index >= currentSlide}
                />
              </div>
            ))}
          </CarouselStyled>
        </Grid>
      </Grid>
    </Section>
  );
};

export default IndexProducts;
