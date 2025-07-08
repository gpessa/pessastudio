import { Trans, useLingui } from "@lingui/react/macro";
import { Grid, Typography } from "@mui/material";
import productsGiostreTecnoexerciserCorridoioCompensatoMarino from "assets/products/giostre/tecnoexerciser/corridoio/compensato-marino.jpg";
import productsGiostreTecnoexerciserCorridoioTecnofence from "assets/products/giostre/tecnoexerciser/corridoio/tecnofence.jpg";
import { Gallery, Section, Th } from "components";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";
import { formatSize } from "utils/format";

const TecnoexerciserCorridoi = () => {
  const { t } = useLingui();

  const IMAGES: Picture[] = [
    {
      caption: t`Corridoio TECNOFENCE`,
      image: productsGiostreTecnoexerciserCorridoioTecnofence,
    },
    {
      caption: t`Corridoio EXERCISER in compensato marino`,
      image: productsGiostreTecnoexerciserCorridoioCompensatoMarino,
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

          <Trans>
            <Typography mx={{ marginBottom: 15 }}>
              Il corridoio exerciser in compensato marino è realizzato con un
              pannelli di multistrato marino spessore {formatSize(18)}{" "}
              antigraffio, antiurto, resistente allo sporco e idrorepellente.
            </Typography>
            <Typography mx={{ marginBottom: 15 }}>
              L’obiettivo di questa soluzione è quello di fornire un elevato
              grado di sicurezza forzando il cavallo a concentrarsi sul percorso
              durante l’allenamento.
            </Typography>
            <Typography mx={{ marginBottom: 15 }}>
              Il corridoio potrà essere installato a terra senza base di cemento
              con puntazze elicoidali lunghezza {formatSize(60)} oppure con
              barre filettate su base di cemento, questa scelta non
              comprometterà la robustezza e durata della struttura. Installando
              la struttura a terra senza base di cemento inoltre la struttura
              rientra come struttura precaria evitando così innumerevoli
              permessi edilizi.
            </Typography>
          </Trans>
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

export default TecnoexerciserCorridoi;
