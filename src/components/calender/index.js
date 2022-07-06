import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { months } from '../../helpers/dates';
import { connect } from 'react-redux';
import CalenderDate from './calender-date';

const styleOfTheDiv = 'w-full h-40 bg-dark-blue rounded-lg cursor-pointer';
function Calender({ habitID, startDate, endDate, year, month, habitStatus }) {
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
      for (let i = 1; i <= moment().daysInMonth(); i++) {
        const isCurrDateGrThenEqStartDate = moment(startDate) <= currDate;
        const isCurrDateLsThenEqTodaysDate = currDate <= moment();
        const isCurrDateLsThenEqEndDate = endDate
          ? currDate <= moment(endDate)
          : true;
        const filteredHabits = habitStatus.filter(
          (obj) => obj.habitID === habitID
        );
        // console.log('filteredHabits', filteredHabits);
        const foundTodaysObj = filteredHabits.find(
          (obj) => obj.date === currDate.format('DD MMM YYYY')
        );
        // console.log('foundTodaysObj', foundTodaysObj);
        const data = {
          date: currDate.format('DD MMMM YYYY'),
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
        // console.log(
        //   `${moment(startDate).format('DD MMM YYYY')} <=  ${currDate.format(
        //     'DD MMM YYYY'
        //   )}`
        // );
        // console.log('isCurrDateGrThenEqStartDate', isCurrDateGrThenEqStartDate);
        // console.log(
        //   `${currDate.format('DD MMM YYYY')} <=  ${moment().format(
        //     'DD MMM YYYY'
        //   )}`
        // );
        // console.log(
        //   'isCurrDateLsThenEqTodaysDate',
        //   isCurrDateLsThenEqTodaysDate
        // );
        // console.log(
        //   `${currDate.format('DD MMM YYYY')} <=  ${moment(endDate).format(
        //     'DD MMM YYYY'
        //   )}`
        // );
        // console.log('isCurrDateLsThenEqEndDate', isCurrDateLsThenEqEndDate);
        currDate = currDate.add(1, 'd');
      }
      console.log(tempCurrentMonthArray);
      setStartDayOfWeek(intermediateStartDayOfWeek + 1);
      setCurrentMonthArray(tempCurrentMonthArray);
    }
  }, [month, year, startDate]);
  return (
    <div className="flex flex-col">
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
                />
              ))
            : null}
          {/* <div className={styleOfTheDiv}>Sun</div>
          <div className={styleOfTheDiv}>Mon</div>
          <div className={styleOfTheDiv}>Tue</div> */}
          {/* <div
            className={styleOfTheDiv + ` col-start-7 border-4 border-yellow`}
          >
            Wed
          </div>
          <div className={styleOfTheDiv + ` border-4 border-red`}>Thu</div>
          <div className={styleOfTheDiv + ` border-4 border-green-600`}>
            Fri
          </div>
          <div className={styleOfTheDiv}>Sat</div>

          <div className={styleOfTheDiv}>Sun</div>
          <div className={styleOfTheDiv}>Mon</div>
          <div className={styleOfTheDiv}>Tue</div>
          <div className={styleOfTheDiv}>Wed</div>
          <div className={styleOfTheDiv}>Thu</div>
          <div className={styleOfTheDiv}>Fri</div>
          <div className={styleOfTheDiv}>Sat</div>

          <div className={styleOfTheDiv}>Sun</div>
          <div className={styleOfTheDiv}>Mon</div>
          <div className={styleOfTheDiv}>Tue</div>
          <div className={styleOfTheDiv}>Wed</div>
          <div className={styleOfTheDiv}>Thu</div>
          <div className={styleOfTheDiv}>Fri</div>
          <div className={styleOfTheDiv}>Sat</div>

          <div className={styleOfTheDiv}>Sun</div>
          <div className={styleOfTheDiv}>Mon</div>
          <div className={styleOfTheDiv}>Tue</div>
          <div className={styleOfTheDiv}>Wed</div>
          <div className={styleOfTheDiv}>Thu</div>
          <div className={styleOfTheDiv}>Fri</div>
          <div className={styleOfTheDiv}>Sat</div>

          <div className={styleOfTheDiv}>Sun</div>
          <div className={styleOfTheDiv}>Mon</div>
          <div className={styleOfTheDiv}>Tue</div>
          <div className={styleOfTheDiv}>Wed</div>
          <div className={styleOfTheDiv}>Thu</div>
          <div className={styleOfTheDiv}>Fri</div>
          <div className={styleOfTheDiv}>Sat</div> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ habits: { habitStatus } }) => {
  return { habitStatus };
};

export default connect(mapStateToProps)(Calender);
