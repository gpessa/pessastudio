import { styled } from "@mui/material"
import React from "react"

const ImageStyled = styled("img")(() => ({
  borderRadius: "50%",
  width: "100%",
}))

const ImageWrapperStyled = styled("div")<Omit<Props, "src">>(({ theme, top, left }) => ({
  "position": "relative",
  "&:after":  left && top && {
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
}))

type Props = { src: string; top?: string; left?: string; alt?: string }

const Image: React.FC<Props> = ({ src, top, left, alt }) => (
  <ImageWrapperStyled {...{ top, left }}>
    <ImageStyled {...{ src }} alt={alt} />
  </ImageWrapperStyled>
)

export default Image
