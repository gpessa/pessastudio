import { Container, styled } from "@mui/material"
import React from "react"

const VideoSectionStyled = styled("section")(({ theme }) => ({
  background: `linear-gradient(to bottom, 
      rgba(0,0,0, 0) 100px,
      ${theme.palette.warm1.main} 100px, 
      ${theme.palette.warm1.main} calc(100% - 100px), 
      rgba(0,0,0, 0) calc(100% - 100px)
      )`,
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(8),
  position: "relative",
  zIndex: 1,
}))

const VideoContainerStyled = styled(Container)(() => ({
  position: "relative",
  paddingBottom: "39.1%",
  paddingTop: "30px",
  height: 0,
  overflow: "hidden",
  ["& iframe, .video-container object, .video-container embed"]: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}))

const Video: React.FC<{ src: string }> = ({ src }) => (
  <VideoSectionStyled>
    <VideoContainerStyled>
      <iframe
        width="100%"
        src={`${src}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoContainerStyled>
  </VideoSectionStyled>
)

export default Video
