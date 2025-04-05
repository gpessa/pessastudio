import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Columns from "components/Columns";
import Title, { TitleProps } from "components/Title";
import {
  CarouselProvider,
  CarouselProviderProps,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";

const DotGroupStyled = styled(DotGroup)(({ theme }) => ({
  "& .carousel__dot": {
    backgroundColor: theme.palette.warm1.main,
    border: "none",
    borderRadius: "50%",
    display: "inline-block",
    height: 14,
    margin: theme.spacing(1),
    width: 14,
  },
  ".carousel__dot--selected": {
    backgroundColor: theme.palette.primary.main,
  },
  marginTop: theme.spacing(3),
  textAlign: "center",
}));

const StyledTitle = styled(Title)(({ theme }) => ({
  "& small": {
    color: theme.palette.grey[400],
  },
}));

const IndexTestimonials: React.FC<
  TitleProps & {
    testimonials: JSX.Element[] | string[];
  }
> = ({ testimonials, title, subtitle, text }) => {
  const CAROUSEL_CONFIGURATION = {
    currentSlide: 0,
    infinite: true,
    interval: 3000,
    isIntrinsicHeight: true,
    isPlaying: true,
    step: 1,
    totalSlides: testimonials.length,
    visibleSlides: 1,
  } as CarouselProviderProps;

  return (
    <Columns
      left={<StyledTitle {...{ subtitle, text, title }} />}
      right={
        <CarouselProvider {...CAROUSEL_CONFIGURATION}>
          <Slider>
            {testimonials.map((quote, index) => (
              <Typography
                textAlign="center"
                fontSize="1.2rem"
                component={Slide}
                index={index}
                key={index}
              >
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
  );
};

export default IndexTestimonials;
