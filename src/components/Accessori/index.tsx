import { Trans } from "@lingui/macro"
import { Box, Grid, GridSize, styled, Typography } from "@mui/material"
import { Image, Section, TH } from "components"
import React from "react"
import { BREAKPOINT, PRODUCT_GUTTER } from "theme"

const AccessorioStyled = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(PRODUCT_GUTTER),
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginBottom: 0,
  },
}))

type Props = {
  intro: Element | React.ReactElement
  accessories: {
    name: JSX.Element
    description: Element | React.ReactElement
    images: {
      src: string
      md?: number
      top?: string
      left?: string
    }[]
  }[]
}

const Accessori: React.FC<Props> = ({ intro, accessories }) => (
  <Section>
    <Box mb={10} textAlign="center">
      <TH variant="h2">{<Trans>Accessori</Trans>}</TH>
      <Typography mb={4}>{intro}</Typography>
    </Box>

    {accessories.map(({ name, description, images }, index) => (
      <AccessorioStyled component="section" key={index}>
        <Grid
          container
          alignItems="center"
          spacing={PRODUCT_GUTTER}
          direction={{ md: index % 2 == 0 ? "row" : "row-reverse" }}
        >
          <Grid item md sx={{ md: { textAlign: index % 2 == 0 ? "right" : "left" } }}>
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
      </AccessorioStyled>
    ))}
  </Section>
)

export default Accessori
