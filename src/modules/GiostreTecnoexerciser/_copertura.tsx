import { Trans, useLingui } from "@lingui/react/macro";
import { Grid, Typography } from "@mui/material";
import productsGiostreTecnoexerciserCoperturaCoperturaLastreOndulate_1 from "assets/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-1.jpg";
import productsGiostreTecnoexerciserCoperturaCoperturaLastreOndulate_2 from "assets/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-2.jpg";
import productsGiostreTecnoexerciserCoperturaCoperturaPvc_1 from "assets/products/giostre/tecnoexerciser/copertura/copertura-pvc-1.jpg";
import productsGiostreTecnoexerciserCoperturaCoperturaPvc_2 from "assets/products/giostre/tecnoexerciser/copertura/copertura-pvc-2.jpg";
import { Gallery, Section, Th } from "components";
import { PRODUCT_GUTTER } from "theme";
import {
  GIOSTRA_COPERTURA_PVC_DESCRIZIONE,
  GIOSTRE_COPERTURA_NOTE,
} from "utils/constants";

const TecnoexerciserCopertura = () => {
  const { t } = useLingui();

  const IMAGES: Picture[] = [
    {
      caption: t`Copertura in PVC`,
      image: productsGiostreTecnoexerciserCoperturaCoperturaPvc_2,
    },
    {
      caption: t`Copertura in PVC`,
      image: productsGiostreTecnoexerciserCoperturaCoperturaPvc_1,
    },
    {
      caption: t`Copertura rigida con lastre ondulate`,
      image: productsGiostreTecnoexerciserCoperturaCoperturaLastreOndulate_1,
    },
    {
      caption: t`Copertura rigida con lastre ondulate`,
      image: productsGiostreTecnoexerciserCoperturaCoperturaLastreOndulate_2,
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
              È possibile acquistare la giostra sprovvista di copertura ma se il
              vostro obbiettivo è quello di poter lavorare 365 giorni all'anno,
              Pessastudio, offre due possibili soluzioni abbinabili al corridoio{" "}
              <strong>Exerciser</strong>.
            </Trans>
          </Typography>

          {GIOSTRA_COPERTURA_PVC_DESCRIZIONE}

          <Typography mx={{ marginBottom: 15 }}>
            <Trans>
              L’alternativa alla copertura in PVC è la{" "}
              <strong>copertura rigida</strong> in lastre di vetroresina. le
              lastre vengono sorrette da una doppia struttura in acciaio zincato
              che permette di avere una migliore distribuzione del peso in caso
              di nevicata e una maggiore sicurezza in caso di forte vento. Una
              soluzione che ti permetterà senza opere murarie di avere una
              struttura robusta e durevole nel tempo.
            </Trans>
          </Typography>

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

export default TecnoexerciserCopertura;
