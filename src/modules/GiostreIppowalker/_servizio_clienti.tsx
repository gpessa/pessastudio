import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { Grid } from "@mui/material";
import { ContentTable, Section, Th } from "components";
import { usePages } from "hooks";
import { useRouter } from "next/router";
import { PRODUCT_GUTTER } from "theme";

const IppowalkerServizioClienti = () => {
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
        file: "/products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-fr.pdf",
        label: t`Manuale quadro di controllo`,
      },
    ],
    it: [
      {
        label: PAGES.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO.title,
        link: PAGES.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO.url,
      },
      {
        file: "/products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-it.pdf",
        label: t`Manuale quadro di controllo`,
      },
      {
        file: "/products/giostre/pdf/giostra-collegamento-elettrico.pdf",
        label: t`Manuale collegamento elettrico`,
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
            xs: 12
          }} />
        {MANUALI && (
          <Grid
            component={ContentTable}
            title={<Trans>Manuale d'istruzioni</Trans>}
            rows={MANUALI}
            size={{
              md: 6,
              xs: 12
            }} />
        )}
      </Grid>
    </Section>
  );
};

export default IppowalkerServizioClienti;
