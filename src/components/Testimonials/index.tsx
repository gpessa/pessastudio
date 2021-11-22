import { Columns, Title } from "components"
import { t, Trans } from "@lingui/macro"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import { Typography } from "@mui/material"
import { styled } from "@mui/material"
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

const TESTIMONIALS = [
  <Trans>
    Ho ricevuto questa mattina il materiale. I miei complimenti per la qualità dei prodotti, l'imballo ed il
    trasportatore
  </Trans>,
  <Trans>
    Ringrazio tutto il team per la professionalità, gentilezza, velocità e sopratutto per l'ottimo risultato
  </Trans>,
  <Trans>Splendido niente da dire! Il tondino è ben pensato e ingegnoso. Molto bene!</Trans>,
  <Trans>Gli ostacoli sono arrivati. Sono fantastici!</Trans>,
]

const CAROUSEL_CONFIGURATION = {
  totalSlides: TESTIMONIALS.length,
  isIntrinsicHeight: true,
  visibleSlides: 1,
  currentSlide: 0,
  isPlaying: true,
  infinite: true,
  interval: 3000,
  step: 1,
} as CarouselProviderProps

const Testimonials = () => {
  return (
    <Columns
      left={
        <StyledTitle
          subtitle={t`Dicono di noi`}
          title={t`Cosa dicono di noi`}
          text={t`Scopri la qualità dei nostri prodotti attraverso la testimonianza dei clienti`}
        />
      }
      right={
        <CarouselProvider {...CAROUSEL_CONFIGURATION}>
          <Slider>
            {TESTIMONIALS.map((quote, index) => (
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
