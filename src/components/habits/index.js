import React from 'react';
import { Link } from 'react-router-dom';
import HabitLogo from './habit-logo';
import { MdDateRange } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';

function Habit({
  habit: { id, name, category, endDate, isEndDate, startDate },
}) {
  return (
    <div className="flex flex-col cursor-pointer">
      <Link to={`/habits/detail/${id}`}>
        <HabitLogo category={category} />
        <div className="flex flex-col h-auto bg-dark-blue rounded-b-lg px-5 py-3 gap-2">
          <strong className="text-2xl text-green-900">{name}</strong>
          <div className="flex flex-row items-center justify-start gap-2">
            <MdDateRange />
            <span className="text-sm">
              {/* 12 July 2022 - 14 July 2022 */}
              {`${isEndDate ? `${startDate} - ${endDate}` : `${startDate}`}`}
            </span>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <BiCategoryAlt />
            <span className="text-sm">{category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Habit;
