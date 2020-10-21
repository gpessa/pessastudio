import { Breadcrumbs, ButtonBase, Container, makeStyles } from '@material-ui/core';
import { Link, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { injectTree } from '../../hoc';
import { COLORS } from '@theme';
import { UrlFragment } from 'src/hoc/injectTree';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    backgroundColor: COLORS.WARM1,
    color: COLORS.GREY2
  }
}))

const Breadcrumb: React.FC<{ fragments: UrlFragment[] }> = ({ fragments }) => {
  const { formatMessage } = useIntl()
  const classes = useStyles()
  
  return fragments.length > 1 && (
    <div className={classes.root}>
      <Breadcrumbs separator="›" component={Container}>
        {fragments.map(({ id, url }, index) => (
          <ButtonBase component={Link} to={url} color="inherit" key={id}>
            {index === 0 && <HomeIcon/>}
            {index !== 0 && <span>{formatMessage({ id: `NAVIGATION__${id}` })}</span>}
          </ButtonBase>
        ))}
      </Breadcrumbs>
    </div>
  ) 
}

export default injectTree(Breadcrumb)
