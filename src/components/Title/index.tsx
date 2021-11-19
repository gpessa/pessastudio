import { Box, Typography, BoxProps } from "@mui/material"
import { styled } from "@mui/material"
import { BREAKPOINT } from "src/theme"
import React from "react"

export type Props = {
  sx?: BoxProps
  text?: any
  title: string
  subtitle?: string
  className?: string
}

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
    <Typography variant="h3" dangerouslySetInnerHTML={{ __html: title }} gutterBottom />
    {text && <>{text}</>}
  </StyledBox>
)

export default Title
