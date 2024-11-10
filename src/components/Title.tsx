import { Typography, Divider, Box } from '@mui/material';
import React from 'react';

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <Box mb={4} width="100%" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 'bold',
        }}
      >
        {text}
      </Typography>
      <Box width={{ xs: '100%', md: '30%' }} mx={{ xs: 'center', md: 'right' }}>
        <Divider sx={{ borderWidth: 2, color: "GrayText" }} />
      </Box>

    </Box>
  );
}
