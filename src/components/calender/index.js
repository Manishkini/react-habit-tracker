import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { months } from '../../helpers/dates';
import { connect } from 'react-redux';
import CalenderDate from './calender-date';

function Calender({
  habitID,
  startDate,
  endDate,
  year,
  month,
  habitStatus,
  dispatch,
}) {
  const [startDayOfWeek, setStartDayOfWeek] = useState(0);
  const [currentMonthArray, setCurrentMonthArray] = useState([]);
  useEffect(() => {}, [startDate, endDate]);

  useEffect(() => {
    if (month && year && startDate) {
      const intermediateStartDayOfWeek = moment(
        `1-${months[month]}-${year}`
      ).weekday();

      let currDate = moment(`1-${months[month]}-${year}`);
      const tempCurrentMonthArray = [];
      for (
        let i = 1;
        i <= moment(`1-${months[month]}-${year}`).daysInMonth();
        i++
      ) {
        const isCurrDateGrThenEqStartDate = moment(startDate) <= currDate;
        const isCurrDateLsThenEqTodaysDate = currDate <= moment();
        const isCurrDateLsThenEqEndDate = endDate
          ? currDate <= moment(endDate)
          : true;

        let filteredHabits = [];
        let foundTodaysObj = {};
        if (habitStatus && habitStatus.length) {
          filteredHabits = habitStatus.filter((obj) => obj.habitID === habitID);
          foundTodaysObj = filteredHabits.find(
            (obj) => obj.date === currDate.format('DD MMM YYYY')
          );
        }
        const data = {
          date: currDate.format('DD MMM YYYY'),
          status:
            isCurrDateGrThenEqStartDate &&
            isCurrDateLsThenEqTodaysDate &&
            isCurrDateLsThenEqEndDate
              ? foundTodaysObj && foundTodaysObj.status
                ? foundTodaysObj.status
                : 'pending'
              : null,
        };
        tempCurrentMonthArray.push(data);
        currDate = currDate.add(1, 'd');
      }
      setStartDayOfWeek(intermediateStartDayOfWeek + 1);
      setCurrentMonthArray(tempCurrentMonthArray);
    }
  }, [month, year, startDate, endDate, habitStatus]);
  return (
    <div className="flex flex-col w-3/5 mx-auto">
      <div className="h-1/6">
        <div className="grid grid-cols-7 text-green-900 justify-items-center gap-4 px-4 py-1">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
      </div>
      <div className="h-5/6">
        <div className="grid grid-cols-7 justify-items-center gap-4 px-4 py-1">
          {currentMonthArray &&
          currentMonthArray.length &&
          startDayOfWeek &&
          habitID
            ? currentMonthArray.map((obj, index) => (
                <CalenderDate
                  key={index}
                  habitID={habitID}
                  startDayOfWeek={index === 0 ? startDayOfWeek : null}
                  dateObj={obj}
                  dispatch={dispatch}
                  id={`${obj.date.split(' ')[1]}-${index + 1}`}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ habits: { habitStatus } }) => {
  return { habitStatus };
};

export default connect(mapStateToProps)(Calender);
