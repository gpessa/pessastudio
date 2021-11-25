import { Stack, Typography } from "@mui/material"
import React from "react"

type Props = {
  label: string
  value: number | string | string[] | JSX.Element | JSX.Element[]
}

const Data: React.FC<Props> = ({ value, label }) => (
  <Stack direction="row" alignItems="center" mb={0.5}>
    <Typography sx={{ mr: 1 }} gutterBottom={false} variant="caption" component="caption">
      {label}:
    </Typography>
    <span>{value}</span>
  </Stack>
)

export default Data
