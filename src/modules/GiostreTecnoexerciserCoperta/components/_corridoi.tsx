import { Trans, useLingui } from "@lingui/react/macro";
import { Grid, Typography } from "@mui/material";
import { Gallery, Section, Th } from "components";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";

const TecnoexerciserCorridoi = () => {
  const { t } = useLingui();

  const IMAGES: Picture[] = [
    {
      caption: t`Giostra corridoio coperto crema`,
      image: require("../assets/corridoi/giostra_corridoio_coperto_crema.jpg")
        .default,
    },
    {
      caption: t`Giostra per cavalli con pannellatura in compensato marino`,
      image:
        require("../assets/corridoi/giostra_per_cavalli_con_pannellatura_in_compensato_marino.jpg")
          .default,
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
            <Trans>Il corrido</Trans>
          </Th>

          <Trans>
            <Typography mx={{ marginBottom: 15 }}>
              Il corridoio con copertura in PVC e/o con pannelli{" "}
              <strong>SANDWICH COIBENTATI</strong> è realizzato con pannelli in
              compensato marino spessore 18 antigraffio, antiurto, resistente
              allo sporco e idrorepellente. L’obiettivo di questa soluzione è
              quello di fornire un elevato grado di sicurezza forzando il
              cavallo a concentrarsi sul percorso durante l’allenamento.
            </Typography>

            <Typography mx={{ marginBottom: 15 }}>
              Il corridoio potrà essere installato a terra senza base di cemento
              con puntazze elicoidali lunghezza 60 cm questa scelta ti garantirà
              una struttura con carico neve e carico vento garantendo la
              robustezza e durata della struttura. In alternativa il cliente
              potrà montare la sua struttura direttamente nel cemento tramite
              barre filettate e chimico.
            </Typography>

            <Typography>
              Installando la struttura a terra senza base di cemento è opportuno
              sottolineare che possiamo farla rientrare come struttura precaria
              evitando così innumerevoli permessi edilizi.
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
