import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material";
import { BREAKPOINT } from "theme";
import React, { ReactNode } from "react";
import Section from "components/Section";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const SectionStyled = styled(Section)(({ theme }) => ({
  padding: 0,
  position: "relative",
  [theme.breakpoints.up(BREAKPOINT)]: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, ${theme.palette.common.white} 50%)`,
  },
}));

const LeftColumn = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
  [theme.breakpoints.up(BREAKPOINT)]: {
    backgroundColor: "unset",
    padding: theme.spacing(6),
    paddingLeft: "0!important",
  },
}));

const RightColumn = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: "inherit",
  padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
  [theme.breakpoints.up(BREAKPOINT)]: {
    backgroundColor: "unset",
    padding: theme.spacing(6),
    paddingRight: "0!important",
  },
}));

const Footer = ({ left, right }: Props) => (
  <SectionStyled spacing="small" disableGutters={true}>
    <Container disableGutters>
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
);

export default Footer;
