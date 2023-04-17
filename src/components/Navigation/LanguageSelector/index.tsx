import { useLingui } from "@lingui/react"
import {
  Avatar,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  styled,
  Tooltip,
} from "@mui/material"
import { useLocation } from "@reach/router"
import { withPrefix } from "gatsby"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import * as React from "react"
import { useState } from "react"

const DIM = 30

const LanguageIconStyled = styled("img")({
  width: 20,
})

const LanguageSelector: React.FC = () => {
  const { config } = useLocalization()
  const { i18n } = useLingui()
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  const handleModal = () => setShow(prevCount => !prevCount)

  const to = pathname.replace(`/${i18n.locale}`, "") // remove the current language

  return (
    <>
      <Tooltip title="Change language">
        <IconButton onClick={handleModal}>
          <LanguageIconStyled
            width={DIM}
            height={DIM}
            alt={i18n.locale}
            src={withPrefix(`static/flags/${i18n.locale}.svg`)}
          />
        </IconButton>
      </Tooltip>

      <Dialog open={show} onClose={handleModal}>
        <DialogTitle>Choose a language</DialogTitle>
        <List disablePadding>
          {config.map(lang => (
            <ListItem disableGutters>
              <ListItemButton component={LocalizedLink} to={to} language={lang.code}>
                <ListItemAvatar>
                  <Avatar src={withPrefix(`static/flags/${lang.code}.svg`)} sx={{ width: DIM, height: DIM }} />
                </ListItemAvatar>
                <ListItemText primary={lang.localName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  )
}

export default LanguageSelector
