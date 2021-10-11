import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function ChannelInfoCard({ title, value }) {
  return (
    <>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {value}
      </Typography>
    </>
  );
}
