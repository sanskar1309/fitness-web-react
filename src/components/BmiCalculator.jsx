import React, { useContext, useState } from 'react';
import { BmiContext } from '../context/BmiContext';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';

const BmiCalculator = () => {
  const { bmi, setBmi } = useContext(BmiContext);
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('m');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('male');
  const [exerciseLevel, setExerciseLevel] = useState(1.2); // Default to sedentary

  const convertHeightToMeters = (height, unit) => {
    switch (unit) {
      case 'cm':
        return height / 100;
      case 'ft':
        return height * 0.3048;
      case 'm':
      default:
        return height;
    }
  };

  const convertWeightToKg = (weight, unit) => {
    switch (unit) {
      case 'lbs':
        return weight * 0.453592;
      case 'kg':
      default:
        return weight;
    }
  };

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = convertHeightToMeters(height, heightUnit);
      const weightInKg = convertWeightToKg(weight, weightUnit);
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  const calculateCalories = () => {
    if (weight && height && age) {
      const heightInMeters = convertHeightToMeters(height, heightUnit);
      const weightInKg = convertWeightToKg(weight, weightUnit);
      let bmr;

      if (sex === 'male') {
        bmr = 88.362 + (13.397 * weightInKg) + (4.799 * heightInMeters * 100) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInMeters * 100) - (4.330 * age);
      }

      const maintenanceCalories = bmr * exerciseLevel;

      return {
        maintenance: maintenanceCalories.toFixed(0),
        weightLoss: (maintenanceCalories - 500).toFixed(0),
        weightGain: (maintenanceCalories + 500).toFixed(0),
      };
    }
    return null;
  };

  const getBmiStatus = () => {
    if (bmi < 18.5) {
      return { status: 'Underweight', color: 'blue', message: "You're underweight. Try to include more nutritious food in your diet." };
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return { status: 'Normal weight', color: 'green', message: "Perfect! You are fit, just maintain it." };
    } else if (bmi >= 25 && bmi < 29.9) {
      return { status: 'Overweight', color: 'orange', message: "You're overweight. Focus on a balanced diet and regular exercise." };
    } else if (bmi >= 30) {
      return { status: 'Obesity', color: 'red', message: "You are in the obese range. It's important to consult a healthcare provider for advice." };
    }
    return { status: '', color: '', message: '' };
  };

  const bmiStatus = getBmiStatus();
  const calorieResults = calculateCalories();

  return (
    <Box>
      <Typography variant="h4" mb={2}>BMI & Calorie Calculator</Typography>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <TextField
          label="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          sx={{ mr: 2 }}
        />
        <TextField
          select
          value={weightUnit}
          onChange={(e) => setWeightUnit(e.target.value)}
        >
          <MenuItem value="kg">kg</MenuItem>
          <MenuItem value="lbs">lbs</MenuItem>
        </TextField>
      </Box>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <TextField
          label="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
          sx={{ mr: 2 }}
        />
        <TextField
          select
          value={heightUnit}
          onChange={(e) => setHeightUnit(e.target.value)}
        >
          <MenuItem value="m">m</MenuItem>
          <MenuItem value="cm">cm</MenuItem>
          <MenuItem value="ft">ft</MenuItem>
        </TextField>
      </Box>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          sx={{ mr: 2 }}
        />
        <TextField
          select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
      </Box>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <TextField
          select
          label="Exercise Level"
          value={exerciseLevel}
          onChange={(e) => setExerciseLevel(e.target.value)}
        >
          <MenuItem value={1.2}>Sedentary</MenuItem>
          <MenuItem value={1.375}>Lightly active</MenuItem>
          <MenuItem value={1.55}>Moderately active</MenuItem>
          <MenuItem value={1.725}>Very active</MenuItem>
          <MenuItem value={1.9}>Super active</MenuItem>
        </TextField>
      </Box>
      <Button variant="contained" onClick={calculateBmi}>Calculate BMI</Button>
      {bmi && (
        <Box mt={2}>
          <Typography variant="h6">Your BMI: {bmi}</Typography>
          <Typography 
            variant="h6" 
            mt={1} 
            sx={{ color: bmiStatus.color }}
          >
            {bmiStatus.status}
          </Typography>
          <Typography 
            variant="body1" 
            mt={1} 
            sx={{ color: bmiStatus.color }}
          >
            {bmiStatus.message}
          </Typography>
        </Box>
      )}
      {calorieResults && (
        <Box mt={2}>
          <Typography variant="h6">Calorie Requirements:</Typography>
          <Typography variant="body1" mt={1}>Maintenance: {calorieResults.maintenance} kcal/day</Typography>
          <Typography variant="body1" mt={1}>Weight Loss: {calorieResults.weightLoss} kcal/day</Typography>
          <Typography variant="body1" mt={1}>Weight Gain: {calorieResults.weightGain} kcal/day</Typography>
        </Box>
      )}
    </Box>
  );
};

export default BmiCalculator;
