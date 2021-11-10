import { Typography } from "@mui/material"
import { styled } from "@mui/system"

type Props = {
  sans?: boolean
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const TH = styled(Typography)<Props>(({ theme, sans }) => ({
  fontFamily: sans ? theme.typography.fontFamily : undefined,
}))

TH.defaultProps = {
  gutterBottom: true,
}

export default TH
