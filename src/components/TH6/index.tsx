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
    fontWeight: ({ sans }: Props) => sans ? 600 : 'inherit'
  }
}))

const TH3 = ({ className, ...props }: Props) => {
  const classes = useStyles(props)

  return <Typography component="h6" variant="h6" {...props} className={`${classes.root} ${className}`} />
}

export default TH3

