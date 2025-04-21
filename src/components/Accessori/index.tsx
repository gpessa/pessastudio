import { Trans } from "@lingui/react/macro";
import { Box, Grid, GridSize, Stack } from "@mui/material";
import Section from "components/Section";
import Th from "components/Th";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import AccessoriImage from "./AccessoriImage";

export type AccessoriProps = {
  accessories: {
    id?: string;
    name: JSX.Element;
    description: JSX.Element;
    pictures: (Picture & {
      md?: GridSize;
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

    <Stack spacing={{ md: 0, xs: PRODUCT_GUTTER }}>
      {accessories.map(({ name, description, pictures, id }, index) => (
        <Box component="section" key={index} id={id}>
          <Grid
            container
            alignItems="center"
            spacing={PRODUCT_GUTTER}
            direction={{ md: index % 2 == 0 ? "row" : "row-reverse" }}
          >
            <Grid
              sx={{ textAlign: { md: index % 2 == 0 ? "right" : "left" } }}
              size={{
                md: "grow",
              }}
            >
              <Th variant="h4" sans>
                {name}
              </Th>
              {description}
            </Grid>
            {pictures.map(({ image, md = 6, top, left }) => (
              <Grid
                key={image.src}
                size={{
                  md: md,
                  xs: 6,
                }}
              >
                <AccessoriImage {...{ image, left, top }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  </Section>
);

export default Accessori;
