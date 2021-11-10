import { SOCIALS } from "@constants"
import React from "react"
import { Facebook, Instagram } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const Socials = () => (
  <>
    <IconButton
      edge="start"
      rel="noreferrer"
      href={SOCIALS.facebook.url}
      title={SOCIALS.facebook.name}
      target="_blank"
      color="inherit"
      size="large"
    >
      <Facebook />
    </IconButton>

    <IconButton
      rel="noreferrer"
      href={SOCIALS.instagram.url}
      title={SOCIALS.instagram.name}
      target="_blank"
      color="inherit"
      size="large"
    >
      <Instagram />
    </IconButton>
  </>
)

export default Socials
