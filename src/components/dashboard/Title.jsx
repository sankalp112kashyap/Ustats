import * as React from 'react';
import Typography from '@mui/material/Typography';

function Title({ children, component = 'h2', variant = 'h6', color = 'primary' }) {
  return (
    <Typography component={component} variant={variant} color={color} gutterBottom>
      {children}
    </Typography>
  );
}

export default Title;
