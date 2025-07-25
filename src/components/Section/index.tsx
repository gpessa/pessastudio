"use client";

import { Container, ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { BREAKPOINT, SECTION_SPACING } from "theme";

const DIMENSION_CONFIGURATION = {
  horizontal: {
    height: "100%",
    width: "50%",
  },
  vertical: {
    height: 530,
    width: "100%",
  },
};

type Props = {
  id?: string;
  image?: "dots";
  className?: string;
  disableGutters?: boolean;
  type?: "vertical" | "horizontal";
  color?: "primary" | "warm1" | "warm2";
  spacing?: "small" | "medium" | "big" | "menu";
  textAlign?: "center" | "justify";
} & Pick<ContainerProps, "maxWidth" | "children" | "sx">;

const SectionStyled = styled(Container)<Props>(
  ({ theme, spacing = "medium", color, type }) => ({
    "&:before": {
      backgroundColor: color && color,
      backgroundSize: "cover",
      content: "''",
      height: "100%",
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%",
      zIndex: -1,
      [theme.breakpoints.up(BREAKPOINT)]: {
        height: type ? DIMENSION_CONFIGURATION[type].height : "100%",
        width: type ? DIMENSION_CONFIGURATION[type].width : "100%",
      },
    },
    overflow: "hidden",
    paddingBottom: SECTION_SPACING("xs")(spacing),
    paddingTop: SECTION_SPACING("xs")(spacing),
    [theme.breakpoints.up(BREAKPOINT)]: {
      paddingBottom: SECTION_SPACING("md")(spacing),
      paddingTop: SECTION_SPACING("md")(spacing),
    },
    position: "relative",
  })
);

const SectionStyledColored = styled(SectionStyled)<Props>(
  ({ theme, color }) =>
    color && {
      ...{
        primary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
        warm1: {
          backgroundColor: theme.palette.warm1.main,
          color: theme.palette.warm1.contrastText,
        },
        warm2: {
          backgroundColor: theme.palette.warm2.main,
          color: theme.palette.warm2.contrastText,
        },
      }[color],
    }
);

const StyledContainer = styled(Container, {
  shouldForwardProp: (props) => props !== "textAlign",
})<{
  textAlign?: "center" | "justify";
}>(({ textAlign }) => ({
  position: "relative",
  textAlign,
}));

const Section: React.FC<Props> = ({ maxWidth, textAlign, ...props }) => (
  <SectionStyledColored {...props} maxWidth={false}>
    <StyledContainer disableGutters {...{ maxWidth, textAlign }}>
      {props.children}
    </StyledContainer>
  </SectionStyledColored>
);

export default Section;
