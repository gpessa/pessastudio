import { Box, Grid, GridSize, Stack } from "@mui/material";
import { Picture } from "components/ModalGallery";
import Section from "components/Section";
import Th from "components/Th";
import React, { ReactNode } from "react";
import { PRODUCT_GUTTER } from "theme";
import AccessoriImage from "./AccrssoriImage";
import { Trans } from "next-i18next";

type Props = {
  accessories: {
    name: JSX.Element;
    description: ReactNode;
    images: (Picture & {
      md?: number;
      top?: string;
      left?: string;
    })[];
  }[];
};

const Accessori: React.FC<Props> = ({ accessories }) => (
  <Section>
    <Box textAlign="center" mb={4}>
      <Th variant="h2">
        <Trans i18nKey="General.addon.title">Accessori</Trans>
      </Th>
    </Box>

    <Stack spacing={{ xs: PRODUCT_GUTTER, md: 0 }}>
      {accessories.map(({ name, description, images }, index) => (
        <Box component="section" key={index}>
          <Grid
            container
            alignItems="center"
            spacing={PRODUCT_GUTTER}
            direction={{ md: index % 2 == 0 ? "row" : "row-reverse" }}
          >
            <Grid
              item
              md
              sx={{ textAlign: { md: index % 2 == 0 ? "right" : "left" } }}
            >
              <Th variant="h4" sans>
                {name}
              </Th>
              {description}
            </Grid>
            {images.map(({ image, md = 6, top, left }) => (
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
