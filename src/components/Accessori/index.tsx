import { Trans } from "@lingui/macro";
import { Box, Grid, GridSize, Stack } from "@mui/material";
import Section from "components/Section";
import Th from "components/Th";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import AccessoriImage from "./AccessoriImage";

export type AccessoriProps = {
  accessories: {
    name: JSX.Element;
    description: JSX.Element;
    pictures: (Picture & {
      md?: number;
      top?: string;
      left?: string;
    })[];
  }[];
};

const Accessori: React.FC<AccessoriProps> = ({ accessories }) => (
  <Section>
    <Box textAlign="center" mb={4}>
      <Th variant="h2">
        <Trans>Accessori</Trans>
      </Th>
    </Box>

    <Stack spacing={{ xs: PRODUCT_GUTTER, md: 0 }}>
      {accessories.map(({ name, description, pictures }, index) => (
        <Box component="section" key={index}>
          <Grid
            container
            alignItems="center"
            spacing={PRODUCT_GUTTER}
            direction={{ md: index % 2 == 0 ? "row" : "row-reverse" }}
          >
            <Grid
              sx={{ textAlign: { md: index % 2 == 0 ? "right" : "left" } }}
              item
              md
            >
              <Th variant="h4" sans>
                {name}
              </Th>
              {description}
            </Grid>
            {pictures.map(({ image, md = 6, top, left }) => (
              <Grid item md={md as GridSize} xs={6} key={image.src}>
                <AccessoriImage {...{ top, left, image }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  </Section>
);

export default Accessori;
