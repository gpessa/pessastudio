import { Section, TH } from "@components"
import { Grid, makeStyles } from "@material-ui/core"
import { COLORS } from "@theme"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"


const useStyle = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white
  },
  title: {
    textTransform: 'uppercase'
  },
  image: {
    width: '100%',
    paddingBottom: "164%",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    marginBottom: theme.spacing(3)
  }
}))

const Gamma = () => {
  const { formatMessage } = useIntl()
  const classes = useStyle()
  
  const PRODUCTS = [
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-4-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-4-filagne__name` }),
      image: require("@images/product/recinti/svg-4.svg"),
      height: 1900,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-3-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-3-filagne__name` }),
      image: require("@images/product/recinti/svg-3.svg"),
      height: 1600,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-2-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-2-filagne__name` }),
      image: require("@images/product/recinti/svg-2.svg"),
      height: 1350,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-1-filagna__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-1-filagna__name` }),
      image: require("@images/product/recinti/svg-1.svg"),
      height: 1200,
    }
  ]

  return (
    <Section color={COLORS.PRIMARY} className={classes.root} spacing="small">
      <TH variant="h2" align="center">{formatMessage({ id: "GENERAL__gamma" })}</TH>
      <Grid container spacing={10}>
        {PRODUCTS.map((product, index) => (
          <Grid item key={index} md={3}>
            <div style={{ backgroundImage: `url(${product.image})` }} className={classes.image} />
            <TH variant="h6" sans className={classes.title}>{product.name}</TH>
            <div>{product.description}</div>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export default Gamma