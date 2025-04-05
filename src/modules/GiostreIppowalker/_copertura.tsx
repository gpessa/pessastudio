import { t, Trans } from "@lingui/macro";
import { Grid, Typography } from "@mui/material";
import { Gallery, Section, Th } from "components";
import { PRODUCT_GUTTER } from "theme";
import {
  GIOSTRA_COPERTURA_PVC_DESCRIZIONE,
  GIOSTRE_COPERTURA_NOTE,
} from "utils/constants";

import { useLingui } from "@lingui/react";
import productsGiostreIppowalkerCoperturaCoperturaPvc1 from "assets/products/giostre/ippowalker/copertura/copertura-pvc-1.jpg";
import productsGiostreIppowalkerCoperturaCoperturaPvc2 from "assets/products/giostre/ippowalker/copertura/copertura-pvc-2.jpg";

const IppowalkerCopertura = () => {
  useLingui(); // Fix on locale change

  const IMAGES: Picture[] = [
    {
      caption: t`Copertura in PVC`,
      image: productsGiostreIppowalkerCoperturaCoperturaPvc1,
    },
    {
      caption: t`Copertura in PVC`,
      image: productsGiostreIppowalkerCoperturaCoperturaPvc2,
    },
  ];

  return (
    <Section color="warm1">
      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid
          size={{
            md: 6,
          }}
        >
          <Th variant="h3" sans>
            <Trans>La copertura</Trans>
          </Th>
          <Typography component="p">
            <Trans>
              É possibile acquistare la giostra sprovvista di copertura ma se il
              vostro obbiettivo è quello di poter lavorare 365 giorni all'anno,
              Pessastudio offre la possibilità di dotare la giostra, con
              corridoio EASY, di una <strong>copertura in PVC</strong>.
            </Trans>
          </Typography>

          {GIOSTRA_COPERTURA_PVC_DESCRIZIONE}

          {GIOSTRE_COPERTURA_NOTE}
        </Grid>
        <Grid
          size={{
            md: 6,
          }}
        >
          <Gallery images={IMAGES} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default IppowalkerCopertura;
