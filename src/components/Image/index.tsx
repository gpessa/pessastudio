import { styled } from "@mui/material"
import React from "react"

const ImageStyled = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  width: "100%",
}))

const ImageWrapperStyled = styled("div")<Omit<Props, "src">>(
  ({ theme, top, left }) => ({
    "position": "relative",
    "&:after": {
      content: left && top && "''",
      width: "30%",
      paddingBottom: "30%",
      borderRadius: "50%",
      border: `3px solid ${theme.palette.error.main}`,
      display: "block",
      position: "absolute",
      boxSizing: "content-box",
      top,
      left,
    },
  })
)

type Props = { src: string; top?: string; left?: string }

const Image: React.FC<Props> = ({ src, top, left }) => (
  <ImageWrapperStyled {...{ top, left }}>
    <ImageStyled {...{ src }} />
  </ImageWrapperStyled>
)

export default Image
