import { t, Trans } from "@lingui/macro";
import { Grid, Typography } from "@mui/material";
import { Gallery, Section, Th } from "components";
import { Picture } from "components/ModalGallery";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";
import {
  GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO,
  GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE,
} from "utils/constants";

import productsGiostreTecnoexerciserCorridoioCompensatoMarino from "assets/products/giostre/tecnoexerciser/corridoio/compensato-marino.jpg";
import productsGiostreTecnoexerciserCorridoioTecnofence from "assets/products/giostre/tecnoexerciser/corridoio/tecnofence.jpg";

const TecnoexerciserCorridoi = () => {
  const IMAGES: Picture[] = [
    {
      image: productsGiostreTecnoexerciserCorridoioTecnofence,
      caption: t`Corridoio TECNOFENCE`,
    },
    {
      image: productsGiostreTecnoexerciserCorridoioCompensatoMarino,
      caption: t`Corridoio EXERCISER in compensato marino`,
    },
  ];

  return (
    <Section>
      <Grid
        container
        spacing={PRODUCT_GUTTER}
        direction={{ [BREAKPOINT]: "row-reverse" }}
      >
        <Grid md={6} item>
          <Th variant="h3" sans textAlign="right">
            <Trans>I corridoi</Trans>
          </Th>

          <Typography paragraph>
            <Trans>
              La giostra puo essere acquistata scegliendo tra il piú economico
              corridoio costituito dalla recinzione <strong>TECNOFENCE</strong>{" "}
              o il robusto corridoio <strong>EXERCISER</strong> in pannelli in
              compensato marino.
            </Trans>
          </Typography>

          {GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE}

          {GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO(18, "EXERCISER")}
        </Grid>
        <Grid md={6} item>
          <Gallery images={IMAGES} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default TecnoexerciserCorridoi;
