import { changeLocale, injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import * as React from 'react';
import { useIntl } from "gatsby-plugin-intl"
import Flag from 'react-world-flags';

import { TSmall } from '@components';
import { Button, Dialog, List, ListItem, ListItemText, ListItemAvatar, DialogTitle, makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  button: {
    textTransform: "none"
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
            startIcon={<Flag code={locale} height={15} />}
          >
            <TSmall gutterBottom={false}>Change language</TSmall>
          </Button>

          <Dialog open={show} onClose={handleModal}>
            <DialogTitle>Choose a language</DialogTitle>
            <List>
              {languages.map((lang: string) => (
                <ListItem
                  onClick={() => {
                    changeLocale(lang)
                    handleModal()
                  }}
                  key={lang}
                >
                  <ListItemAvatar>
                    <Flag code={lang} height={15} />
                  </ListItemAvatar>
                  <ListItemText>{formatMessage({ id: `LOCALE__${lang}` })}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Dialog>
        </>
      )}
    </IntlContextConsumer>
  )
}

export default injectIntl(LanguageSelector)
