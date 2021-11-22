import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { Product, Title } from "components"
import { Colors } from "constants"
import { PRODUCT_GUTTER } from "theme"

const Cavalletti: React.FC = () => {
  const PRODUCTS = [
    {
      name: t`Cavalletti Caprilli`,
      description: t`Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.`,
      images: [{ src: require("assets/products/ostacoli/cavalletto-01.png").default }],
      thickness: 100,
      length: 500,
      height: 500,
      weight: 2,
      price: [{ price: 36, note: t`Singolo cavvalleto` }],
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
    {
      name: t`Kit Cavalletti Caprilli + barriera`,
      description: t`Kit comprensivo di 2 cavalletti e una barriera in PPO di colore bianco, diametro 95 mm.
      lunghezza 2 mt.`,
      images: [{ src: require("assets/products/ostacoli/cavalletto-barriera-01.png").default }],
      diameter: 85,
      length: 2000,
      weight: 5.3,
      price: 92,
    },
  ]

  return (
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid item md={6}>
        <Title
          title={t`Cavalletti Caprilli`}
          text={
            <Trans>
              <Typography paragraph>
                I cavalletti Caprilli rappresentano uno strumento essenziale per l'allenamento del vostro animale, il
                passaggio sui cavalletti, rinforza la schiena del cavallo, scioglie la muscolatura e lo induce a
                flettere le articolazioni.
              </Typography>
              <Typography>Lavati con idropulitrice riprendono i colori originari anche dopo 20 anni.</Typography>
            </Trans>
          }
        />
      </Grid>
      <Grid item container md={6} spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12} key={`cavalletti_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Cavalletti
