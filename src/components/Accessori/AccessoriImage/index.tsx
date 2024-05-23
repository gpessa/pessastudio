import { styled } from "@mui/material";
import NextImage, { StaticImageData } from "next/image";
import React from "react";

const ImageStyled = styled(NextImage)(() => ({
  borderRadius: "50%",
  height: "auto",
  width: "100%",
}));

const ImageWrapperStyled = styled("div")<Pick<Props, "top" | "left">>(
  ({ theme, top, left }) => ({
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
  })
);

type Props = {
  top?: string;
  left?: string;
  alt?: string;
  image: StaticImageData;
};

const AccessoriImage: React.FC<Props> = ({ image, top, left, alt }) => (
  <ImageWrapperStyled {...{ left, top }}>
    <ImageStyled src={image} alt={alt || ""} width={300} height={300} />
  </ImageWrapperStyled>
);

export default AccessoriImage;
