import { useLingui } from "@lingui/react"
import { Button, Dialog, DialogTitle, IconButton, List, ListItem, Tooltip } from "@mui/material"
import { styled } from "@mui/material"
import { withPrefix } from "gatsby"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import * as React from "react"
import { useState } from "react"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"

const DIM = 20

const LanguageIconStyled = styled("img")({
  width: 20,
})

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: "normal",
}))

const LanguageSelector: React.FC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          pathPrefix
        }
      }
    `
  )

  const { config } = useLocalization()
  const { i18n } = useLingui()
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  const handleModal = () => setShow(prevCount => !prevCount)

  const to = pathname
    .replace(site.pathPrefix, ``) // remove the prefix
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
          {config.map(lang => (
            <ListItem key={lang}>
              <ButtonStyled
                to={to}
                fullWidth
                size="large"
                variant="text"
                language={lang.code}
                startIcon={<LanguageIconStyled width={DIM} height={DIM} src={withPrefix(`/flags/${lang.code}.svg`)} />}
                component={LocalizedLink}
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

export default LanguageSelector
