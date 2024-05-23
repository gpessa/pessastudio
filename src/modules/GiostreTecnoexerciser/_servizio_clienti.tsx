import { t, Trans } from "@lingui/macro";
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
    file: `/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-${sides}.pdf`,
    label: (
      <Trans>
        Dimensioni giostra {sides} pannelli {size} mt. e istruzioni preparazione
        fondo
      </Trans>
    ),
  }));

  const MANUALI = {
    fr: [
      {
        file: "/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-fr.pdf",
        label: t`Manuale quadro di controllo`,
      },
    ],
    it: [
      {
        label: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.title,
        link: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.url,
      },
      {
        file: "/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-it.pdf",
        label: t`Manuale quadro di controllo`,
      },
      {
        file: "/products/giostre/giostra-collegamento-elettrico.pdf",
        label: t`Manuale collegamento elettrico`,
      },
      {
        file: "https://www.youtube.com/watch?v=QMA4wPxq_ow",
        label: t`Procedura di lubrificazione`,
      },
    ],
  }[locale!];

  const OTHERS = {
    it: [
      {
        file: "/products/giostre/tecnoexerciser/pdf/permessi-it.pdf",
        label: "Fac simile domanda installazione giostra",
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
