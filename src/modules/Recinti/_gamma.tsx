import { t, Trans } from "@lingui/macro";
import { Grid, styled } from "@mui/material";
import { Product, Section, Th } from "components";
import { BREAKPOINT, Colors, PRODUCT_GUTTER } from "theme";
import { MATERIALS } from "utils/constants";

import { useLingui } from "@lingui/react";
import assetsProductsRecintiSvg1 from "assets/products/recinti/svg-1.svg";
import assetsProductsRecintiSvg2 from "assets/products/recinti/svg-2.svg";
import assetsProductsRecintiSvg3 from "assets/products/recinti/svg-3.svg";
import assetsProductsRecintiSvg4 from "assets/products/recinti/svg-4.svg";
import { ProductData } from "components/Product";
import { ProductId } from "types/graphql";

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

const Gamma = () => {
  useLingui(); // Fix on locale change

  const PRODUCTS: ProductData[] = [
    {
      height: 1250,
      name: t`Recinzione cavalli a ${1} filagna`,
      id: ProductId.Recinzione_1Filagna,
      pictures: [assetsProductsRecintiSvg1],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          La recinzione ad una filagna viene utilizzata per delimitare campi da
          lavoro o gara poco adoperati e non è adatta per l'addestramento.
          Potete utilizzarla anche per delimitare un'area del vostro giardino di
          casa
        </Trans>
      ),
    },
    {
      height: 1400,
      name: t`Recinzione cavalli a ${2} filagne`,
      id: ProductId.Recinzione_2Filagne,
      pictures: [assetsProductsRecintiSvg2],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          La recinzione a due filagne genericamente viene utilizzata per
          delimitare campi da lavoro o per realizzare paddock dove i cavalli
          sono comunque osservati dal personale presente
        </Trans>
      ),
    },
    {
      height: 1650,
      name: t`Recinzione cavalli a ${3} filagne`,
      id: ProductId.Recinzione_3Filagne,
      pictures: [assetsProductsRecintiSvg3],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          La recinzione a tre filagne viene utilizzata per delimitare paddok per
          animali che rimangono per molte ore al giorno incustoditi oppure per
          delimitare confini di proprietà o aree. Per garantirne una maggiore
          sicurezza è possibile installare un impianto d'elettrificazione sulle
          filagne
        </Trans>
      ),
    },
    {
      height: 1950,
      name: t`Recinzione cavalli a ${4} filagne`,
      id: ProductId.Recinzione_4Filagne,
      pictures: [assetsProductsRecintiSvg4],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          Le recinzioni a quattro filagne sono utilizzate per delimitare paddock
          per stalloni, realizzare tondini per la doma e l'addestramento o per
          formare ovali per il salto in libertà
        </Trans>
      ),
    },
  ];

  return (
    <Section color="primary">
      <Th variant="h2" align="center">
        <Trans>Gamma</Trans>
      </Th>
      <Grid container spacing={PRODUCT_GUTTER * 2}>
        {PRODUCTS.map((item, index) => (
          <Grid item key={index} md={3}>
            <ProductStyled {...item} vertical />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Gamma;
