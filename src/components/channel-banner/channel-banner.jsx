import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChannelBannerWrapper } from './styled';
import Title from '../dashboard/Title';

const ChannelBanner = ({ description, name, logoUrl }) => (
  <ChannelBannerWrapper>
    <Title>Channel Information</Title>
    <div style={{ display: 'flex', padding: '8px' }}>
      <div style={{ padding: '8px' }}>
        <img height="140px" src={logoUrl} alt="Channel Logo" />
      </div>
      <div style={{ padding: '8px' }}>
        <div>
          <Title variant="h3">{name}</Title>
        </div>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">Channel Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  </ChannelBannerWrapper>
);

export default ChannelBanner;
