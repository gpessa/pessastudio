import { styled, Typography, TypographyProps } from "@mui/material";

type Props = {
  sans?: boolean;
} & TypographyProps;

const Th = styled(Typography)<Props>(({ theme, sans }) => ({
  fontFamily: sans ? theme.typography.fontFamily : undefined,
}));

Th.defaultProps = {
  gutterBottom: true,
};

export default Th;
