import { Grid, SvgIconTypeMap } from "@mui/material";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import Section from "components/Section";
import Title, { TitleProps } from "components/Title";
import React, { ReactElement } from "react";
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
  description: string | ReactElement;
  title: string | ReactElement;
};

export type BeneftisProps = TitleProps & {
  benefits: Benefit[];
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
