import { Product, Title } from "src/components"
import { Colors } from "src/constants"
import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { PRODUCT_GUTTER } from "src/theme"
import { withPrefix } from "gatsby"
import React from "react"

const PRODUCTS = [
  {
    name: <Trans id={`Cavalletti caprilli`} />,
    images: [{ src: require("src/static/products/ostacoli/cavalletto-01.png").default }],
    thickness: 100,
    length: 500,
    height: 500,
    weight: 2,
    price: 36,
    colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
  },
  {
    name: <Trans id={`Kit cavalletti + barriera`} />,
    images: [{ src: require("src/static/products/ostacoli/cavalletto-barriera-01.png").default }],
    diameter: 85,
    length: 2000,
    weight: 5.3,
    price: 92,
  },
]

const Cavalletti: React.FC = () => (
  <Grid container spacing={PRODUCT_GUTTER}>
    <Grid item md={6}>
      <Title
        title={t`Cavalletti caprilli`}
        text={
          <Trans>
            <Typography>
              Il passaggio sui cavalletti, rinforza la schiena del cavallo, scioglie la muscolatura, lo induce a
              flettere le articolazioni.
            </Typography>
            <Typography>
              Questo lavoro dovrà essere fatto in progressione, compatibilmente con le attitudini del cavallo.
            </Typography>
            <Typography>
              Iniziare con passaggi successivi su barriere a terra, quindi su cavalletti di 20 centimetri, quindi
              aumentarne l'altezza fino a 30 centimetri.
            </Typography>
            <Typography>
              Le distanze iniziali di 1,2 metri, vanno via via aumentate per arrivare a distanze fino a 1,7 metri.
            </Typography>
            <Typography>
              Possono essere forniti completi della barriera in PPO di colore bianco, diametro 95 lunghezza 2 metri,
              oppure singolarmente, avendo più fori per inserimento di barriere diametro 90, 95, 100, 105 millimetri.
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

export default Cavalletti
