import { Grid, useMediaQuery, Container } from "@mui/material"
import { styled } from "@mui/system"
import theme, { BREAKPOINT, PRODUCT_GUTTER } from "@theme"
import React, { ReactNode } from "react"
import Section from "../Section"

interface Props {
  left: ReactNode
  right: ReactNode
}

const SectionStyled = styled(Section)(({ theme }) => ({
  position: "relative",
  padding: 0,
  [theme.breakpoints.up(BREAKPOINT)]: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, ${theme.palette.common.white} 50%)`,
  },
}))

const LeftColumn = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  [theme.breakpoints.up(BREAKPOINT)]: {
    backgroundColor: "unset",
    paddingLeft: "0!important",
    padding: theme.spacing(6),
  },
}))

const RightColumn = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: "inherit",
  padding: theme.spacing(2),
  [theme.breakpoints.up(BREAKPOINT)]: {
    backgroundColor: "unset",
    paddingRight: "0!important",
    padding: theme.spacing(6),
  },
}))

const Footer = ({ left, right }: Props) => {
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <SectionStyled spacing="small" disableGutters={true}>
      <Container disableGutters={isSmall}>
        <Grid container>
          <LeftColumn item xs={12} md={6}>
            {left}
          </LeftColumn>
          <RightColumn item xs={12} md={6}>
            {right}
          </RightColumn>
        </Grid>
      </Container>
    </SectionStyled>
  )
}

export default Footer
