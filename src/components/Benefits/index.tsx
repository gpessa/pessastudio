import { Grid, styled, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import React, { ReactElement } from "react"
import { Section, Title } from "components"
import { BREAKPOINT } from "theme"
import BenefitsItem from "./BenefitsItem"

const IntroStyled = styled(Grid)(({ theme }) => ({
  marginBottom: -20,
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginBottom: 0,
  },
}))

export type Benefit = {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  description: string | ReactElement
  title: string | ReactElement
}

type Props = {
  text?: any
  title: JSX.Element
  subtitle: JSX.Element
  benefits: Benefit[]
}

const Benefits: React.FC<Props> = ({ title, subtitle, text, benefits }) => (
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
)

export default Benefits
