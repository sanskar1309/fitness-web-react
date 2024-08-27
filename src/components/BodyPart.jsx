import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    component="button"
    alignItems="center"
    justifyContent="center"
    className={`bodyPart-card ${bodyPart === item ? 'border-red-500 bg-white border-t-4' : 'bg-white'} rounded-bl-lg w-[270px] h-[282px] cursor-pointer gap-[47px]`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" className="w-[40px] h-[40px]" />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
