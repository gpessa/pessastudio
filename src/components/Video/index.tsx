import { Box, styled } from "@mui/material"
import { Section } from "components"
import React from "react"

const VideoSectionStyled = styled(Section)(({ theme }) => ({
  background: `linear-gradient(to bottom, 
    rgba(0,0,0, 0) 150px,
    ${theme.palette.warm1.main} 150px, 
    ${theme.palette.warm1.main} calc(100% - 150px), 
    rgba(0,0,0, 0) calc(100% - 150px)
  )`,
}))

const BoxStyled = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: "55%",
  height: 0,
}))

const IframeStyled = styled("iframe")({
  position: "absolute",
  height: "100%",
  width: "100%",
  left: 0,
  top: 0,
})

const Video: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <VideoSectionStyled>
    <BoxStyled>
      <IframeStyled
        src={`${src}?controls=0`}
        allowFullScreen
        frameBorder="0"
        title={title}
        width="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></IframeStyled>
    </BoxStyled>
  </VideoSectionStyled>
)

export default Video
