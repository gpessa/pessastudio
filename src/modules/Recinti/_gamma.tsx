"use client";

import { Trans } from "@lingui/react/macro";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Product, Section, Th } from "components";
import { ProductDataTranslated } from "hooks/useProducts";
import React from "react";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";

const ProductStyled = styled(Product)(({ theme }) => ({
  "& .MuiTypography-caption": {
    color: theme.palette.grey[400],
  },
  "& button": {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingBottom: "164%",
    width: "100%",
    [theme.breakpoints.up(BREAKPOINT)]: {
      marginBottom: theme.spacing(3),
    },
  },
  "& button img": {
    bottom: 0,
    marginTop: "unset",
    top: "unset",
    transform: "unset",
  },
}));

const Gamma: React.FC<{ products: ProductDataTranslated[] }> = ({
  products,
}) => (
  <Section color="primary">
    <Th variant="h2" align="center">
      <Trans>Gamma</Trans>
    </Th>
    <Grid container spacing={PRODUCT_GUTTER * 2}>
      {products.map((item, index) => (
        <Grid
          key={index}
          size={{
            md: 3,
          }}
        >
          <ProductStyled {...item} vertical />
        </Grid>
      ))}
    </Grid>
  </Section>
);

export default Gamma;
