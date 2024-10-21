import { Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Columns, ContactUs, Gallery, Product, Section, Th } from "components";
import { usePages, useProducts } from "hooks";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { DRESSAGE_MODELS } from "utils/constants";
export { getStaticProps } from "utils/getProps";

const Dressage: React.FC = () => {
  const { PAGES } = usePages();
  const {
    DRESSAGE_TRAINING_LETTERA,
    DRESSAGE_TRAINING_MODULO,
    DRESSAGE_TRAINING_RETTANGOLO_20X40,
    DRESSAGE_TRAINING_RETTANGOLO_20X60,
    DRESSAGE_OLYMPIC_LETTERA,
    DRESSAGE_OLYMPIC_MODULO,
    DRESSAGE_OLYMPIC_RETTANGOLO_20X40,
    DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
  } = useProducts();
  useLingui(); // Fix on locale change

  const IMAGES: Picture[] = [
    {
      caption: DRESSAGE_TRAINING_RETTANGOLO_20X40.name,
      image: require("assets/products/dressage/gallery/rettangolo.jpg"),
    },
  ];

  return (
    <>
      <Columns
        left={
          <>
            <Th variant="h1">{PAGES.DRESSAGE.title}</Th>
            <Trans>
              Pessastudio fornisce due soluzioni per trasformare il vostro
              terreno in un'arena da dressage: la gamma{" "}
              <Link href="#dressage-training">training</Link> e quella{" "}
              <Link href="#dressage-olympic">olympic</Link>
            </Trans>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section id="dressage-training" color="warm1">
        <Th variant="h2">{DRESSAGE_MODELS.TRAINING}</Th>
        <Box sx={{ mb: PRODUCT_GUTTER }}>
          <Trans>
            <Typography>
              Il rettangolo della linea <strong>training</strong> è rivolto a
              quei maneggi in cui lo spazio a disposizione è limitato e il
              rettangolo viene installato provvisoriamente.
            </Typography>
            <Typography>
              Facile da montare, è costituito da elementi modulari di 2 mt. in
              materiale plastico, non richiede alcuna manutenzione e occupa poco
              spazio quando non è utilizzato.
            </Typography>
          </Trans>
        </Box>
        <Grid container spacing={PRODUCT_GUTTER}>
          {[
            DRESSAGE_TRAINING_LETTERA,
            DRESSAGE_TRAINING_MODULO,
            {
              ...DRESSAGE_TRAINING_RETTANGOLO_20X40,
              // We need to print only the first images
              pictures: [DRESSAGE_TRAINING_RETTANGOLO_20X40.pictures[0]],
            },
            {
              ...DRESSAGE_TRAINING_RETTANGOLO_20X60,
              // We need to print only the first images
              pictures: [DRESSAGE_TRAINING_RETTANGOLO_20X60.pictures[0]],
            },
          ].map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="dressage-olympic">
        <Th variant="h2">{DRESSAGE_MODELS.OLYMPIC}</Th>
        <Box sx={{ mb: PRODUCT_GUTTER }}>
          <Trans>
            <Typography>
              La linea <strong>olympic</strong>, presente sul mercato da oltre
              vent'anni, è rappresentata da un rettangolo professionale, dove il
              campo da dressage è utilizzato quotidianamente.
            </Typography>
            <Typography>
              Il campo è delimitato da moduli accostabili tra di loro, ciascuno
              dei quali è lungo 2 mt. Ogni modulo è costruito in polietilene
              antiurto resistente anche alle basse temperature e che non
              ingiallisce sotto l'azione dei raggi ultravioletti.
            </Typography>
            <Typography>
              Su ciascun modulo sono previste tre aree piane con superficie
              lucida di 50x12 cm. sulle quali possono essere applicati adesivi
              pubblicitari.
            </Typography>
          </Trans>
        </Box>
        <Grid container spacing={PRODUCT_GUTTER}>
          {[
            DRESSAGE_OLYMPIC_LETTERA,
            DRESSAGE_OLYMPIC_MODULO,
            {
              ...DRESSAGE_OLYMPIC_RETTANGOLO_20X40,
              // We need to print only the first images
              pictures: [DRESSAGE_OLYMPIC_RETTANGOLO_20X40.pictures[0]],
            },
            {
              ...DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
              // We need to print only the first images
              pictures: [DRESSAGE_OLYMPIC_RETTANGOLO_20X60.pictures[0]],
            },
          ].map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <ContactUs color="warm1" />
    </>
  );
};

export default Dressage;
