import { GridSize } from "@mui/material";
import { styled } from "@mui/material/styles";
import NextImage from "next/image";
import React from "react";

const ImageStyled = styled(NextImage)(() => ({
  borderRadius: "50%",
  height: "auto",
  width: "100%",
}));

const ImageWrapperStyled = styled("div")<
  Pick<AccessoriImageProps, "top" | "left">
>(({ theme, top, left }) => ({
  "&:after": left &&
    top && {
      border: `3px solid ${theme.palette.error.main}`,
      borderRadius: "50%",
      boxSizing: "content-box",
      content: "''",
      display: "block",
      left,
      paddingBottom: "30%",
      position: "absolute",
      top,
      width: "30%",
    },
  position: "relative",
}));

export type AccessoriImageProps = Picture & {
  md?: GridSize;
  top?: string;
  left?: string;
};

const AccessoriImage: React.FC<AccessoriImageProps> = ({
  image,
  top,
  left,
  caption,
}) => (
  <ImageWrapperStyled {...{ left, top }}>
    <ImageStyled src={image} alt={caption || ""} width={300} height={300} />
  </ImageWrapperStyled>
);

export default AccessoriImage;
