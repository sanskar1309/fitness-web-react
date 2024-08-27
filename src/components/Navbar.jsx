import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    style={{ marginTop: '20px' }}
    bgcolor="#FFF3F4"
    sx={{ 
      gap: { sm: '123px', xs: '40px' }, 
      mt: { sm: '32px', xs: '20px' },
      px: '20px',
    }}
  >
    <Link to="/" style={{ textDecoration: 'none' }}>
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      alignItems="flex-end"
      marginRight={'100px'}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button sx={{ fontFamily: 'Alegreya', fontSize: '24px', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>
          Home
        </Button>
      </Link>
      <Link to="/exercises" style={{ textDecoration: 'none' }}>
        <Button sx={{ fontFamily: 'Alegreya', fontSize: '24px', color: '#3A1212' }}>
          Exercises
        </Button>
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
