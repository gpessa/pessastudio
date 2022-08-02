import Facebook  from "@mui/icons-material/Facebook";
import Instagram  from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material"
import React from "react"

export const SOCIALS = {
  facebook_1: "https://www.facebook.com/PessastudioHorseTecnology",
  facebook: "https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027",
  youtube: "https://www.youtube.com/channel/UC_eIQlt5-iLt2KEVTK5DOPg",
  instagram: "https://www.instagram.com/pessastudiohorsetecnology/",
}

const Socials = () => (
  <>
    <IconButton
      edge="start"
      rel="noreferrer"
      href={SOCIALS.facebook}
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
)

export default Socials
