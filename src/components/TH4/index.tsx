import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import { FONTS } from '@theme';
import React from 'react';

type Props = Pick<
  TypographyProps, 'className' | 'align' | 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
> & {
  sans?: boolean
}

const useStyles = makeStyles(_ => ({
  root: {
    fontFamily: ({ sans }: Props) => sans ? FONTS.SANSERIF_WEIRD : FONTS.SERIF,
  }
}))

const TH4 = ({ className, ...props }: Props) => {
  const classes = useStyles(props)

  return <Typography component="h4" variant="h4" {...props} className={`${classes.root} ${className}`} />
}

export default TH4

