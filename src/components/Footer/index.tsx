"use client";

import { Trans } from "@lingui/react/macro";
import { Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Section from "components/Section";
import Title from "components/Title";
import theme, { BREAKPOINT } from "theme";
import FooterMap from "./components/FooterMap";
import FooterNewsletter from "./components/FooterNewsletter";
import FooterSocials from "./components/FooterSocials";

const BottomPartStyled = styled(Section)(({ theme }) => ({
  color: theme.palette.grey[500],
  textAlign: "center",
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(4),
  width: 300,
  [theme.breakpoints.up(BREAKPOINT)]: {
    margin: "unset",
    width: 1,
  },
}));

const Footer: React.FC<{ version: string }> = ({ version }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT));

  return (
    <footer>
      <Section color="warm2">
        <Grid container justifyContent="space-evenly">
          <Grid
            size={{
              md: 4,
              xs: 12,
            }}
          >
            <Title
              title={<Trans>Socials</Trans>}
              subtitle={<Trans>Seguici</Trans>}
              text={
                <Trans>
                  Seguici sui nostra social e scopri le ultime novità
                </Trans>
              }
            />
            <FooterSocials />
          </Grid>

          <DividerStyled
            orientation={isDesktop ? "vertical" : "horizontal"}
            flexItem={isDesktop}
          />

          <Grid
            size={{
              md: 4,
              xs: 12,
            }}
          >
            <Title
              title={<Trans>Iscriviti alla nostra newsletter</Trans>}
              subtitle={<Trans>Newsletters</Trans>}
              text={
                <Trans>Rimani informato sui nostri sconti e gli eventi</Trans>
              }
            />
            <FooterNewsletter />
          </Grid>
        </Grid>
      </Section>
      <FooterMap />
      <BottomPartStyled spacing="small">
        <Typography variant="small">
          <Trans>
            COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A. 414822
          </Trans>{" "}
          | version: {version}
        </Typography>
      </BottomPartStyled>
    </footer>
  );
};

export default Footer;
