import { Box, Divider, Stack, Typography } from "@mui/material";
import Section from "components/Section";
import Th from "components/Th";
import React from "react";
import { PRODUCT_GUTTER } from "theme";

const LegalPage: React.FC<{
  title: string;
  intro: React.ReactNode;
  sections: { title: string | React.ReactNode; content: React.ReactNode }[];
}> = ({ title, intro, sections }) => (
  <Section>
    <Th variant="h1" gutterBottom>
      {title}
    </Th>

    <Stack gap={PRODUCT_GUTTER * 2} divider={<Divider />} mt={PRODUCT_GUTTER}>
      <Typography variant="body1">{intro}</Typography>
      {sections.map(({ title, content }, index) => (
        <Box key={index}>
          <Th variant="h5" gutterBottom sans>
            {title}
          </Th>
          <Typography component="div">{content}</Typography>
        </Box>
      ))}
    </Stack>
  </Section>
);

export default LegalPage;
