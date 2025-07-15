"use client";

import { Box, BoxProps, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactNode } from "react";
import { BREAKPOINT } from "theme";

export type TitleProps = {
  text?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
} & Pick<BoxProps, "sx" | "className">;

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    maxWidth: "100%",
  },
}));

const Title: React.FC<TitleProps> = ({
  title,
  sx,
  subtitle,
  text,
  className,
}) => (
  <StyledBox {...{ className, sx }}>
    {subtitle && (
      <Typography variant="caption" gutterBottom>
        {subtitle}
      </Typography>
    )}
    <Typography variant="h3" gutterBottom>
      {title}
    </Typography>
    {text && <Typography component="div">{text}</Typography>}
  </StyledBox>
);

export default Title;
