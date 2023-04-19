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
    position: "relative",
    "&:after": left &&
      top && {
        top,
        left,
        width: "30%",
        content: "''",
        display: "block",
        borderRadius: "50%",
        paddingBottom: "30%",
        position: "absolute",
        boxSizing: "content-box",
        border: `3px solid ${theme.palette.error.main}`,
      },
  })
);

type Props = {
  top?: string;
  left?: string;
  alt?: string;
  image: StaticImageData;
};

const AccessoriImage: React.FC<Props> = ({ image, top, left, alt }) => (
  <ImageWrapperStyled {...{ top, left }}>
    <ImageStyled src={image} alt={alt || ""} width={300} height={300} />
  </ImageWrapperStyled>
);

export default AccessoriImage;
