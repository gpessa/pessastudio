import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import { BREAKPOINT } from "theme";
import { styled } from "@mui/material/styles";

export type TitleProps = {
  text?: JSX.Element | string;
  title: JSX.Element | string;
  subtitle?: JSX.Element | string;
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
    {text && <>{text}</>}
  </StyledBox>
);

export default Title;
