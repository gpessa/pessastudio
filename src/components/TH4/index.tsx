import { Typography, TypographyProps } from '@material-ui/core';
import React from 'react';

const TH4 = (props: Pick<
  TypographyProps, 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
>) => (
  <Typography component="h4" variant="h4" {...props}/>
)

export default TH4

