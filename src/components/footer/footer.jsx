import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography color="#999999" variant="body2">
      Copyright © 2021 SEO Horizon. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#313131',
      }}
    >
      <Container maxWidth="sm">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
              }}
            >
              <img height="40px" src="/facebook.png" alt="" />
              <Typography style={{ padding: '16px' }} color="#999999" variant="h5">
                Facebook
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img height="36px" src="/twitter.png" alt="" />
              <Typography style={{ padding: '16px' }} color="#999999" variant="h5">
                Twitter
              </Typography>
            </div>
          </div>
          <hr style={{ minWidth: '100%', border: 'none', height: '1px' }} color="#4a4a4a"></hr>
          <br />

          <img maxWidth="241px" src="/logo-white.png" alt="" />
          <br />
          <Copyright />
        </div>
      </Container>
    </Box>
  );
}
