"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Th from "components/Th";
import { PageTranslated } from "hooks/usePages";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export type IndexProductItem = PageTranslated;

type IndexProductsItemProps = IndexProductItem & {
  readonly index: number;
  visible?: any;
};

const ImgStyled = styled(Image)(() => ({
  height: "auto",
  width: "100%",
}));

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  paddingTop: theme.spacing(3),
  position: "relative",
  zIndex: 1,
}));

const DescriptionStyled = styled(Typography)(({ theme }) => ({
  minHeight: `${(theme.typography.body1.lineHeight as number) * 4}rem`,
}));

const LinkStyled = styled(NextLink)<{ index: number }>(({ theme }) => ({
  "&:hover": {
    transform: "scale(1.03)",
  },
  color: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  position: "relative",
  textDecoration: "none",
  transition: theme.transitions.create(["opacity", "transform"], {
    duration: theme.transitions.duration.short,
  }),
}));

const IndexProductsItem: React.FC<IndexProductsItemProps> = ({
  index,
  title,
  description,
  image,
  url,
  visible,
}) => (
  <LinkStyled href={url} index={index} sx={{ opacity: visible ? 1 : 0 }}>
    {image && <ImgStyled src={image} alt={title} width={300} height={300} />}
    <BoxStyled>
      <Th variant="h6" sans sx={{ textTransform: "uppercase" }}>
        {title}
      </Th>
      <DescriptionStyled>{description}</DescriptionStyled>
    </BoxStyled>
  </LinkStyled>
);

export default IndexProductsItem;
