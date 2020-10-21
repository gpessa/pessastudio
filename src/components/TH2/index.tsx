import { Typography, TypographyProps } from '@material-ui/core';
import React from 'react';

const TH2 = (props: Pick<
  TypographyProps, 'align' | 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
>) => (
  <Typography component="h2" variant="h2" {...props}/>
)

export default TH2

