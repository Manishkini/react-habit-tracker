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
      case 'Exercise':
        intermediateImagePath = exercise;
        break;
      case 'Finance':
        intermediateImagePath = finance;
        break;
      case 'Health':
        intermediateImagePath = health;
        break;
      case 'Home':
        intermediateImagePath = home;
        break;
      case 'Meditation':
        intermediateImagePath = meditation;
        break;
      case 'Nutrition':
        intermediateImagePath = nutrition;
        break;
      case 'Outdoor':
        intermediateImagePath = outdoor;
        break;
      case 'Quit Bad Habit':
        intermediateImagePath = QuitBadHabit;
        break;
      case 'Study':
        intermediateImagePath = study;
        break;
      case 'Work':
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
