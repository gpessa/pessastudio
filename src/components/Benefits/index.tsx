"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Section from "components/Section";
import Title, { TitleProps } from "components/Title";
import React from "react";
import { BREAKPOINT } from "theme";

import BenefitsItem, { BenefitsItemProps } from "./components/BenefitsItem";

const IntroStyled = styled(Grid)(({ theme }) => ({
  marginBottom: -20,
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginBottom: 0,
  },
}));

export type BeneftisProps = TitleProps & {
  benefits: BenefitsItemProps[];
};

const Benefits: React.FC<BeneftisProps> = ({
  title,
  subtitle,
  text,
  benefits,
}) => (
  <Section>
    <Grid container spacing={10} justifyContent="space-between">
      <IntroStyled size={{ md: 5, xs: 12 }}>
        <Title text={text} title={title} subtitle={subtitle} />
      </IntroStyled>
      <Grid
        size={{
          md: 6,
        }}
      >
        <Grid container spacing={6}>
          {benefits.map((item, index) => (
            <Grid key={index} size={6}>
              <BenefitsItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Section>
);

export default Benefits;
