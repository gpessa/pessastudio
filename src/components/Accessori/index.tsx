import { t } from "@lingui/macro"
import { Box, Grid, GridSize, Stack } from "@mui/material"
import { Image, Section, TH } from "components"
import React, { ReactNode } from "react"
import { PRODUCT_GUTTER } from "theme"

type Props = {
  accessories: {
    name: JSX.Element
    description: ReactNode
    images: {
      src: string
      md?: number
      top?: string
      left?: string
    }[]
  }[]
}

const Accessori: React.FC<Props> = ({ accessories }) => (
  <Section>
    <Box textAlign="center" mb={4}>
      <TH variant="h2">{t`Accessori`}</TH>
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
            <Grid item md sx={{ textAlign: { md: index % 2 == 0 ? "right" : "left" } }}>
              <TH variant="h4" sans>
                {name}
              </TH>
              {description}
            </Grid>
            {images.map(({ src, md = 6, top, left }) => (
              <Grid item md={md as GridSize} xs={6} key={src}>
                <Image {...{ top, left, src }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  </Section>
)

export default Accessori
