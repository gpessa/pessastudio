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

const TH5 = ({ className, ...props }: Props) => {
  const classes = useStyles(props)

  return <Typography component="h5" variant="h5" {...props} className={`${classes.root} ${className}`} />
}

export default TH5

