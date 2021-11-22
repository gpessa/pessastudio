import { Colors } from "constants"
import { Box, Stack } from "@mui/material"
import { styled } from "@mui/material"
import React from "react"

const ColorStyled = styled(Box)<{ color: Colors }>(({ theme, color }) => ({
  width: 14,
  height: 14,
  borderRadius: "50%",
  backgroundColor: color,
  border: `1px solid ${theme.palette.divider}`,
}))

const ColorsList: React.FC<{ colors: Colors[] }> = ({ colors }) => (
  <Stack direction="row" spacing={1} sx={{ minHeight: "1.5rem" }} alignItems="center">
    {colors.sort().map(color => (
      <ColorStyled color={color} key={color}></ColorStyled>
    ))}
  </Stack>
)

export default ColorsList
