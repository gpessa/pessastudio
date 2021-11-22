import { t } from "@lingui/macro"
import { PictureAsPdf, Visibility } from "@mui/icons-material"
import { Box, BoxProps, Paper, styled, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import { TH } from "components"
import { Button } from "gatsby-material-ui-components"
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

const ContentTable = ({ rows, title, ...props }: Props) => (
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
                    {t`Vedi`}
                  </ButtonStyled>
                )}

                {file && (
                  <ButtonStyled href={file} target="_blank" color="inherit" endIcon={<PictureAsPdf color="error" />}>
                    {t`Scarica`}
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

type Props = {
  title: string | Element
  rows: {
    label: string | JSX.Element
    link?: string | JSX.Element
    file?: string
  }[]
} & Pick<BoxProps, "sx">

export default ContentTable
