import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@theme';

export default ({ element }: any) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
)