"use client";

import { Chip, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Section } from "components";
import NextImage from "next/image";
import theme, { BREAKPOINT, PRODUCT_GUTTER } from "theme";

import logo from "./assets/logo.png";

const Center = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
}));

const DividerStyled = styled(Divider)(() => ({
  borderRightColor: theme.palette.common.white,
  borderRightWidth: "3px",
  height: "100px",
  [theme.breakpoints.up(BREAKPOINT)]: {
    borderRightWidth: "5px",
    height: "200px",
  },
}));

const DividerHorizontalStyled = styled(Divider)(() => ({
  borderBottomColor: theme.palette.primary.dark,
  borderBottomWidth: "20px",
}));

const ChipSyled = styled(Chip)(({ theme }) => ({
  fontSize: 20,
  padding: theme.spacing(2),
  [theme.breakpoints.up(BREAKPOINT)]: {
    fontSize: 30,
  },
}));

const TypographySyled = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  [theme.breakpoints.up(BREAKPOINT)]: {
    ...theme.typography.h2,
  },
}));

const IndexFieraOstacoli = () => (
  <section>
    <Section spacing="medium" color="primary">
      <Grid
        container
        spacing={PRODUCT_GUTTER}
        alignContent="center"
        alignItems="center"
      >
        <Grid
          size={4}
          offset={1}
          component={NextImage}
          src={logo}
          alt="Fiera 2025"
          height={"auto"}
        />
        <Center size={2}>
          <DividerStyled orientation="vertical" flexItem />
        </Center>
        <Grid size={4}>
          <TypographySyled>
            Vi aspettiamo dal 6 al 9 novembre 2025
          </TypographySyled>
        </Grid>
      </Grid>
    </Section>

    <DividerHorizontalStyled />

    <Section spacing="small" color="warm2" textAlign="center">
      <ChipSyled
        label={`Padiglione 4 | Stand F7`}
        color="primary"
        size="medium"
      />
    </Section>
  </section>
);

export default IndexFieraOstacoli;
