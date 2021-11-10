import { useLingui } from "@lingui/react"
import { Button, Dialog, DialogTitle, IconButton, List, ListItem, Tooltip } from "@mui/material"
import { styled } from "@mui/system"
import { useLocation } from "@reach/router"
import { withPrefix } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import * as React from "react"
import { useState } from "react"
import gatsbyConfig from "../../../../gatsby-config.js"

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
  const { config } = useLocalization()
  const { i18n } = useLingui()
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  const handleModal = () => setShow(prevCount => !prevCount)

  const to = pathname
    .replace(gatsbyConfig.pathPrefix, ``) // remove the prefix
    .replace(`/${i18n._locale}`, "") // remove the current language

  return (
    <>
      <Tooltip title="Change language">
        <IconButton onClick={handleModal}>
          <LanguageIconStyled
            width={DIM}
            height={DIM}
            alt={i18n.locale}
            src={withPrefix(`/flags/${i18n.locale}.svg`)}
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
                startIcon={<LanguageIconStyled width={DIM} height={DIM} src={withPrefix(`/flags/${lang.code}.svg`)} />}
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
