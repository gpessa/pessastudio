import { Trans } from "@lingui/macro";
import { Grid, styled } from "@mui/material";
import { Product, Section, Th } from "components";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";

import { ProductData } from "components/Product";

const ProductStyled = styled(Product)(({ theme }) => ({
  "& button": {
    backgroundColor: "transparent",
    paddingBottom: "164%",
    borderWidth: 0,
    width: "100%",
    [theme.breakpoints.up(BREAKPOINT)]: {
      marginBottom: theme.spacing(3),
    },
  },
  "& button img": {
    marginTop: "unset",
    transform: "unset",
    top: "unset",
    bottom: 0,
  },
  "& .MuiTypography-caption": {
    color: theme.palette.grey[400],
  },
}));

const Gamma: React.FC<{ products: ProductData[] }> = ({ products }) => (
  <Section color="primary">
    <Th variant="h2" align="center">
      <Trans>Gamma</Trans>
    </Th>
    <Grid container spacing={PRODUCT_GUTTER * 2}>
      {products.map((item, index) => (
        <Grid item key={index} md={3}>
          <ProductStyled {...item} vertical />
        </Grid>
      ))}
    </Grid>
  </Section>
);

export default Gamma;
