import { Stack, Typography } from "@mui/material"
import React from "react"

const Data: React.FC<{ value: string | JSX.Element; label: string | JSX.Element }> = ({ value, label }) => (
  <Stack direction="row" alignItems="center" mb={0.5}>
    <Typography sx={{ mr: 1 }} gutterBottom={false} variant="caption">
      {label}:
    </Typography>
    <span>{value}</span>
  </Stack>
)

export default Data
