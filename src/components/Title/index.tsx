import { Box, BoxProps, styled, Typography } from "@mui/material"
import React from "react"
import { BREAKPOINT } from "theme"

export type Props = {
  text?: JSX.Element
  title: JSX.Element
  subtitle?: JSX.Element
} & Pick<BoxProps, "sx" | "className">

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    maxWidth: "100%",
  },
}))

const Title: React.FC<Props> = ({ title, sx, subtitle, text, className }) => (
  <StyledBox {...{ sx, className }}>
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
)

export default Title
