import { BREAKPOINT, COLORS } from '@theme';
import React from 'react'; 
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up(BREAKPOINT)]: {
      maxWidth: '100%'
    }
  },
  subHeader: {
    textTransform: 'uppercase',
    color: COLORS.GREY1,
  }
}));

export type Props = {
  text?: any
  title: string
  subtitle: string
  className?: string
}

const Title: React.FC<Props> = ({ title, subtitle, text, className  }) => {
  const classes = useStyles()
  
  return (
    <Box className = {`${className} ${classes.root}`}>
      <Typography variant="h5" className={classes.subHeader}>{subtitle}</Typography>
      <Typography variant="h3" gutterBottom={!!text} dangerouslySetInnerHTML={{ __html: title }}/>
      {text && <Typography gutterBottom component="div">{text}</Typography>}
    </Box>
  )
}

export default Title 