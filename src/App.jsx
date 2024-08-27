import React from 'react';
import { BmiProvider } from './context/BmiContext';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExercisePage from './pages/ExercisePage'; // Import ExercisePage
import ExerciseDetail from './pages/ExerciseDetail';

const App = () => (
  <BmiProvider>
    <Box width="100%" sx={{ width: { xl: '1488px' } }} m="auto" className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<ExercisePage />} /> {/* Add this route */}
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="*" element={<div className="text-center text-red-500">Page Not Found</div>} />
      </Routes>
      <Footer />
    </Box>
  </BmiProvider>
);

export default React.memo(App);
