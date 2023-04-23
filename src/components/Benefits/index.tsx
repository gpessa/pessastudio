import { Grid, styled, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Section from "components/Section";
import Title, { TitleProps } from "components/Title";
import React from "react";
import { BREAKPOINT } from "theme";
import BenefitsItem from "./BenefitsItem";

const IntroStyled = styled(Grid)(({ theme }) => ({
  marginBottom: -20,
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginBottom: 0,
  },
}));

export type Benefit = {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  description: string;
  title: string;
};

export type BenefitsProps = TitleProps & {
  benefits: Benefit[];
};

const Benefits: React.FC<BenefitsProps> = ({
  title,
  subtitle,
  text,
  benefits,
}) => (
  <Section>
    <Grid container spacing={10} justifyContent="space-between">
      <IntroStyled item md={5} xs={12}>
        <Title text={text} title={title} subtitle={subtitle} />
      </IntroStyled>
      <Grid item md={6}>
        <Grid container spacing={6}>
          {benefits.map((item, index) => (
            <Grid item xs={6} key={index}>
              <BenefitsItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Section>
);

export default Benefits;
