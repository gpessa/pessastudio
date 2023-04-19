import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import { SOCIALS } from "utils/constants";
import React from "react";

const Socials: React.FC = () => (
  <>
    <IconButton
      edge="start"
      rel="noreferrer"
      href={SOCIALS.facebook_2}
      title="Facebook"
      target="_blank"
      color="inherit"
      size="large"
    >
      <Facebook />
    </IconButton>

    <IconButton
      rel="noreferrer"
      href={SOCIALS.instagram}
      title="Instagram"
      target="_blank"
      color="inherit"
      size="large"
    >
      <Instagram />
    </IconButton>
  </>
);

export default Socials;
