import { Trans, useLingui } from "@lingui/react/macro";
import { Grid, Typography } from "@mui/material";
import { Gallery, Section, Th } from "components";
import { PRODUCT_GUTTER } from "theme";
import {
  GIOSTRA_COPERTURA_PVC_DESCRIZIONE,
  GIOSTRE_COPERTURA_NOTE,
} from "utils/constants";
import productsGiostreIppowalkerCoperturaCoperturaPvc1 from "assets/products/giostre/ippowalker/copertura/copertura-pvc-1.jpg";
import productsGiostreIppowalkerCoperturaCoperturaPvc2 from "assets/products/giostre/ippowalker/copertura/copertura-pvc-2.jpg";

const IppowalkerCopertura = () => {
  const { t } = useLingui();

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
          <Typography mx={{ marginBottom: 15 }}>
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
