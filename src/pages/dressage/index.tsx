import { Product, Section, TH, Ul } from "src/components"
import { Colors, MATERIALS } from "src/constants"
import { t, Trans } from "@lingui/macro"
import { Box, Grid, Link, Typography } from "@mui/material"
import { PRODUCT_GUTTER } from "src/theme"
import { withPrefix } from "gatsby"
import React from "react"

const Dressage: React.FC = () => {
  const DESCRIPTION_20x40 = (
    <Trans>
      <Typography paragraph>Un set per creare un circuito dressage standard da 20x40 mt.</Typography>
      <Typography paragraph>Il set contiene:</Typography>
      <Ul>
        <li>60 moduli</li>
        <li>8 lettere</li>
      </Ul>
      `
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
      `
    </Trans>
  )

  const TRAINING_PRODUCTS = [
    {
      name: t`Lettera dressage light`,
      images: [{ src: withPrefix("/products/dressage/training-lettera.jpg") }],
      width: 200,
      height: 300,
      weight: 0.5,
      colors: [Colors.WHITE],
      materials: [MATERIALS.POLIETILENE],
      price: 20,
    },
    {
      name: t`Modulo dressage`,
      images: [{ src: withPrefix("/products/dressage/training-modulo-dressage.jpg") }],
      width: 2000,
      weight: 3,
      height: 285,
      colors: [Colors.WHITE],
    },
    {
      description: DESCRIPTION_20x60,
      name: t`Rettangolo dressage 20x60`,
      images: [{ src: withPrefix("/products/dressage/rettangolo-dressage-20x60.svg") }],
    },
    {
      description: DESCRIPTION_20x40,
      name: t`Rettangolo dressage 20x40`,
      images: [{ src: withPrefix("/products/dressage/rettangolo-dressage-20x40.svg") }],
    },
  ]

  const OLIMPIC_PRODUCTS = [
    {
      name: t`Lettera dressage`,
      images: [{ src: withPrefix("/products/dressage/olimpic-lettera.jpg") }],
      width: 390,
      height: 700,
      weight: 2.5,
      colors: [Colors.WHITE],
      price: 51,
    },
    {
      name: t`Modulo dressage`,
      images: [{ src: withPrefix("/products/dressage/olimpic-modulo-dressage.jpg") }],
      width: 2000,
      height: 370,
      weight: 5,
      colors: [Colors.WHITE],
      price: 74,
    },
    {
      description: DESCRIPTION_20x60,
      name: t`Rettangolo dressage 20x60`,
      images: [{ src: withPrefix("/products/dressage/rettangolo-dressage-20x60.svg") }],
    },
    {
      description: DESCRIPTION_20x40,
      name: t`Rettangolo dressage 20x40`,
      images: [{ src: withPrefix("/products/dressage/rettangolo-dressage-20x40.svg") }],
    },
  ]

  return (
    <>
      <Section>
        <TH variant="h1">{t`Dressage`}</TH>
        <Trans>
          Pessastudio fornisce due soluzioni per trasformare il vostro terreno in un'arena da dressage: la gamma{" "}
          <Link href="#dressage-training">training</Link> e quella <Link href="#dressage-olimpic">olimpic</Link>
        </Trans>
      </Section>

      <Section id="dressage-training" color="warm1">
        <TH variant="h2">{t`Training`}</TH>
        <Box sx={{ mb: PRODUCT_GUTTER }}>
          <Trans>
            <Typography>
              Il rettangolo della linea <strong>training</strong> è rivolto a quei maneggi, in cui lo spazio a
              disposizione è limitato e il rettangolo viene installato provvisoriamente e velocemente.
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

      <Section id="dressage-olimpic">
        <TH variant="h2">{t`Olimpic`}</TH>
        <Box sx={{ mb: PRODUCT_GUTTER }}>
          <Trans>
            <Typography>
              La linea <strong>olimpic</strong>, presente sul mercato da oltre vent'anni, è rappresentata da un
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
          {OLIMPIC_PRODUCTS.map((product, index) => (
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
