import React, { useEffect, useState } from 'react';
import exercise from './exercise.jpeg';
import finance from './finance.jpeg';
import health from './health.jpeg';
import home from './home.jpeg';
import meditation from './meditation.png';
import nutrition from './nutrition.jpeg';
import outdoor from './outdoor.jpeg';
import QuitBadHabit from './quit-bad-habits.jpeg';
import study from './study.jpeg';
import work from './work.jpeg';

function HabitLogo({ category }) {
  const [imagePath, setImagePath] = useState(undefined);
  useEffect(() => {
    let intermediateImagePath = '';
    switch (category) {
      case 'exercise':
        intermediateImagePath = exercise;
        break;
      case 'finance':
        intermediateImagePath = finance;
        break;
      case 'health':
        intermediateImagePath = health;
        break;
      case 'home':
        intermediateImagePath = home;
        break;
      case 'meditation':
        intermediateImagePath = meditation;
        break;
      case 'nutrition':
        intermediateImagePath = nutrition;
        break;
      case 'outdoor':
        intermediateImagePath = outdoor;
        break;
      case 'QuitBadHabit':
        intermediateImagePath = QuitBadHabit;
        break;
      case 'study':
        intermediateImagePath = study;
        break;
      case 'work':
        intermediateImagePath = work;
        break;
      default:
        intermediateImagePath = outdoor;
        break;
    }
    setImagePath(intermediateImagePath);
  }, [category]);
  return (
    <div>
      <img className="w-full h-48 rounded-t-lg" src={imagePath} />
    </div>
  );
}

export default HabitLogo;
