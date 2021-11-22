import { Stack } from "@mui/material"
import React from "react"
import { TH } from "components"
import { Benefit } from "."

const BenefitsItem: React.FC<Benefit> = ({ icon: Icon, title, description, ...props }) => (
  <div {...props}>
    <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center" mb={2}>
      {Icon && <Icon />}
      <TH variant="h6" sans>
        {title}
      </TH>
    </Stack>
    <div>{description}</div>
  </div>
)

export default BenefitsItem
