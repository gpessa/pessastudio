import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import { FONTS } from '@theme';
import React from 'react';

type Props = Pick<
  TypographyProps, 'className' | 'align' | 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
> & {
  sans?: boolean
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const useStyles = makeStyles(_ => ({
  root: {
    fontFamily: ({ sans }: Props) => sans ? FONTS.SANSERIF_WEIRD : FONTS.SERIF,
  }
}))

const TH = ({ variant, className, sans, ...props }: Props) => {
  const classes = useStyles({ sans, variant })

  return <Typography 
    variant={variant} 
    component={variant} 
    className={`${classes.root} ${className}`}
    {...props} 
  />
}

export default TH

