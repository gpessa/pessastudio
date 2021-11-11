import { Container, ContainerProps } from "@mui/material"
import { styled } from "@mui/system"
import { BREAKPOINT, SECTION_SPACING } from "@theme"
import { withPrefix } from "gatsby-link"
import React from "react"

const DIMENSION_CONFIGURATION = {
  vertical: {
    height: 530,
    width: "100%",
  },
  horizontal: {
    height: "100%",
    width: "50%",
  },
}

type Props = {
  id?: string
  image?: "dots"
  className?: string
  disableGutters?: boolean
  type?: "vertical" | "horizontal"
  color?: "primary" | "warm1" | "warm2"
  spacing?: "small" | "medium" | "big" | "menu"
} & Pick<ContainerProps, "maxWidth" | "children">

const SectionStyled = styled(Container)<Props>(({ theme, spacing = "medium", image, color, type }) => ({
  "overflow": "hidden",
  "position": "relative",
  "paddingTop": `${SECTION_SPACING("xs")(spacing)}`,
  "paddingBottom": `${SECTION_SPACING("xs")(spacing)}`,
  [theme.breakpoints.up(BREAKPOINT)]: {
    paddingTop: `${SECTION_SPACING("md")(spacing)}`,
    paddingBottom: `${SECTION_SPACING("md")(spacing)} `,
  },
  "&:before": {
    backgroundImage: image && `url(${withPrefix(`/patterns/${image}.jpg`)})`,
    backgroundColor: color && color,
    backgroundSize: "cover",
    position: "absolute",
    content: "''",
    width: "100%",
    height: "100%",
    zIndex: -1,
    right: 0,
    top: 0,
    [theme.breakpoints.up(BREAKPOINT)]: {
      height: type ? DIMENSION_CONFIGURATION[type].height : "100%",
      width: type ? DIMENSION_CONFIGURATION[type].width : "100%",
    },
  },
}))

const SectionStyledColored = styled(SectionStyled)<Props>(
  ({ theme, color }) =>
    color && {
      ...{
        primary: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main,
        },
        warm1: {
          color: theme.palette.warm1.contractText,
          backgroundColor: theme.palette.warm1.main,
        },
        warm2: {
          color: theme.palette.warm2.contractText,
          backgroundColor: theme.palette.warm2.main,
        },
      }[color],
    }
)

const StyledContainer = styled(Container)(() => ({
  position: "relative",
}))

const Section: React.FC<Props> = ({ maxWidth, disableGutters, ...props }) => (
  <SectionStyledColored {...props} maxWidth={false}>
    <StyledContainer disableGutters={disableGutters} maxWidth={maxWidth}>
      {props.children}
    </StyledContainer>
  </SectionStyledColored>
)

export default Section
