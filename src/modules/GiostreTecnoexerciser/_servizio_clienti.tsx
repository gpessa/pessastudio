import { Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import { ContentTable, Section, Th } from "components";
import { usePages } from "hooks";
import { useRouter } from "next/router";
import { PRODUCT_GUTTER } from "theme";

const TecnoexerciserServizioClienti = () => {
  const { locale } = useRouter();
  const { PAGES } = usePages();

  const DIMENSIONS = [
    {
      sides: 15,
      size: 12,
    },
    {
      sides: 18,
      size: 14.4,
    },
    {
      sides: 20,
      size: 16,
    },
    {
      sides: 22,
      size: 17.5,
    },
    {
      sides: 24,
      size: 19.2,
    },
  ].map(({ sides, size }) => ({
    label: (
      <Trans>
        Dimensioni giostra {sides} pannelli {size} mt. e istruzioni preparazione
        fondo
      </Trans>
    ),
    file: `/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-${sides}.pdf`,
  }));

  const MANUALI = {
    it: [
      {
        label: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.title,
        link: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.url,
      },
      {
        label: <Trans>Manuale quadro di controllo</Trans>,
        file: "/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-it.pdf",
      },
      {
        label: <Trans>Manuale collegamento elettrico</Trans>,
        file: "/products/giostre/giostra-collegamento-elettrico.pdf",
      },
      {
        label: <Trans>Procedura di lubrificazione</Trans>,
        file: "https://www.youtube.com/watch?v=QMA4wPxq_ow",
      },
    ],
    fr: [
      {
        label: <Trans>Manuale quadro di controllo</Trans>,
        file: "/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-fr.pdf",
      },
    ],
  }[locale!];

  const OTHERS = {
    it: [
      {
        label: "Fac simile domanda installazione giostra",
        file: "/products/giostre/tecnoexerciser/pdf/permessi-it.pdf",
      },
    ],
  }[locale!];

  return (
    <Section>
      <Th variant="h4">{<Trans>Supporto clienti</Trans>}</Th>

      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid
          item
          xs={12}
          md
          component={ContentTable}
          rows={DIMENSIONS}
          title={<Trans>Dimensioni</Trans>}
        />
        {MANUALI && (
          <Grid
            item
            xs={12}
            md
            component={ContentTable}
            rows={MANUALI}
            title={<Trans>Manuale d'istruzioni</Trans>}
          />
        )}
        {OTHERS && (
          <Grid
            item
            xs={12}
            md
            component={ContentTable}
            rows={OTHERS}
            title={<Trans>Altro</Trans>}
          />
        )}
      </Grid>
    </Section>
  );
};

export default TecnoexerciserServizioClienti;
