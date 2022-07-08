import React, { useEffect, useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import Calender from '../../components/calender';
import { months, years } from '../../helpers/dates';

function DetailHabit({ habits, habitStatus }) {
  const { id } = useParams();

  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month());

  const [{ name, startDate, endDate, category, isEndDate }, setHabit] =
    useState({});

  useEffect(() => {
    if (id && habits && habits.length) {
      setHabit(habits[id]);
    }
  }, [id, habits]);
  return (
    <div className="w-full h-full min-h-screen">
      <div className="flex flex-col">
        <div className="w-full h-1/5 p-2 bg-blue">
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-row w-1/4 justify-around">
              <select
                className="w-1/3 bg-darkest-blue text-green-900"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
              <select
                className="w-1/3 bg-darkest-blue text-green-900"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-2/4 text-center">
              <span className="font-jack text-4xl tracking-wider">{`( ${name} )`}</span>
            </div>
            <div className="w-1/4 flex flex-col items-center">
              <div className="flex flex-row items-center gap-3">
                <MdDateRange />
                <span>
                  {`${
                    isEndDate ? `${startDate} - ${endDate}` : `${startDate}`
                  }`}
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <BiCategoryAlt />
                <span>{category}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full grow mb-5">
          <Calender
            habitID={id}
            startDate={startDate}
            endDate={isEndDate ? endDate : null}
            year={year}
            month={month}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ habits: { habits, habitStatus } }) => {
  return { habits, habitStatus };
};

export default connect(mapStateToProps)(DetailHabit);
