import Facebook from "@mui/icons-material/Facebook"
import Instagram from "@mui/icons-material/Instagram"
import { IconButton } from "@mui/material"
import { SOCIALS } from "utils/constants"

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
