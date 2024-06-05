import { Box, styled } from "@mui/material";
import { Section } from "components";
import React from "react";

const VideoSectionStyled = styled(Section)(({ theme }) => ({
  background: `linear-gradient(to bottom, 
    rgba(0,0,0, 0) 150px,
    ${theme.palette.warm1.main} 150px, 
    ${theme.palette.warm1.main} calc(100% - 150px), 
    rgba(0,0,0, 0) calc(100% - 150px)
  )`,
}));

const BoxStyled = styled(Box)(() => ({
  height: 0,
  overflow: "hidden",
  paddingTop: "55%",
  position: "relative",
}));

const IframeStyled = styled("iframe")({
  border: 0,
  height: "100%",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
});

const Video: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <VideoSectionStyled>
    <BoxStyled>
      <IframeStyled
        src={`${src}?controls=0`}
        allowFullScreen
        title={title}
        width="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></IframeStyled>
    </BoxStyled>
  </VideoSectionStyled>
);

export default Video;
