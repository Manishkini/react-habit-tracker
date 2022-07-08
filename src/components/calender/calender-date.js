import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { ImMinus, ImCheckmark, ImCross } from 'react-icons/im';
import { addHabitStatus } from '../../redux/reducers/habits';

const className = 'w-full h-20 bg-dark-blue rounded-lg ';
const classNamePendingStatus =
  'text-2xl p-1 bg-black text-yellow rounded-full opacity-25 hover:opacity-100 cursor-pointer';
const classNameDoneStatus =
  'text-2xl p-1 bg-black text-green-600 rounded-full opacity-25 hover:opacity-100 cursor-pointer';
const classNameNotDoneStatus =
  'text-2xl p-1 bg-black text-red rounded-full opacity-25 hover:opacity-100 cursor-pointer';
function CalenderDate({ dateObj, startDayOfWeek, habitID, dispatch, id }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleStatusChange = (status) => {
    dispatch(
      addHabitStatus({
        id,
        habitID,
        date: dateObj.date,
        status,
      })
    );
    setIsEdit(false);
  };
  return (
    <div
      className={className}
      style={{
        gridColumnStart: startDayOfWeek ? startDayOfWeek : null,
        border: dateObj.status
          ? `4px solid ${
              dateObj.status === 'pending'
                ? '#ca8a04'
                : dateObj.status === 'done'
                ? '#16a34a'
                : '#dc2626'
            }`
          : null,
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-row h-3/5 justify-between">
          <span className="text-2xl pt-1 pl-1">
            {dateObj.date.split(' ')[0]}
          </span>
          {dateObj.status ? (
            <div onClick={() => setIsEdit(!isEdit)}>
              <BiEdit className="text-2xl p-1 bg-black text-white rounded-full mt-2 mr-2 opacity-25 hover:opacity-50 cursor-pointer" />
            </div>
          ) : null}
        </div>
        <div className="h-2/5">
          {isEdit && dateObj.status ? (
            dateObj.status === 'pending' ? (
              <div className="flex flex-row justify-evenly">
                <ImCheckmark
                  className={classNameDoneStatus}
                  onClick={() => handleStatusChange('done')}
                />
                <ImCross
                  className={classNameNotDoneStatus}
                  onClick={() => handleStatusChange('notDone')}
                />
              </div>
            ) : dateObj.status === 'done' ? (
              <div className="flex flex-row justify-evenly">
                <ImMinus
                  className={classNamePendingStatus}
                  onClick={() => handleStatusChange('pending')}
                />
                <ImCross
                  className={classNameNotDoneStatus}
                  onClick={() => handleStatusChange('notDone')}
                />
              </div>
            ) : (
              <div className="flex flex-row justify-evenly">
                <ImMinus
                  className={classNamePendingStatus}
                  onClick={() => handleStatusChange('pending')}
                />
                <ImCheckmark
                  className={classNameDoneStatus}
                  onClick={() => handleStatusChange('done')}
                />
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CalenderDate;
