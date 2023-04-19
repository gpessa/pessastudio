import { Button, Stack, styled } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BREAKPOINT } from "theme";
import logo from "assets/generals/logo-hi.jpg";

const DIM = 50;

const TitleStyled = styled("h1")(({ theme }) => ({
  fontFamily: theme.typography.slim.fontFamily,
  color: theme.palette.common.black,
  lineHeight: `${28 * 0.7}px`,
  textTransform: "uppercase",
  margin: "3px 0 0 0",
  fontSize: 28,
}));

const SubtitleStyled = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.slim.fontFamily,
  color: theme.palette.primary.main,
  lineHeight: `${12 * 0.7}px`,
  textTransform: "uppercase",
  fontWeight: "normal",
  letterSpacing: 3.7,
  fontSize: 12,
  marginTop: 6,
}));

const LogoImgStyled = styled(Image)(({ theme }) => ({
  marginRight: theme.spacing(1),
  width: DIM * 0.8,
  height: DIM * 0.8,
  [theme.breakpoints.up(BREAKPOINT)]: {
    width: DIM,
    height: DIM,
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  padding: 0,
}));

const Logo: React.FC = (props) => (
  <Link passHref href="/">
    <ButtonStyled variant="text">
      <Stack direction="row" alignContent="center" alignItems="center">
        <LogoImgStyled src={logo} alt="Pessastudio" height={DIM} width={DIM} />
        <hgroup>
          <TitleStyled>Pessastudio</TitleStyled>
          <SubtitleStyled {...props}>Horse technology</SubtitleStyled>
        </hgroup>
      </Stack>
    </ButtonStyled>
  </Link>
);

export default Logo;
