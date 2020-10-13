import { Typography, TypographyProps } from '@material-ui/core';
import React from 'react';

const TH1 = (props: Pick<
  TypographyProps, 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
>) => (
  <Typography component="h1" variant="h1" {...props}/>
)

export default TH1

