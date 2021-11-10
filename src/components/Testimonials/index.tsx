import { Columns, TH, Title } from "@components"
import { t } from "@lingui/macro"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { styled, Theme } from "@mui/system"
import {
  CarouselProvider,
  CarouselProviderProps,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel"
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

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    "& small": {
      color: theme.palette.grey[400],
    },
  },
}))

const TESTIMONIALS = [
  t`Ho ricevuto questa mattina il materiale. I miei complimenti per la qualità dei prodotti, l'imballo ed il trasportatore`,
  t`Ringrazio tutto il team per la professionalità, gentilezza, velocità e sopratutto per l'ottimo risultato`,
  t`Splendido niente da dire! Il tondino è ben pensato e ingegnoso. Molto bene!`,
  t`Gli ostacoli sono arrivati. Sono fantastici!`,
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
  const styles = useStyles()

  return (
    <Columns
      left={
        <Title
          className={styles.title}
          subtitle={t`Dicono di noi`}
          title={t`Cosa dicono di noi`}
          text={t`Scopri la qualità dei nostri prodotti attraverso la testimonianza dei clienti`}
        />
      }
      right={
        <CarouselProvider {...CAROUSEL_CONFIGURATION}>
          <Slider>
            {TESTIMONIALS.map((quote, index) => (
              <Slide index={index} key={index}>
                <Typography textAlign="center" fontSize="1.2rem">
                  <FormatQuoteIcon />
                  {quote}
                  <FormatQuoteIcon />
                </Typography>
              </Slide>
            ))}
          </Slider>
          <DotGroupStyled />
        </CarouselProvider>
      }
    />
  )
}

export default Testimonials
