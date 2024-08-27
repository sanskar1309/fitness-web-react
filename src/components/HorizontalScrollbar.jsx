import React from 'react';
import { Box, IconButton } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <IconButton
        onClick={() => scroll('left')}
        sx={{
          position: 'absolute',
          left: 0,
          zIndex: 2,
          backgroundColor: '#FFF',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '24px', height: '24px' }} />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'scroll',
          scrollBehavior: 'smooth',
          width: '100%',
          padding: '10px 0',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            sx={{ minWidth: '200px', mx: '10px', flexShrink: 0 }}
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={() => scroll('right')}
        sx={{
          position: 'absolute',
          right: 0,
          zIndex: 2,
          backgroundColor: '#FFF',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <img src={RightArrowIcon} alt="right-arrow" style={{ width: '24px', height: '24px' }} />
      </IconButton>
    </Box>
  );
};

export default HorizontalScrollbar;
