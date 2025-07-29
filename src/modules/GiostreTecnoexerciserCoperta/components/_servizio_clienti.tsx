import { Trans, useLingui } from "@lingui/react/macro";
import { Grid } from "@mui/material";
import { ContentTable, Section, Th } from "components";
import { usePages } from "hooks";
import { PRODUCT_GUTTER } from "theme";

const TecnoexerciserServizioClienti = () => {
  const {
    t,
    i18n: { locale },
  } = useLingui();
  const { PAGES } = usePages();

  const DIMENSIONS = [
    {
      file: `/products/giostre/pdf/scheda-techina-giostra-${locale}.pdf`,
      title: t`Scheda tecnica giostra con copertura PVC`,
    },
  ];

  const MANUALI = {
    fr: [
      {
        file: "/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-fr.pdf",
        title: t`Manuale quadro di controllo ${"TECNOEXERCISER"}`,
      },
    ],
    it: [
      PAGES.GIOSTRE_TECNOEXERCISER_COPERTA_ISTRUZIONI_MONTAGGIO,
      {
        file: "/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-it.pdf",
        title: t`Manuale quadro di controllo ${"TECNOEXERCISER"}`,
      },
      {
        file: "/products/giostre/tecnoexerciser/pdf/manuale-quadro-easy-it.pdf",
        title: t`Manuale quadro di controllo ${"EASY"}`,
      },
      {
        file: "https://www.youtube.com/watch?v=QMA4wPxq_ow",
        title: t`Procedura di lubrificazione`,
      },
    ],
  }[locale!];

  const OTHERS = {
    it: [
      {
        file: "/products/giostre/tecnoexerciser/pdf/permessi-it.pdf",
        title: "Fac simile domanda installazione giostra",
      },
    ],
  }[locale!];

  return (
    <Section>
      <Th variant="h4">{<Trans>Supporto clienti</Trans>}</Th>
      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid
          component={ContentTable}
          rows={DIMENSIONS}
          title={<Trans>Dimensioni</Trans>}
          size={{
            md: "grow",
            xs: 12,
          }}
        />
        {MANUALI && (
          <Grid
            component={ContentTable}
            rows={MANUALI}
            title={<Trans>Manuale d'istruzioni</Trans>}
            size={{
              md: "grow",
              xs: 12,
            }}
          />
        )}
        {OTHERS && (
          <Grid
            component={ContentTable}
            rows={OTHERS}
            title={<Trans>Altro</Trans>}
            size={{
              md: "grow",
              xs: 12,
            }}
          />
        )}
      </Grid>
    </Section>
  );
};

export default TecnoexerciserServizioClienti;
