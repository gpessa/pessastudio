import { Section } from "src/components"
import { styled } from "@mui/material"
import React from "react"

const VideoSectionStyled = styled(Section)(({ theme }) => ({
  "background": `linear-gradient(to bottom, 
    rgba(0,0,0, 0) 150px,
    ${theme.palette.warm1.main} 150px, 
    ${theme.palette.warm1.main} calc(100% - 150px), 
    rgba(0,0,0, 0) calc(100% - 150px)
  )`,
  "> *": {
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
  },
}))

const Video: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <VideoSectionStyled>
    <iframe
      width="100%"
      allowFullScreen
      frameBorder="0"
      title={title}
      src={`${src}?controls=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </VideoSectionStyled>
)

export default Video
