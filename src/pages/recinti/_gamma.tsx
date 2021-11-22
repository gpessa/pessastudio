import { t, Trans } from "@lingui/macro"
import { Grid, styled, Typography } from "@mui/material"
import React from "react"
import { Section, TH } from "components"
import { PRODUCT_GUTTER } from "theme"

const DivStyled = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "100%",
  paddingBottom: "164%",
  width: "100%",
}))

const Gamma = () => {
  const PRODUCTS = [
    {
      height: 1200,
      name: t`Recinzione 1 filagna`,
      image: require("assets/products/recinti/svg-1.svg").default,
      description: (
        <Trans>
          La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è
          adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa
        </Trans>
      ),
    },
    {
      height: 1350,
      name: t`Recinzione 2 filagne`,
      image: require("assets/products/recinti/svg-2.svg").default,
      description: (
        <Trans>
          La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare
          paddock dove i cavalli sono comunque osservati dal personale presente
        </Trans>
      ),
    },
    {
      height: 1600,
      name: t`Recinzione 3 filagne`,
      image: require("assets/products/recinti/svg-3.svg").default,
      description: (
        <Trans>
          La recinzione a tre filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al
          giorno incustoditi oppure per delimitare confini di proprietà o aree. Per garantirne una maggiore sicurezza è
          possibile installare un impianto d'elettrificazione sulle filagne
        </Trans>
      ),
    },
    {
      height: 1900,
      name: t`Recinzione 4 filagne`,
      image: require("assets/products/recinti/svg-4.svg").default,
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
      <TH variant="h2" align="center">{t`Gamma`}</TH>
      <Grid container spacing={PRODUCT_GUTTER * 2}>
        {PRODUCTS.map(({ image, name, description }, index) => (
          <Grid item key={index} md={3}>
            <DivStyled style={{ backgroundImage: `url(${image})` }} />
            <TH variant="h6" sans>
              {name}
            </TH>
            <Typography>{description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export default Gamma
