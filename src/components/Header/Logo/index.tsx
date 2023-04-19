import { Button, Stack, styled } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BREAKPOINT } from "theme";
import logo from "assets/generals/logo-all.png";

const ButtonStyled = styled(Button)(({ theme }) => ({
  padding: 0,
  width: 300 * 0.5,
  height: 75 * 0.5,
  [theme.breakpoints.up(BREAKPOINT)]: {
    width: 300 * 0.7,
    height: 75 * 0.7,
  },
}));

const Logo: React.FC = () => (
  <Link passHref href="/">
    <ButtonStyled variant="text">
      <Image src={logo} alt="Pessastudio" fill />
    </ButtonStyled>
  </Link>
);

export default Logo;
