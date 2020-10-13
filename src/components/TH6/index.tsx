import { Typography, TypographyProps } from '@material-ui/core';
import React from 'react';

const TH6 = (props: Pick<
  TypographyProps, 'children' | 'className' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'variant' | 'dangerouslySetInnerHTML'
>) => (
  <Typography component="h6" variant="h6" {...props}/>
)

export default TH6

