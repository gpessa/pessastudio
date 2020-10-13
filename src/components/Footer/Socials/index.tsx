import { SOCIALS } from "@constants"
import React from "react"
import { Facebook, Instagram } from '@material-ui/icons';
import { IconButton } from "@material-ui/core"

const Socials = () => {
  return (
    <>
    
      <IconButton 
        edge="start"
        href={SOCIALS.facebook.href}
        target="_blank"
        color="inherit"
      >
        <Facebook />
      </IconButton>
      

      <IconButton 
        href={SOCIALS.instagram.href}
        target="_blank"
        color="inherit"
      >
        <Instagram />
      </IconButton>
      
    </>
  )
}

export default Socials