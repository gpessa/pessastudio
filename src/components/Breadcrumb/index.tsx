import { Breadcrumbs, Link, Container, makeStyles, Typography } from '@material-ui/core';
import { Link as LinkGatsby, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { COLORS } from '@theme';
import { useTree } from '@hooks';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    backgroundColor: COLORS.WARM1,
    color: COLORS.GREY2,
  },
  link: {
    fontWeight: 'unset'
  },
  icon: {
    marginBottom: -5
  }
}))

const Breadcrumb: React.FC = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()
  const { fragments } = useTree()

  return fragments.length > 1 ? (
    <div className={classes.root}>
      <Breadcrumbs separator="›" gutterBottom={false} component={props => <Container {...props} component="nav"/>}>
        {fragments.map(({ id, url }, index) => {
          const label = formatMessage({ id: `NAVIGATION__${id}` })

          switch (index) {
            case 0:
              return (
                <Link className={classes.link} to={url} key={id} component={LinkGatsby}>
                  <HomeIcon className={classes.icon}/>
                </Link>
              )
            
            case (fragments.length - 1):
              return (
                <Typography gutterBottom={false} key={id} className={classes.link}>
                  {label}
                </Typography>
              )
          
            default:
              return (
                <Link className={classes.link} to={url} key={id} component={LinkGatsby}>
                  {label}
                </Link>
              )
          }
        })}
      </Breadcrumbs>
    </div>
  ) : null
}

export default Breadcrumb
