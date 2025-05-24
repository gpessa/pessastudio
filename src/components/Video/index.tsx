import { styled } from "@mui/material/styles";
import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";
import Section from "../Section";

const VideoSectionStyled = styled(Section)(({ theme }) => ({
  background: `linear-gradient(to bottom, 
    rgba(0,0,0, 0) 150px,
    ${theme.palette.warm1.main} 150px, 
    ${theme.palette.warm1.main} calc(100% - 150px), 
    rgba(0,0,0, 0) calc(100% - 150px)
  )`,
}));

const Video: React.FC<{ videoid: string }> = ({ videoid }) => (
  <VideoSectionStyled>
    <YouTubeEmbed
      videoid={videoid}
      style={
        "width: 80%; max-width: 80%; justify-content: center; margin-left: 10%"
      }
    />
  </VideoSectionStyled>
);

export default Video;
