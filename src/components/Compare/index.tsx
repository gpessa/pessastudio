import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Section, Th } from "components";
import { Trans } from "next-i18next";
import React from "react";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";

const TableCellStyled = styled(TableCell)<{ type?: string }>(({ type }) => ({
  display: "table-cell",
  verticalAlign: type === "name" ? "bottom" : "top",
  fontWeight: type === "name" ? "bold" : "inherit",
  textTransform: type === "name" ? "uppercase" : "inherit",
}));

type Props = {
  title: JSX.Element;
  attributes: Attribute;
  products: Product[];
};

type Attribute = {
  [key: string]: JSX.Element | undefined;
};

type Product = {
  [key: keyof Props["attributes"]]: boolean | string | JSX.Element;
};

const Compare: React.FC<Props> = ({ title, ...rest }) => (
  <Section maxWidth={false} disableGutters={true} color="warm1">
    <Typography align="center" variant="h2" mb={3}>
      {title}
    </Typography>
    <CompareXS {...rest} />
    <CompareMD {...rest} />
  </Section>
);

const ContainerXS = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}));

const CompareXS: React.FC<Omit<Props, "title">> = ({
  attributes,
  products,
}) => (
  <ContainerXS spacing={PRODUCT_GUTTER * 2}>
    {products.map((product, index) => (
      <Box key={index}>
        <Th variant="h5" sans sx={{ paddingLeft: 2 }}>
          {product.name}
        </Th>
        <TableContainer>
          <Table>
            <TableBody>
              {Object.entries(attributes)
                .filter(([type]) => type !== "name")
                .map(([type, label]) => (
                  <TableRow key={type}>
                    <TableCellStyled size="medium">
                      <Typography variant="caption">{label}</Typography>
                    </TableCellStyled>
                    <TableCellStyled
                      key={`head_${index}`}
                      size="medium"
                      type={type}
                    >
                      {product[type] || <CloseIcon />}
                    </TableCellStyled>
                  </TableRow>
                ))}
              <TableRow>
                <TableCellStyled
                  size="medium"
                  align="center"
                  key={index}
                  colSpan={2}
                >
                  <Button
                    color="primary"
                    href={`mailto:annapessa@pessastudio.eu?subject=Info Giostra`}
                  >
                    <Trans i18nKey={"General.requireQuote"}>
                      Richiedi un preventivo
                    </Trans>
                  </Button>
                </TableCellStyled>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    ))}
  </ContainerXS>
);

const ContainerMD = styled(TableContainer)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "unset",
  },
}));

const CompareMD: React.FC<Omit<Props, "title">> = ({
  attributes,
  products,
}) => (
  <ContainerMD>
    <Table>
      <TableBody>
        {Object.entries(attributes).map(([type, label]) => (
          <TableRow key={type}>
            <TableCellStyled size="medium">
              <Typography variant="caption">{label}</Typography>
            </TableCellStyled>
            {products.map((product, index) => (
              <TableCellStyled key={`head_${index}`} size="medium" type={type}>
                {product[type] || <CloseIcon />}
              </TableCellStyled>
            ))}
          </TableRow>
        ))}
        <TableRow>
          <TableCellStyled size="medium" />
          {products.map((_, index) => (
            <TableCellStyled size="medium" key={index}>
              <Button
                color="primary"
                href={`mailto:annapessa@pessastudio.eu?subject=Info Giostra`}
              >
                <Trans i18nKey={"General.requireQuote"}>
                  Richiedi un preventivo
                </Trans>
              </Button>
            </TableCellStyled>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </ContainerMD>
);

export default Compare;
