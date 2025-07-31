import { Trans, useLingui } from "@lingui/react/macro";
import { Grid, Typography } from "@mui/material";
import productsGiostreTecnoexerciserCoperturaCoperturaLastreOndulate_1 from "assets/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-1.jpg";
import productsGiostreTecnoexerciserCoperturaCoperturaLastreOndulate_2 from "assets/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-2.jpg";
import productsGiostreTecnoexerciserCoperturaCoperturaPvc_1 from "assets/products/giostre/tecnoexerciser/copertura/copertura-pvc-1.jpg";
import productsGiostreTecnoexerciserCoperturaCoperturaPvc_2 from "assets/products/giostre/tecnoexerciser/copertura/copertura-pvc-2.jpg";
import { Gallery, Section, Th } from "components";
import { PRODUCT_GUTTER } from "theme";
import { GIOSTRE_COPERTURA_NOTE } from "utils/constants";

const TecnoexerciserCoperture = () => {
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
            <Trans>Le coperture</Trans>
          </Th>

          <Trans>
            <Typography mx={{ marginBottom: 15 }}>
              La <strong>copertura in PVC</strong> è composta da una struttura
              in acciaio zincato la quale sorregge un telo in tessuto di
              poliestere spalmato di colore <strong>verde</strong>,{" "}
              <strong>bianco</strong> o <strong>crema</strong> e in base alle
              esigenze del cliente anche in altre colorazioni.
            </Typography>

            <Typography mx={{ marginBottom: 15 }}>
              Questa copertura è in grado di sorreggere un carico neve pari a 80
              kg/mq * e una forza vento pari a 110 Km/h *.
            </Typography>

            <Typography mx={{ marginBottom: 15 }}>
              L’alternativa alla copertura in PVC è la{" "}
              <strong>copertura rigida</strong> formata da pannelli sandwich
              coibentati. I pannelli hanno uno spessore di coibentazione pari a
              1 cm che vi permetterà oltre ad avere una robustezza maggiore di
              attutire il suono delle intemperie ed evitare così che i cavalli
              si spaventino durante le loro sessioni di allenamento.
            </Typography>

            <Typography>
              I pannelli sandwich vengono sorretti da una doppia struttura in
              acciaio zincato che permette di avere una migliore distribuzione
              del peso in caso di nevicata e una maggiore sicurezza in caso di
              forte vento. Una soluzione che ti permetterà senza opere murarie
              di avere una struttura robusta e durevole nel tempo.
            </Typography>
          </Trans>

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

export default TecnoexerciserCoperture;
