import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = ({ size = 100 }) => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh"  // Full viewport height if needed
  >
    <InfinitySpin color="grey" width={size} height={size} />
  </Stack>
);

export default Loader;
