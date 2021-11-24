import { styled, Typography, TypographyProps } from "@mui/material"

type Props = {
  sans?: boolean
} & TypographyProps

const TH = styled(Typography)<Props>(({ theme, sans }) => ({
  fontFamily: sans ? theme.typography.fontFamily : undefined,
}))

TH.defaultProps = {
  gutterBottom: true,
}

export default TH
