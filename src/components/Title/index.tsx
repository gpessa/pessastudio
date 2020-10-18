import { BREAKPOINT, COLORS, FONTS } from '@theme';
import React from 'react'; 
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up(BREAKPOINT)]: {
      maxWidth: '100%'
    }
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
    color: COLORS.GREY1,
    textTransform: 'uppercase',
    fontFamily: FONTS.SANSERIF,
  }
}));

export type Props = {
  text?: any
  title: string
  subtitle?: string
  className?: string
}

const Title: React.FC<Props> = ({ title, subtitle, text, className  }) => {
  const classes = useStyles()
  
  return (
    <Box className = {`${className} ${classes.root}`}>
      {subtitle && <Typography className={classes.subtitle}>{subtitle}</Typography>}
      <Typography variant="h3" dangerouslySetInnerHTML={{ __html: title }}/>
      {text && <div>{text}</div>}
    </Box>
  )
}

export default Title 