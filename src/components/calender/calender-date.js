import React from 'react';

const className = 'w-full h-40 bg-dark-blue rounded-lg cursor-pointer';
function CalenderDate({ dateObj, startDayOfWeek, habitID }) {
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
      <div className="flex flex-col">
        <span>{dateObj.status}</span>
        <span>{dateObj.date}</span>
      </div>
    </div>
  );
}

export default CalenderDate;
