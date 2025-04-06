import { Trans } from "@lingui/react/macro";
import { t } from "@lingui/core/macro";
import { Grid, Typography } from "@mui/material";
import { Gallery, Section, Th } from "components";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";
import {
  GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO,
  GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE,
} from "utils/constants";

import { useLingui } from "@lingui/react";
import productsGiostreIppowalkerCorridoioCompensatoMarino from "assets/products/giostre/ippowalker/corridoio/compensato-marino.jpg";
import productsGiostreTecnoexerciserCorridoioTecnofence from "assets/products/giostre/tecnoexerciser/corridoio/tecnofence.jpg";

const IppowalkerCorridoi = () => {
  useLingui(); // Fix on locale change

  const IMAGES: Picture[] = [
    {
      caption: t`Corridoio TECNOFENCE`,
      image: productsGiostreTecnoexerciserCorridoioTecnofence,
    },
    {
      caption: t`Corridoio EASY in compensato marino`,
      image: productsGiostreIppowalkerCorridoioCompensatoMarino,
    },
  ];

  return (
    <Section>
      <Grid
        container
        spacing={PRODUCT_GUTTER}
        direction={{ [BREAKPOINT]: "row-reverse" }}
      >
        <Grid
          size={{
            md: 6,
          }}
        >
          <Th variant="h3" sans textAlign="right">
            <Trans>I corridoi</Trans>
          </Th>

          <Typography mx={{ marginBottom: 2 }}>
            <Trans>
              Anche in questo semplice modello potrai decidere di dotare la tua
              giostra di un corridoio scegliendo tra il piú economico corridoio
              costituito dalla recinzione <strong>TECNOFENCE</strong> o il
              corridoio <strong>EASY</strong> in pannelli di compensato marino.
            </Trans>
          </Typography>

          {GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE}

          {GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO(15, "EASY")}
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

export default IppowalkerCorridoi;
