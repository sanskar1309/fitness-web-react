import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{
      position: 'relative',
      width: '50%',
      height: { lg: '700px', xs: '300px' },
      textAlign: 'left',
    }}
  >
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '10px',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '70%',
        left: '10%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        color: '#fff',
      }}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="23px"
        mt="30px"
        color="#000"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
      color="#000"
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack mt="45px">
        <Button
          href="/exercises"
          variant="contained"
          color="error"
          sx={{
            fontSize: '18px',
            textTransform: 'none',
            borderRadius: '4px',
          }}
        >
          Explore Exercises
        </Button>
      </Stack>
    </Box>
  </Box>
);

export default HeroBanner;
