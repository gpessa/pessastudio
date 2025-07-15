import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "assets/generals/logo-all.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BREAKPOINT } from "theme";

const ButtonStyled = styled(Button)(({ theme }) => ({
  "& img": {
    height: "auto",
    maxWidth: "100%",
  },
  height: 75 * 0.5,
  padding: 0,
  [theme.breakpoints.up(BREAKPOINT)]: {
    height: 75 * 0.7,
    width: 300 * 0.7,
  },
  width: 300 * 0.5,
}));

const HeaderLogo: React.FC = () => (
  <Link passHref href="/">
    <ButtonStyled variant="text">
      <Image src={logo} alt="Pessastudio" width={300} height={75} />
    </ButtonStyled>
  </Link>
);

export default HeaderLogo;
