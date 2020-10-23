import { BREAKPOINT } from '@theme';
import React from 'react'; 
import { Box, makeStyles, Typography } from '@material-ui/core';
import Caption from "../Caption"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up(BREAKPOINT)]: {
      maxWidth: '100%'
    }
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
      {subtitle && <Caption>{subtitle}</Caption>}
      <Typography variant="h3" dangerouslySetInnerHTML={{ __html: title }}/>
      {text && <>{text}</>}
    </Box>
  )
}

export default Title 