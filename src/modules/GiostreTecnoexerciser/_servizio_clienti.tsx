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
      file: `/products/giostre/pdf/scheda-techina-giostra-${locale}.pdf`,
      label: t`Dimensioni giostra cavalli`,
    },
  ];

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
