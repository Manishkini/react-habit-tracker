import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { addHabit } from '../../redux/reducers/habits';
import { useNavigate } from 'react-router-dom';

function CreateHabit({ habits, dispatch }) {
  const navigate = useNavigate();

  const [habitName, setHabitName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState(undefined);
  const [isEndDate, setIsEndDate] = useState(false);

  const handleClick = () => {
    const data = {
      id: habits.length,
      name: habitName,
      category,
      startDate: moment(startDate).format('DD MMM YYYY'),
      isEndDate,
      endDate: endDate ? moment(endDate).format('DD MMM YYYY') : null,
    };
    dispatch(addHabit(data));
    navigate('/habits');
  };

  const handleBack = () => {
    navigate('/habits');
  };

  return (
    <div className="w-full h-screen">
      <div className="w-2/4 mx-auto">
        <div className="w-full text-center p-5">
          <span className="font-jack text-7xl">{`( Create Habit )`}</span>
        </div>
        <div className="flex flex-col gap-4 pt-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="habit-name">Habit Name</label>
            <input
              className="rounded-lg"
              id="habit-name"
              type="text"
              placeholder='it can be "Gym"'
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="habit-category">Habit Category</label>
            <select
              id="habit-category"
              className="text-black rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected disabled>
                Please habit select category
              </option>
              <option value="Outdoor">Outdoor</option>
              <option value="Exercise">Exercise</option>
              <option value="Finance">Finance</option>
              <option value="Health">Health</option>
              <option value="Home">Home</option>
              <option value="Meditation">Meditation</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Quit Bad Habit">Quit Bad Habit</option>
              <option value="Study">Study</option>
              <option value="Work">Work</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="start-date">Start Date</label>
            <input
              className="rounded-lg"
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row gap-6">
            <label htmlFor="habit-name">does habit has end date?</label>
            <div className="flex flex-row gap-1">
              <button
                className={`w-auto px-3 py-1 ${
                  isEndDate ? `bg-dark-blue` : `bg-darkest-blue`
                } hover:bg-dark-blue rounded-lg`}
                onClick={() => setIsEndDate(true)}
              >
                Yes
              </button>
              <button
                className={`w-auto px-3 py-1 ${
                  isEndDate ? `bg-darkest-blue` : `bg-dark-blue`
                } hover:bg-dark-blue rounded-lg`}
                onClick={() => {
                  setIsEndDate(false);
                  setEndDate('');
                }}
              >
                No
              </button>
            </div>
          </div>
          {isEndDate ? (
            <div className="flex flex-col gap-2">
              <label htmlFor="end-date">End Date</label>
              <input
                className="rounded-lg"
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          ) : null}
          <div className="flex flex-row justify-center gap-4">
            <button
              className="w-auto px-5 py-3 bg-darkest-blue hover:bg-dark-blue rounded-lg text-xl"
              onClick={handleClick}
            >
              Submit
            </button>
            <button
              className="w-auto px-5 py-3 bg-darkest-blue hover:bg-dark-blue rounded-lg text-xl"
              onClick={handleBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ habits: { habits } }) => {
  return { habits };
};

export default connect(mapStateToProps)(CreateHabit);
