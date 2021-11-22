import { Trans } from "@lingui/macro"
import { Box, Typography } from "@mui/material"
import React from "react"
import { Section } from "components"

const NotFound: React.FC = () => (
  <Section spacing="big" color="warm1">
    <Box textAlign="center">
      <Typography variant="h2">
        <Trans>Pagina non trovata</Trans>
      </Typography>
      <Typography>
        <Trans>La pagina che stai cercando non esiste</Trans>
      </Typography>
    </Box>
  </Section>
)

export default NotFound
