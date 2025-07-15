"use client";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Columns from "components/Columns";
import Title, { TitleProps } from "components/Title";
import React from "react";
import Carousel from "react-multi-carousel";

const StyledTitle = styled(Title)(({ theme }) => ({
  "& small": {
    color: theme.palette.grey[400],
  },
}));

const IndexTestimonials: React.FC<
  TitleProps & {
    testimonials: object;
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
          {Object.values(testimonials).map((quote, index) => (
            <Typography
              textAlign="center"
              fontSize="1.2rem"
              key={`testimonials_${index}`}
              height={150}
              component={"div"}
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
