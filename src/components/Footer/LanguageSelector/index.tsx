import { changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl';
import * as React from 'react';
import { useIntl } from "gatsby-plugin-intl"

import { TSmall } from '@components';
import { Button, Dialog, List, ListItem, ListItemText, ListItemAvatar, DialogTitle, makeStyles, SvgIcon } from '@material-ui/core';
import { useState } from 'react';

// https://www.flaticon.com/packs/countrys-flags

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: "none"
  },
  icon: {
    width: 20,
    marginRight: theme.spacing(1)
  },
  text: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const LanguageSelector: React.FC = () => {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const { locale, formatMessage } = useIntl()

  const handleModal = () => {
    setShow(prevCount => !prevCount)
  }

  return (
    <IntlContextConsumer>
      {({ languages }) => (
        <>
          <Button 
            size="small" 
            color="inherit"
            variant="text"
            onClick={handleModal} 
            className={classes.button}
            startIcon={<img className={classes.icon} alt={locale} src={require(`@images/flags/${locale}.svg`)} />}
          >
            <TSmall gutterBottom={false}>Change language</TSmall>
          </Button>

          <Dialog open={show} onClose={handleModal}>
            <DialogTitle>Choose a language</DialogTitle>
            <List>
              {languages.map((lang: string) => (
                <ListItem
                  button
                  onClick={() => {
                    changeLocale(lang)
                    handleModal()
                  }}
                  key={lang}
                >
                  <ListItemText disableTypography className={classes.text}>
                    <img className={classes.icon} alt={lang} src={require(`@images/flags/${lang}.svg`)} />
                    {formatMessage({ id: `LOCALE__${lang}` })}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Dialog>
        </>
      )}
    </IntlContextConsumer>
  )
}

export default LanguageSelector
