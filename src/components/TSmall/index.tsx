import { Typography } from "@mui/material"
import { styled } from "@mui/system"

const TSmall = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
}))

TSmall.defaultProps = {
  gutterBottom: false,
}

export default TSmall
