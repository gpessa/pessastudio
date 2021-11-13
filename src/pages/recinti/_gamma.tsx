import { Section, TH } from "src/components"
import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"
import { withPrefix } from "gatsby"
import { PRODUCT_GUTTER } from "src/theme"

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
      name: <Trans id={`Recinzione 1 filagna`} />,
      image: require("src/static/products/recinti/svg-1.svg").default,
      description: (
        <Trans
          id={`La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa`}
        />
      ),
    },
    {
      height: 1350,
      name: <Trans id={`Recinzione 2 filagne`} />,
      image: require("src/static/products/recinti/svg-2.svg").default,
      description: (
        <Trans
          id={`La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare paddock dove i cavalli sono comunque osservati dal personale presente`}
        />
      ),
    },
    {
      height: 1600,
      name: <Trans id={`Recinzione 3 filagne`} />,
      image: require("src/static/products/recinti/svg-3.svg").default,
      description: (
        <Trans
          id={`La recinzione a tre filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al giorno incustoditi, meglio se con impianto d'elettrificazione sulle filagne, oppure per confini di proprietà o aree`}
        />
      ),
    },
    {
      height: 1900,
      name: <Trans id={`Recinzione 4 filagne`} />,
      image: require("src/static/products/recinti/svg-4.svg").default,
      description: (
        <Trans
          id={`Le recinzione a quattro filagne utilizzate per delimitare paddock per stalloni, realizzare tondini per la doma e l'addestramento o per formare ovali per il salto in libertà`}
        />
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
