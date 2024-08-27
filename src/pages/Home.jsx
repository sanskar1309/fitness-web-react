import React from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import BmiCalculator from '../components/BmiCalculator';

const Home = () => {
  return (
    <Box>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          flexDirection: { xs: 'column', lg: 'row' },
          p: { xs: 2, lg: 4 }
        }}
      >
        <HeroBanner sx={{ flex: 1 }} />
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <BmiCalculator />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Home);
