import React from 'react';
import { connect } from 'react-redux';
import { VscAdd } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import Habit from '../../components/habits';

function Habits({ habits }) {
  const navigate = useNavigate();
  // console.log('habits', habits);
  return (
    <>
      <div className="w-full min-h-screen h-full mb-10">
        <div className="w-3/4 mx-auto h-full">
          {habits && habits.length ? (
            <div className="grid grid-cols-3 gap-4 pt-10">
              {habits.map((habit, index) => (
                <Habit key={index} habit={habit} />
              ))}
            </div>
          ) : (
            <span className="text-center">Please add a habit</span>
          )}
        </div>
      </div>
      <div className="relative">
        <div className="fixed right-[5%] bottom-16">
          <button
            className="text-3xl p-4 rounded-full bg-blue shadow-lg hover:scale-110"
            onClick={() => navigate('/habits/create')}
          >
            <VscAdd />
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ habits: { habits } }) => {
  return {
    habits,
  };
};
export default connect(mapStateToProps)(Habits);
