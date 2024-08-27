import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link
    to={`/exercise/${exercise.id}`}
    className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      className="w-full h-auto object-contain" 
    />
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <button className="bg-red-400 text-white px-4 py-2 text-xs rounded-full capitalize">
          {exercise.bodyPart}
        </button>
        <button className="bg-yellow-400 text-white px-4 py-2 text-xs rounded-full capitalize">
          {exercise.target}
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-900 capitalize">{exercise.name}</h3>
    </div>
  </Link>
);

export default ExerciseCard;
