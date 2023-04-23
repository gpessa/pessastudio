import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import Visibility from "@mui/icons-material/Visibility";
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
} from "@mui/material";
import { Th } from "components";
import { Trans } from "next-i18next";
import Link from "next/link";
import React from "react";

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  "&.file": {
    color: theme.palette.error.main,
  },
}));

ButtonStyled.defaultProps = {
  variant: "text",
};

type Props = {
  title: string | JSX.Element;
  rows: {
    label: string | JSX.Element;
    link?: string;
    file?: string;
  }[];
} & Pick<BoxProps, "sx">;

const ContentTable: React.FC<Props> = ({ rows, title, ...props }: Props) => (
  <Box {...props}>
    <Th variant="h5" sans sx={{ mb: 2 }}>
      {title}
    </Th>
    <TableContainer component={Paper} elevation={0} variant="outlined">
      <Table>
        <TableBody>
          {rows.map(({ label, link, file }, index) => (
            <TableRow key={index}>
              <TableCell>{label}</TableCell>

              <TableCell align="right">
                {link && (
                  <Link href={link} legacyBehavior passHref>
                    <ButtonStyled color="inherit" endIcon={<Visibility />}>
                      <Trans i18nKey="General.view">Vedi</Trans>
                    </ButtonStyled>
                  </Link>
                )}

                {file && (
                  <ButtonStyled
                    href={file}
                    //@ts-ignore
                    target="_blank"
                    color="inherit"
                    endIcon={<PictureAsPdf color="error" />}
                  >
                    <Trans i18nKey="General.download">Scarica</Trans>
                  </ButtonStyled>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ContentTable;
