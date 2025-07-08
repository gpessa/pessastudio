import { Trans, useLingui } from "@lingui/react/macro";
import { Grid } from "@mui/material";
import { ContentTable, Section, Th } from "components";
import { usePages } from "hooks";
import { PRODUCT_GUTTER } from "theme";

const IppowalkerServizioClienti = () => {
  const {
    t,
    i18n: { locale },
  } = useLingui();
  const { PAGES } = usePages();

  const DIMENSIONS = [
    {
      file: `/products/giostre/pdf/scheda-techina-giostra-${locale}.pdf`,
      title: t`Dimensioni giostra cavalli`,
    },
  ];

  const MANUALI = {
    fr: [
      {
        file: "/products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-fr.pdf",
        title: t`Manuale quadro di controllo`,
      },
    ],
    it: [
      PAGES.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO,
      {
        file: "/products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-it.pdf",
        title: t`Manuale quadro di controllo`,
      },
      {
        file: "/products/giostre/pdf/giostra-collegamento-elettrico.pdf",
        title: t`Manuale collegamento elettrico`,
      },
    ],
  }[locale!];

  return (
    <Section>
      <Th variant="h4">{<Trans>Supporto clienti</Trans>}</Th>
      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid
          component={ContentTable}
          title={<Trans>Dimensioni</Trans>}
          rows={DIMENSIONS}
          size={{
            md: 6,
            xs: 12,
          }}
        />
        {MANUALI && (
          <Grid
            component={ContentTable}
            title={<Trans>Manuale d'istruzioni</Trans>}
            rows={MANUALI}
            size={{
              md: 6,
              xs: 12,
            }}
          />
        )}
      </Grid>
    </Section>
  );
};

export default IppowalkerServizioClienti;
