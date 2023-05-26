// FIXME
/* eslint-disable react/no-unescaped-entities */
import { Trans, t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Box, Grid, Link, Typography } from "@mui/material";
import productsDressageOlympicLettera from "assets/products/dressage/olympic-lettera.jpg";
import productsDressageOlympicModuloDressage from "assets/products/dressage/olympic-modulo-dressage.jpg";
import productsDressageRettangoloDressage20x40 from "assets/products/dressage/rettangolo-dressage-20x40.jpg";
import productsDressageRettangoloDressage20x60 from "assets/products/dressage/rettangolo-dressage-20x60.jpg";
import productsDressageTrainingLettera from "assets/products/dressage/training-lettera.jpg";
import productsDressageTrainingModuloDressage from "assets/products/dressage/training-modulo-dressage.jpg";
import { Product, Section, Th, Ul } from "components";
import { ProductData } from "components/Product";
import { usePages } from "hooks";
import React from "react";
import { Colors, PRODUCT_GUTTER } from "theme";
import { MATERIALS } from "utils/constants";
import { ProductId } from "utils/products";
export { getStaticProps } from "utils/getProps";

const Dressage: React.FC = () => {
  const { PAGES } = usePages();
  useLingui(); // Fix on locale change

  const SIZE_20x40 = { size: "20x40", modules: 60, letters: 8 };
  const SIZE_20x60 = { size: "20x60", modules: 80, letters: 12 };

  const MODELS = {
    TRAINING: "Training",
    OLYMPIC: "Olympic",
  };

  const DESCRIPTION_20x40 = (
    <Trans>
      <Typography paragraph>
        Un set per creare un circuito dressage standard da {SIZE_20x40.size} mt.
      </Typography>
      <Typography paragraph>Il set contiene:</Typography>
      <Ul>
        <li>{SIZE_20x40.modules} moduli</li>
        <li>{SIZE_20x40.letters} lettere</li>
      </Ul>
    </Trans>
  );

  const DESCRIPTION_20x60 = (
    <Trans>
      <Typography paragraph>
        Un set per creare un circuito dressage standard da {SIZE_20x60.size} mt.
      </Typography>
      <Typography paragraph>Il set contiene:</Typography>
      <Ul>
        <li>{SIZE_20x60.modules} moduli</li>
        <li>{SIZE_20x60.letters} lettere</li>
      </Ul>
    </Trans>
  );

  const TRAINING_PRODUCTS: ProductData[] = [
    {
      colors: [Colors.WHITE],
      height: 300,
      id: ProductId.DRESSAGE_TRAINING_LETTERA,
      materials: [MATERIALS.POLIETILENE],
      name: t`Lettera dressage (${MODELS.TRAINING})`,
      pictures: [productsDressageTrainingLettera],
      price: 25.5,
      weight: 0.5,
      width: 200,
    },
    {
      colors: [Colors.WHITE],
      height: 285,
      id: ProductId.DRESSAGE_TRAINING_MODULO,
      name: t`Modulo dressage (${MODELS.TRAINING})`,
      pictures: [productsDressageTrainingModuloDressage],
      weight: 3,
      width: 2000,
    },
    {
      description: DESCRIPTION_20x40,
      id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X40,
      name: t`Rettangolo dressage ${SIZE_20x40.size} (${MODELS.TRAINING})`,
      pictures: [productsDressageRettangoloDressage20x40],
      price: 1400,
    },
    {
      description: DESCRIPTION_20x60,
      id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X60,
      name: t`Rettangolo dressage ${SIZE_20x60.size} (${MODELS.TRAINING})`,
      pictures: [productsDressageRettangoloDressage20x60],
      price: 1800,
    },
  ];

  const OLYMPIC_PRODUCTS: ProductData[] = [
    {
      colors: [Colors.WHITE],
      height: 700,
      id: ProductId.DRESSAGE_OLYMPIC_LETTERA,
      name: t`Lettera dressage (${MODELS.OLYMPIC})`,
      pictures: [productsDressageOlympicLettera],
      price: 62,
      weight: 2.5,
      width: 390,
    },
    {
      colors: [Colors.WHITE],
      height: 370,
      id: ProductId.DRESSAGE_OLYMPIC_MODULO,
      name: t`Modulo dressage (${MODELS.OLYMPIC})`,
      pictures: [productsDressageOlympicModuloDressage],
      weight: 5,
      width: 2000,
    },
    {
      description: DESCRIPTION_20x40,
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X40,
      name: t`Rettangolo dressage ${SIZE_20x40.size} (${MODELS.OLYMPIC})`,
      pictures: [productsDressageRettangoloDressage20x40],
      price: 5940,
    },
    {
      description: DESCRIPTION_20x60,
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
      name: t`Rettangolo dressage ${SIZE_20x60.size} (${MODELS.OLYMPIC})`,
      pictures: [productsDressageRettangoloDressage20x60],
      price: 7920,
    },
  ];

  return (
    <>
      <Section>
        <Th variant="h1">{PAGES.DRESSAGE.title}</Th>
        <Trans>
          Pessastudio fornisce due soluzioni per trasformare il vostro terreno
          in un'arena da dressage: la gamma{" "}
          <Link href="#dressage-training">training</Link> e quella{" "}
          <Link href="#dressage-olympic">olympic</Link>
        </Trans>
      </Section>

      <Section id="dressage-training" color="warm1">
        <Th variant="h2">{MODELS.TRAINING}</Th>
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
          {TRAINING_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="dressage-olympic">
        <Th variant="h2">{MODELS.OLYMPIC}</Th>
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
          {OLYMPIC_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
};

export default Dressage;
