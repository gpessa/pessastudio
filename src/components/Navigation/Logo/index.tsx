import { ButtonBase, Stack, styled } from "@mui/material"
import { BREAKPOINT } from "@theme"
import { withPrefix } from "gatsby"
import { LocalizedLink } from "gatsby-theme-i18n"
import React from "react"

const DIM = 50

const TitleStyled = styled("h1")(({ theme }) => ({
  fontFamily: theme.typography.slim.fontFamily,
  lineHeight: `${28 * 0.7}px`,
  textTransform: "uppercase",
  margin: "3px 0 0 0",
  fontSize: 28,
}))

const SubtitleStyled = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.slim.fontFamily,
  color: theme.palette.primary.main,
  lineHeight: `${12 * 0.7}px`,
  textTransform: "uppercase",
  letterSpacing: 3.7,
  fontSize: 12,
  marginTop: 6,
}))

const LogoImgStyled = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(1),
  width: DIM * 0.8,
  height: DIM * 0.8,
  [theme.breakpoints.up(BREAKPOINT)]: {
    width: DIM,
    height: DIM,
  },
}))

const Logo: React.FC = props => (
  <ButtonBase component={LocalizedLink} to="/">
    <Stack direction="row" alignContent="center" alignItems="center">
      <LogoImgStyled src={withPrefix("/generals/logo.jpg")} alt="Pessastudio" height={DIM} width={DIM} />
      <hgroup>
        <TitleStyled>Pessastudio</TitleStyled>
        <SubtitleStyled {...props}>Horse technology</SubtitleStyled>
      </hgroup>
    </Stack>
  </ButtonBase>
)

export default Logo
