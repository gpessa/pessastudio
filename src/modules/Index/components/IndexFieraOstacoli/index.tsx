"use client";

import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Section } from "components";
import NextImage from "next/image";
import theme from "theme";

import logo from "./assets/logo.png";

const FooterStyled = styled(Box)(() => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(4),
  textAlign: "center",
}));

const Center = styled(Grid)(() => ({
  justifyContent: "center",
  display: "flex",
  height: "200px",
  justifyItems: "center",
}));

const DividerStyled = styled(Divider)(() => ({
  borderRightColor: theme.palette.common.white,
  borderRightWidth: "5px",
  height: "200px",
}));

const DividerHorizontalStyled = styled(Divider)(() => ({
  borderBottomColor: theme.palette.primary.dark,
  borderBottomWidth: "20px",
}));

const IndexFieraOstacoli = () => (
  <section>
    <Section spacing="medium" color="primary">
      <Grid container spacing={2} alignContent={"center"} alignItems={"center"}>
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
          <Typography variant="h2">
            Vi aspettiamo dal 6 al 9 novembre 2025
          </Typography>
        </Grid>
      </Grid>
    </Section>

    <DividerHorizontalStyled />

    <Section spacing="small" color="warm2" textAlign="center">
      <Chip
        label={`Padiglione 4 · Stand F7`}
        color="primary"
        size="medium"
        sx={{ fontSize: 30, padding: "22px" }}
      />
    </Section>
  </section>
);

export default IndexFieraOstacoli;
