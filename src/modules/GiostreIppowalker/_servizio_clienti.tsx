import { Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import { ContentTable, Section, Th } from "components";
import { usePages } from "hooks";
import { useRouter } from "next/router";
import { PRODUCT_GUTTER } from "theme";

const IppowalkerServizioClienti = () => {
  const { locale } = useRouter();
  const { PAGES } = usePages();

  const DIMENSIONS = [4, 6].map((horses) => ({
    label: <Trans>Giostra {horses} cavalli</Trans>,
    file: `/products/giostre/ippowalker/pdf/giostra-ippowalker-${horses}.pdf`,
  }));

  const MANUALI = {
    it: [
      {
        label: PAGES.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO.title,
        link: PAGES.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO.url,
      },
      {
        label: <Trans>Manuale quadro di controllo</Trans>,
        // FIXME check it works
        file: "/products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-it.pdf",
      },
      {
        label: <Trans>Manuale collegamento elettrico</Trans>,
        file: "/products/giostre/pdf/giostra-collegamento-elettrico.pdf",
      },
    ],
    fr: [
      {
        label: <Trans>Manuale quadro di controllo</Trans>,
        file: "/products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-fr.pdf",
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
          md={6}
          component={ContentTable}
          title={<Trans>Dimensioni</Trans>}
          rows={DIMENSIONS}
        />
        {MANUALI && (
          <Grid
            item
            xs={12}
            md={6}
            component={ContentTable}
            title={<Trans>Manuale d'istruzioni</Trans>}
            rows={MANUALI}
          />
        )}
      </Grid>
    </Section>
  );
};

export default IppowalkerServizioClienti;
