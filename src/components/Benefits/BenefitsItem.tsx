import { Box, Stack } from "@mui/material"
import { TH } from "components"
import React from "react"
import { Benefit } from "."

const BenefitsItem: React.FC<Benefit> = ({ icon: Icon, title, description, ...props }) => (
  <Box {...props}>
    <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center" mb={2}>
      {Icon && <Icon />}
      <TH variant="h6" sans>
        {title}
      </TH>
    </Stack>
    <div>{description}</div>
  </Box>
)

export default BenefitsItem
