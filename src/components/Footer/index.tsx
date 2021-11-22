import { t } from "@lingui/macro"
import { Divider, Grid, styled, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import { Section, Title } from "components"
import theme, { BREAKPOINT } from "theme"
import Map from "./Map"
import Newsletter from "./Newsletter"
import Socials from "./Socials"

const BottomPartStyled = styled(Section)(({ theme }) => ({
  color: theme.palette.grey[500],
  textAlign: "center",
}))

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(4),
  width: 300,
  [theme.breakpoints.up(BREAKPOINT)]: {
    width: 1,
    margin: "unset",
  },
}))

const Footer: React.FC = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT))

  return (
    <footer>
      <Section color="warm2">
        <Grid container justifyContent="space-evenly">
          <Grid item md={4} xs={12}>
            <Title
              title={t`Socials`}
              subtitle={t`Seguici`}
              text={t`Seguici sui nostra social e scopri le ultime novità`}
            />
            <Socials />
          </Grid>

          <DividerStyled orientation={isDesktop ? "vertical" : "horizontal"} flexItem={isDesktop} />

          <Grid item md={4} xs={12}>
            <Title
              title={t`Iscriviti alla nostra newsletter`}
              subtitle={t`Newsletters`}
              text={t`Rimani informato sui nostri sconti e gli eventi`}
            />
            <Newsletter />
          </Grid>
        </Grid>
      </Section>

      <Map />

      <BottomPartStyled spacing="small">
        <Typography variant="small">{t`COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A. 414822`}</Typography>
      </BottomPartStyled>
    </footer>
  )
}

export default Footer
