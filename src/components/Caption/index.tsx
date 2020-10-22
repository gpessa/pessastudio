import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import { COLORS, FONTS } from '@theme';
import React from 'react';

type Props = Pick<
  TypographyProps, 'className' | 'align' | 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
  > & {
  component?: string
  sans?: boolean
}

const useStyles = makeStyles(_ => ({
  root: {
    fontSize: 14,
    fontWeight: 500,
    color: COLORS.GREY1,
    textTransform: 'uppercase',
    fontFamily: FONTS.SANSERIF,
  }
}))

const Caption = ({ className, ...props }: Props) => {
  const classes = useStyles()

  return <Typography {...props} className={`${classes.root} ${className}`} />
}

export default Caption

