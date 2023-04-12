import { t, Trans } from "@lingui/macro"
import { Box, Grid, Link, Typography } from "@mui/material"
import { Product, Section, TH, Ul } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"
import { Colors, MATERIALS } from "utils/constants"

const Dressage: React.FC = () => {
  const DESCRIPTION_20x40 = (
    <Trans>
      <Typography paragraph>Un set per creare un circuito dressage standard da 20x40 mt.</Typography>
      <Typography paragraph>Il set contiene:</Typography>
      <Ul>
        <li>60 moduli</li>
        <li>8 lettere</li>
      </Ul>
    </Trans>
  )

  const DESCRIPTION_20x60 = (
    <Trans>
      <Typography paragraph>Un set per creare un circuito dressage standard da 20x60 mt.</Typography>
      <Typography paragraph>Il set contiene:</Typography>
      <Ul>
        <li>80 moduli</li>
        <li>12 lettere</li>
      </Ul>
    </Trans>
  )

  const TRAINING_PRODUCTS = [
    {
      name: t`Lettera dressage light`,
      images: [{ src: require("assets/products/dressage/training-lettera.jpg").default }],
      width: 200,
      height: 300,
      weight: 0.5,
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIETILENE],
      price: 20,
    },
    {
      name: t`Modulo dressage`,
      images: [{ src: require("assets/products/dressage/training-modulo-dressage.jpg").default }],
      width: 2000,
      weight: 3,
      height: 285,
      colors: [Colors.WHITE],
    },
    {
      description: DESCRIPTION_20x60,
      name: t({ message: `Rettangolo dressage {size} ({type})`, values: { size: "20x60", type: "TRAINING" } }),
      images: [{ src: require("assets/products/dressage/rettangolo-dressage-20x60.jpg").default }],
      price: 1800,
    },
    {
      description: DESCRIPTION_20x40,
      name: t({ message: `Rettangolo dressage {size} ({type})`, values: { size: "20x40", type: "TRAINING" } }),
      images: [{ src: require("assets/products/dressage/rettangolo-dressage-20x40.jpg").default }],
      price: 1400,
    },
  ]

  const OLYMPIC_PRODUCTS = [
    {
      name: t`Lettera dressage`,
      images: [{ src: require("assets/products/dressage/olympic-lettera.jpg").default }],
      width: 390,
      height: 700,
      weight: 2.5,
      colors: [Colors.WHITE],
      price: 51,
    },
    {
      name: t`Modulo dressage`,
      images: [{ src: require("assets/products/dressage/olympic-modulo-dressage.jpg").default }],
      width: 2000,
      height: 370,
      weight: 5,
      colors: [Colors.WHITE],
    },
    {
      description: DESCRIPTION_20x60,
      name: t({ message: `Rettangolo dressage {size} ({type})`, values: { size: "20x60", type: "OLYMPIC" } }),
      images: [{ src: require("assets/products/dressage/rettangolo-dressage-20x60.jpg").default }],
      price: 7900,
    },
    {
      description: DESCRIPTION_20x40,
      name: t({ message: `Rettangolo dressage {size} ({type})`, values: { size: "20x40", type: "OLYMPIC" } }),
      images: [{ src: require("assets/products/dressage/rettangolo-dressage-20x40.jpg").default }],
      price: 5900,
    },
  ]

  return (
    <>
      <Section>
        <TH variant="h1">
          <Trans>Dressage</Trans>
        </TH>
        <Trans>
          Pessastudio fornisce due soluzioni per trasformare il vostro terreno in un'arena da dressage: la gamma{" "}
          <Link href="#dressage-training">training</Link> e quella <Link href="#dressage-olympic">olympic</Link>
        </Trans>
      </Section>

      <Section id="dressage-training" color="warm1">
        <TH variant="h2">
          <Trans>Training</Trans>
        </TH>
        <Box sx={{ mb: PRODUCT_GUTTER }}>
          <Trans>
            <Typography>
              Il rettangolo della linea <strong>training</strong> è rivolto a quei maneggi in cui lo spazio a
              disposizione è limitato e il rettangolo viene installato provvisoriamente.
            </Typography>
            <Typography>
              Facile da montare, è costituito da elementi modulari di 2 mt. in materiale plastico, non richiede alcuna
              manutenzione e occupa poco spazio quando non è utilizzato.
            </Typography>
          </Trans>
        </Box>
        <Grid container spacing={PRODUCT_GUTTER}>
          {TRAINING_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="dressage-olympic">
        <TH variant="h2">
          <Trans>Olimpic</Trans>
        </TH>
        <Box sx={{ mb: PRODUCT_GUTTER }}>
          <Trans>
            <Typography>
              La linea <strong>olympic</strong>, presente sul mercato da oltre vent'anni, è rappresentata da un
              rettangolo professionale, dove il campo da dressage è utilizzato quotidianamente.
            </Typography>
            <Typography>
              Il campo è delimitato da moduli accostabili tra di loro, ciascuno dei quali è lungo 2 mt. Ogni modulo è
              costruito in polietilene antiurto resistente anche alle basse temperature e che non ingiallisce sotto
              l'azione dei raggi ultravioletti.
            </Typography>
            <Typography>
              Su ciascun modulo sono previste tre aree piane con superficie lucida di 50x12 cm. sulle quali possono
              essere applicati adesivi pubblicitari.
            </Typography>
          </Trans>
        </Box>
        <Grid container spacing={PRODUCT_GUTTER}>
          {OLYMPIC_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  )
}

export default Dressage
