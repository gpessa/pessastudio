import { t, Trans } from "@lingui/macro"
import { Grid, styled } from "@mui/material"
import { Product, Section, TH } from "components"
import React from "react"
import { PRODUCT_GUTTER, BREAKPOINT } from "theme"
import { Colors, MATERIALS } from "utils/constants"

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
  "& caption": {
    color: theme.palette.grey[400],
  },
}))

const Gamma = () => {
  const PRODUCTS = [
    {
      height: 1250,
      name: t`Recinzione 1 filagna`,
      images: [{ src: require("assets/products/recinti/svg-1.svg").default }],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è
          adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa
        </Trans>
      ),
    },
    {
      height: 1400,
      name: t`Recinzione 2 filagne`,
      images: [{ src: require("assets/products/recinti/svg-2.svg").default }],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare
          paddock dove i cavalli sono comunque osservati dal personale presente
        </Trans>
      ),
    },
    {
      height: 1650,
      name: t`Recinzione 3 filagne`,
      images: [{ src: require("assets/products/recinti/svg-3.svg").default }],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          La recinzione a tre filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al
          giorno incustoditi oppure per delimitare confini di proprietà o aree. Per garantirne una maggiore sicurezza è
          possibile installare un impianto d'elettrificazione sulle filagne
        </Trans>
      ),
    },
    {
      height: 1950,
      name: t`Recinzione 4 filagne`,
      images: [{ src: require("assets/products/recinti/svg-4.svg").default }],
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIPROPILENE],
      description: (
        <Trans>
          Le recinzioni a quattro filagne sono utilizzate per delimitare paddock per stalloni, realizzare tondini per la
          doma e l'addestramento o per formare ovali per il salto in libertà
        </Trans>
      ),
    },
  ]

  return (
    <Section color="primary">
      <TH variant="h2" align="center">
        <Trans>Gamma</Trans>
      </TH>
      <Grid container spacing={PRODUCT_GUTTER * 2}>
        {PRODUCTS.map((item, index) => (
          <Grid item key={index} md={3}>
            <ProductStyled {...item} vertical />
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export default Gamma
