import { Trans } from "@lingui/macro";
import { Box, Typography } from "@mui/material";
import Section from "components/Section";
import React from "react";

const NotFound: React.FC<{
  title: string | JSX.Element;
  description: string | JSX.Element;
}> = ({ title, description }) => (
  <Section spacing="big" color="warm1">
    <Box textAlign="center">
      <Typography variant="h2">
        <Trans>{title}</Trans>
      </Typography>
      <Typography>
        <Trans>{description}</Trans>
      </Typography>
    </Box>
  </Section>
);

export default NotFound;
