import { Typography } from "@mui/material"
import { styled } from "@mui/system"

const Caption = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  textTransform: "uppercase",
}))

Caption.defaultProps = {
  variant: "caption",
  component: "small",
}

export default Caption
