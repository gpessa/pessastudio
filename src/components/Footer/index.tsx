import {
  Divider,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Section from "components/Section";
import Title from "components/Title";
import { Trans, useTranslation } from "next-i18next";
import React from "react";
import theme, { BREAKPOINT } from "theme";
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
  const { t } = useTranslation();

  const SOCIALS = {
    title: t("General.footer.socials.title", { defaultValue: "Socials" }),
    subtitle: t("General.footer.socials.subtitle", {
      defaultValue: "Seguici",
    }),
    text: t("General.footer.socials.text", {
      defaultValue: "Seguici sui nostra social e scopri le ultime novità",
    }),
  };

  const NEWSLETTER = {
    title: t("General.footer.newsletter.title", {
      defaultValue: "Iscriviti alla nostra newsletter",
    }),
    subtitle: t("General.footer.newsletter.subtitle", {
      defaultValue: "Newsletters",
    }),
    text: t("General.footer.newsletter.text", {
      defaultValue: "Rimani informato sui nostri sconti e gli eventi",
    }),
  };

  return (
    <footer>
      <Section color="warm2">
        <Grid container justifyContent="space-evenly">
          <Grid item md={4} xs={12}>
            <Title {...SOCIALS} />
            <Socials />
          </Grid>

          <DividerStyled
            orientation={isDesktop ? "vertical" : "horizontal"}
            flexItem={isDesktop}
          />

          <Grid item md={4} xs={12}>
            <Title {...NEWSLETTER} />
            <Newsletter />
          </Grid>
        </Grid>
      </Section>

      <Map />

      <BottomPartStyled spacing="small">
        <Typography variant="small">
          {
            <Trans i18nKey="General.footer.text">
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
