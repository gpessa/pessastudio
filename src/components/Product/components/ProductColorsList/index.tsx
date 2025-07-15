import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Colors } from "theme";

const ProductColorsList = styled(Box)<{ color: Colors }>(
  ({ theme, color }) => ({
    backgroundColor: color,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "50%",
    height: 14,
    width: 14,
  })
);

const ColorsList: React.FC<{ colors: Colors[] }> = ({ colors }) => (
  <Stack
    direction="row"
    spacing={1}
    sx={{ minHeight: "1.5rem" }}
    alignItems="center"
  >
    {colors.sort().map((color) => (
      <ProductColorsList color={color} key={color}></ProductColorsList>
    ))}
  </Stack>
);

export default ColorsList;
