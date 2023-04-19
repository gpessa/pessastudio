import { Trans } from "@lingui/macro"
import PictureAsPdf from "@mui/icons-material/PictureAsPdf"
import Visibility from "@mui/icons-material/Visibility"
import {
  Box,
  BoxProps,
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"
import { TH } from "components"
import { LocalizedLink } from "gatsby-theme-i18n"
import React from "react"

const ButtonStyled = styled(Button)(({ theme }) => ({
  "marginLeft": theme.spacing(1),
  "&.file": {
    color: theme.palette.error.main,
  },
}))

ButtonStyled.defaultProps = {
  variant: "text",
}

type Props = {
  title: string | JSX.Element
  rows: {
    label: string | JSX.Element
    link?: string | JSX.Element
    file?: string
  }[]
} & Pick<BoxProps, "sx">

const ContentTable: React.FC<Props> = ({ rows, title, ...props }: Props) => (
  <Box {...props}>
    <TH variant="h5" sans sx={{ mb: 2 }}>
      {title}
    </TH>
    <TableContainer component={Paper} elevation={0} variant="outlined">
      <Table>
        <TableBody>
          {rows.map(({ label, link, file }, index) => (
            <TableRow key={index}>
              <TableCell>{label}</TableCell>

              <TableCell align="right">
                {link && (
                  <ButtonStyled to={link} color="inherit" component={LocalizedLink} endIcon={<Visibility />}>
                    <Trans>Vedi</Trans>
                  </ButtonStyled>
                )}

                {file && (
                  <ButtonStyled href={file} target="_blank" color="inherit" endIcon={<PictureAsPdf color="error" />}>
                    <Trans>Scarica</Trans>
                  </ButtonStyled>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
)

export default ContentTable
