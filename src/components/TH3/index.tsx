import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import { FONTS } from '@theme';
import React from 'react';

type Props = Pick<
  TypographyProps, 'align' | 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
  > & {
  sans: boolean
}

const useStyles = makeStyles(_ => ({
  root: {
    fontFamily: ({ sans }: Props) => sans ? FONTS.SANSERIF_WEIRD : FONTS.SERIF,
    fontWeight: ({ sans }: Props) => sans ? 600 : 'inherit'
  }
}))

const TH3 = (props: Props) => {
  const classes = useStyles(props)

  return <Typography component="h3" variant="h3" {...props} className={classes.root}/>
}

export default TH3

