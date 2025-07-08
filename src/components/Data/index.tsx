import { Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  label: ReactNode;
  value: ReactNode;
};

const Data: React.FC<Props> = ({ value, label, ...props }) => (
  <Stack direction="row" alignItems="center" mb={0.5} {...props}>
    <Typography sx={{ mr: 1 }} gutterBottom={false} variant="caption">
      {label}:
    </Typography>
    {value}
  </Stack>
);

export default Data;
