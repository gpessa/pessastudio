import { useLingui } from "@lingui/react"
import { Button, Dialog, DialogTitle, IconButton, List, ListItem, styled, Tooltip } from "@mui/material"
import { useLocation } from "@reach/router"
import { withPrefix } from "gatsby"
import * as React from "react"
import { useState } from "react"

const DIM = 20

const LanguageIconStyled = styled("img")({
  width: 20,
})

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: "normal",
}))

const LANGUAGES = [
  {
    code: "it",
    localName: "Italiano",
    href: "https://www.pessastudio.eu/it/",
  },
  {
    code: "fr",
    localName: "Français",
    href: "https://www.pessastudio.fr/",
  },
]

const LanguageSelectorLegacy: React.FC = () => {
  const { i18n } = useLingui()
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  const handleModal = () => setShow(prevCount => !prevCount)

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
          {LANGUAGES.map(lang => (
            <ListItem key={lang.localName}>
              <ButtonStyled
                href={lang.href}
                fullWidth
                size="large"
                variant="text"
                startIcon={
                  <LanguageIconStyled width={DIM} height={DIM} src={withPrefix(`static/flags/${lang.code}.svg`)} />
                }
              >
                {lang.localName}
              </ButtonStyled>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  )
}

export default LanguageSelectorLegacy
