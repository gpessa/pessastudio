"use client";

import { Trans } from "@lingui/react/macro";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import Visibility from "@mui/icons-material/Visibility";
import {
  Box,
  BoxProps,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Th } from "components";

const ButtonStyled = styled(Button)(({ theme }) => ({
  "&.file": {
    color: theme.palette.error.main,
  },
  marginLeft: theme.spacing(1),
}));

type Props = {
  title: ReactNode;
  rows: {
    label: ReactNode;
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
                  <Link href={link} passHref>
                    <ButtonStyled endIcon={<Visibility />} variant="text">
                      <Trans>Vedi</Trans>
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
                    variant="text"
                  >
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
);

export default ContentTable;
