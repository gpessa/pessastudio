import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import { styled, Typography } from "@mui/material"
import { Columns, Title } from "components"
import { CarouselProvider, CarouselProviderProps, DotGroup, Slide, Slider } from "pure-react-carousel"
import React from "react"

const DotGroupStyled = styled(DotGroup)(({ theme }) => ({
  "textAlign": "center",
  "marginTop": theme.spacing(3),
  "& .carousel__dot": {
    backgroundColor: theme.palette.warm1.main,
    margin: theme.spacing(1),
    display: "inline-block",
    borderRadius: "50%",
    border: "none",
    height: 14,
    width: 14,
  },
  ".carousel__dot--selected": {
    backgroundColor: theme.palette.primary.main,
  },
}))

const StyledTitle = styled(Title)(({ theme }) => ({
  "& small": {
    color: theme.palette.grey[400],
  },
}))

const Testimonials: React.FC<{
  text?: any
  title: string
  subtitle?: string
  testimonials: JSX.Element[] | string[],
}> = ({ testimonials, title, subtitle, text }) => {

  const CAROUSEL_CONFIGURATION = {
    totalSlides: testimonials.length,
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
      left={
        <StyledTitle {...{ title, subtitle, text }} />
      }
      right={
        <CarouselProvider {...CAROUSEL_CONFIGURATION}>
          <Slider>
            {testimonials.map((quote, index) => (
              <Typography textAlign="center" fontSize="1.2rem" component={Slide} index={index} key={index}>
                <FormatQuoteIcon />
                {quote}
                <FormatQuoteIcon />
              </Typography>
            ))}
          </Slider>
          <DotGroupStyled />
        </CarouselProvider>
      }
    />
  )
}

export default Testimonials
