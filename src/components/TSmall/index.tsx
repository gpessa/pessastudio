import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 14,
  }
}));

const TSmall = ({ className, ...props }: Pick<
  TypographyProps, 'display' | 'align' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML' | 'children'
>) => {
  const classes = useStyles()

  return (
    <Typography
      className={`${className} ${classes.root}`} 
      component="small"
      {...props}
    />
  )
}

export default TSmall