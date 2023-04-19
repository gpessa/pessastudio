import { Trans } from "@lingui/macro";
import {
  Divider,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Title from "components/Title";
import React from "react";
import theme, { BREAKPOINT } from "theme";
import Section from "components/Section";
import Map from "./Map";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

const BottomPartStyled = styled(Section)(({ theme }) => ({
  color: theme.palette.grey[500],
  textAlign: "center",
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(4),
  width: 300,
  [theme.breakpoints.up(BREAKPOINT)]: {
    width: 1,
    margin: "unset",
  },
}));

const Footer: React.FC = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT));

  return (
    <footer>
      <Section color="warm2">
        <Grid container justifyContent="space-evenly">
          <Grid item md={4} xs={12}>
            <Title
              title={<Trans>Socials</Trans>}
              subtitle={<Trans>Seguici</Trans>}
              text={
                <Trans>
                  Seguici sui nostra social e scopri le ultime novità
                </Trans>
              }
            />
            <Socials />
          </Grid>

          <DividerStyled
            orientation={isDesktop ? "vertical" : "horizontal"}
            flexItem={isDesktop}
          />

          <Grid item md={4} xs={12}>
            <Title
              title={<Trans>Iscriviti alla nostra newsletter</Trans>}
              subtitle={<Trans>Newsletters</Trans>}
              text={
                <Trans>Rimani informato sui nostri sconti e gli eventi</Trans>
              }
            />
            <Newsletter />
          </Grid>
        </Grid>
      </Section>

      <Map />

      <BottomPartStyled spacing="small">
        <Typography variant="small">
          {
            <Trans>
              COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A.
              414822
            </Trans>
          }
        </Typography>
      </BottomPartStyled>
    </footer>
  );
};

export default Footer;
