import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Columns from "components/Columns";
import Title, { TitleProps } from "components/Title";
import React from "react";
import Carousel from "react-multi-carousel";

// const DotGroupStyled = styled(DotGroup)(({ theme }) => ({
//   "& .carousel__dot": {
//     backgroundColor: theme.palette.warm1.main,
//     border: "none",
//     borderRadius: "50%",
//     display: "inline-block",
//     height: 14,
//     margin: theme.spacing(1),
//     width: 14,
//   },
//   ".carousel__dot--selected": {
//     backgroundColor: theme.palette.primary.main,
//   },
//   marginTop: theme.spacing(3),
//   textAlign: "center",
// }));

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
  return (
    <Columns
      left={<StyledTitle {...{ subtitle, text, title }} />}
      right={
        <Carousel
          autoPlay
          showDots
          ssr={true}
          renderButtonGroupOutside={false}
          arrows={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 1,
            },
          }}
        >
          {testimonials.map((quote, index) => (
            <Typography
              textAlign="center"
              fontSize="1.2rem"
              key={index}
              height={150}
            >
              <FormatQuoteIcon />
              {quote}
              <FormatQuoteIcon />
            </Typography>
          ))}
        </Carousel>
      }
    />
  );
};

export default IndexTestimonials;
