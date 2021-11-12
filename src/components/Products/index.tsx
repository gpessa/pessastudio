import { Section, Title } from "@components"
import { PRODUCT_PAGES } from "@constants"
import { t } from "@lingui/macro"
import { Grid, useMediaQuery, styled } from "@mui/material"
import theme, { BREAKPOINT } from "@theme"
import { withPrefix } from "gatsby-link"
import { CarouselProvider, Slide, Slider as Carousel } from "pure-react-carousel"
import React from "react"
import ProductsItem from "./ProductsItem"
import ProductsSelector from "./ProductsSelector"

const CarouselContainerStyled = styled(Grid)(({ theme }) => ({
  overflow: "visible!important",
  margin: `${theme.spacing(5)} 0`,
  [theme.breakpoints.up(BREAKPOINT)]: {
    margin: "unset",
  },
}))

const TextStyled = styled(Grid)({
  justifyContent: "space-between",
  flexDirection: "column",
  display: "flex",
  zIndex: 1,
})

const SliderSelectorStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    position: "relative",
    marginTop: -28,
    zIndex: 1,
  },
}))

const Products: React.FC = () => {
  const isTable = useMediaQuery(theme.breakpoints.up("sm"))
  const ITEM_TO_SHOW = isTable ? 2 : 1

  // Life is difficult and those outsise break translations
  const PRODUCTS = Object.entries(PRODUCT_PAGES).map(([id, page]) => ({
    ...page,
    image: withPrefix(`/icons/${id.toLowerCase()}.jpg`),
    name: t({ id: `${page.url}:title` }),
  }))

  const CAROUSEL_CONFIGURATION = {
    totalSlides: PRODUCTS.length,
    naturalSlideHeight: 500,
    naturalSlideWidth: 400,
    currentSlide: 0,
    step: 2,
  }

  return (
    <CarouselProvider {...CAROUSEL_CONFIGURATION} visibleSlides={ITEM_TO_SHOW}>
      <Section image="dots" type="horizontal">
        <Grid container justifyContent="space-between">
          <TextStyled item md={3} xs={12}>
            <Title subtitle={t`Prodotti`} title={t`Scopri la nostra gamma di prodotti`} />
          </TextStyled>
          <CarouselContainerStyled item md={8} xs={12} component={Carousel}>
            {PRODUCTS.map((product, index) => (
              <Slide index={index} key={product.url}>
                <ProductsItem index={index} {...product} />
              </Slide>
            ))}
          </CarouselContainerStyled>
        </Grid>
        <SliderSelectorStyled item md={3} xs={12}>
          <ProductsSelector />
        </SliderSelectorStyled>
      </Section>
    </CarouselProvider>
  )
}

export default Products
