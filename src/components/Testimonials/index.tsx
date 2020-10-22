import { CarouselProvider, Slide, CarouselProviderProps, DotGroup, Slider } from "pure-react-carousel"
import React from "react"
import { TH4, Columns, Title } from "@components"
import { useIntl } from 'gatsby-plugin-intl';
import { makeStyles } from "@material-ui/core";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { COLORS } from "@theme";

const useStyles = makeStyles(theme => ({
  slide: {
    textAlign: 'center'
  },
  dots: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    '& .carousel__dot': {
      backgroundColor: COLORS.WARM1,
      margin: theme.spacing(1),
      width: 14,
      height: 14,
      display: 'inline-block',
      border: 'none',
      borderRadius: '50%',
    },
    '& .carousel__dot--selected': {
      backgroundColor: theme.palette.primary.main,
    }
  }
}))

const Testimonials = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()
  const TESTIMONIALS = 2
  
  const CAROUSEL_CONFIGURATION = {
    totalSlides: TESTIMONIALS,
    isIntrinsicHeight: true,
    visibleSlides: 1,
    currentSlide: 0,
    isPlaying: true,
    infinite: true,
    interval: 3000,
    step: 1,
  } as CarouselProviderProps
  
  return (
    <Columns
      left={(
        <Title
          title={formatMessage({ id: "HOME__quote__title" })}
          subtitle="Dicono di noi"
          text="Scopri la qualità dei nostri prodotti attraverso la testimonianza dei clienti"
        />
      )}
      right={(
        <CarouselProvider {...CAROUSEL_CONFIGURATION}>
          <Slider>
            {Array(TESTIMONIALS)
              .fill(null)
              .map((_, index) => (
                <Slide index={index}>
                  <TH4 className={classes.slide}>
                    <FormatQuoteIcon />
                    {formatMessage({ id: `HOME__quote__item-${index}` })}
                    <FormatQuoteIcon />
                  </TH4>
                </Slide>
              ))
            }
          </Slider>
          <DotGroup className={classes.dots} />
        </CarouselProvider>
      )}
    />
  )
}

export default Testimonials