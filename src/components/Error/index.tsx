import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import Section from "components/Section";

const NotFound: React.FC<{
  title: ReactNode;
  description: ReactNode;
}> = ({ title, description }) => (
  <Section spacing="big" color="warm1">
    <Box textAlign="center">
      <Typography variant="h2">{title}</Typography>
      <Typography>{description}</Typography>
    </Box>
  </Section>
);

export default NotFound;
