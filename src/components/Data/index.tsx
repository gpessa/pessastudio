import { Caption } from "src/components"
import { Stack } from "@mui/material"
import React from "react"

const Data: React.FC<{ value: string | JSX.Element; label: string | JSX.Element }> = ({ value, label }) => (
  <Stack direction="row" alignItems="center" mb={0.5}>
    <Caption sx={{ mr: 1 }} gutterBottom={false}>
      {label}:
    </Caption>
    <span>{value}</span>
  </Stack>
)

export default Data
