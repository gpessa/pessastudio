import { Facebook, Instagram } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import React from "react"

export const SOCIALS = {
  facebook: "https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027/",
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
