"use client";

import { Typography, TypographyProps, useTheme } from "@mui/material";

type Props = {
  sans?: boolean;
} & TypographyProps;

const Th: React.FC<Props> = ({ sans, ...props }) => {
  const theme = useTheme();

  return (
    <Typography
      {...props}
      gutterBottom
      fontFamily={sans ? theme.typography.fontFamily : undefined}
    />
  );
};

export default Th;
