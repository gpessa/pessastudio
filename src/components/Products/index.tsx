import { CarouselProvider, Slide, Slider as Carousel } from 'pure-react-carousel';
import React from 'react';

import { Section, Title } from '@components';
import { PRODUCT_IDS } from '@constants';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import theme, { BREAKPOINT } from '@theme';

import ProductsItem from './ProductsItem';
import ProductsSelector from './ProductsSelector';
import { useIntl } from 'gatsby-plugin-intl';

const useStyles = makeStyles(theme => ({
  carousel: {
    overflow: 'visible',
    margin: `${theme.spacing(5)}px 0`,
    [theme.breakpoints.up(BREAKPOINT)]: {
      margin: 'unset'
    }
  },
  text: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    display: 'flex',
    zIndex: 1
  },
  sliderSelector: {
    [theme.breakpoints.up(BREAKPOINT)]: {
      position: 'relative',
      marginTop: -28,
      zIndex: 1
    }
  }
}));

const Products: React.FC = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT));

  const ITEM_TO_SHOW = isDesktop ? 2 : 1

  const CAROUSEL_CONFIGURATION = {
    totalSlides: PRODUCT_IDS.length,
    visibleSlides: ITEM_TO_SHOW,
    naturalSlideHeight: 560,
    naturalSlideWidth: 400,
    currentSlide: 0,
    step: 2,
  }

  return (
    <CarouselProvider {...CAROUSEL_CONFIGURATION}>
      <Section image="marble-white" type="horizontal">
        <Grid container justify="space-between">
          <Grid item md={3} xs={12} className={classes.text}>
            <Title
              subtitle={formatMessage({ id: "PRODUCT__title" })}
              title={formatMessage({ id: "PRODUCT__subtitle" })}
            />
          </Grid>
          <Grid item md={8} xs={12} component={Carousel} className={classes.carousel}>
            {PRODUCT_IDS.map((product, index) => (
              <Slide index={index} key={product} >
                <ProductsItem
                  index={index}
                  url={`/${product}`}
                  image={require(`@images/icon-${product}.jpg`)}
                  name={formatMessage({ id: `NAVIGATION__${product}` })}
                  description={formatMessage({ id: `HOME_product_description_${product}` })}
                />
              </Slide>
            ))}
          </Grid>
        </Grid>
        <Grid item md={3} xs={12} className={classes.sliderSelector}>
          <ProductsSelector />
        </Grid>
      </Section>
    </CarouselProvider>
  )
}

export default Products