import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import React, { ReactElement } from "react";
import Th from "components/Th";

type Props = {
  readonly index: number;
  description?: ReactElement | string;
  image: StaticImageData;
  title: string;
  url: string;
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

const LinkStyled = styled(Link)<{ index: number }>(({ theme }) => ({
  "&:hover": {
    transform: "scale(1.03)",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  position: "relative",
  transition: theme.transitions.create(["opacity", "transform"], {
    duration: theme.transitions.duration.short,
  }),
}));

const IndexProductsItem: React.FC<Props> = ({
  index,
  title,
  description,
  image,
  url,
  visible,
}) => (
  <NextLink href={url} passHref legacyBehavior>
    <LinkStyled
      underline="none"
      index={index}
      sx={{ opacity: visible ? 1 : 0 }}
    >
      <ImgStyled src={image} alt={title} width={300} height={300} />
      <BoxStyled>
        <Th variant="h6" sans sx={{ textTransform: "uppercase" }}>
          {title}
        </Th>
        <DescriptionStyled>{description}</DescriptionStyled>
      </BoxStyled>
    </LinkStyled>
  </NextLink>
);

export default IndexProductsItem;
