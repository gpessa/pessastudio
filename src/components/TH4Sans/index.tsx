import { FONTS } from '@theme';

import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import React from 'react';

export const useStyles = makeStyles(_ => ({
  root: {
    fontFamily: FONTS.SANSERIF_WEIRD,
    fontWeight: 'bold'
  }
}));

const H4Sans = ({ className, ...props }: Pick<
  TypographyProps, 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
>) => {
  const classes = useStyles()
  return <Typography className={`${className} ${classes.root}`} {...props} component="h6" variant="h6" />
}

export default H4Sans