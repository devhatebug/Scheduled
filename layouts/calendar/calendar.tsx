import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import style from "./calendar.module.css";

interface CalendarProps {
  year: number;
  month: number;
}

const Calendar: React.FC<CalendarProps> = ({ year: initialYear, month: initialMonth }) => {
  const dataRank = [
    { id: 1, title: "Sun" },
    { id: 2, title: "Mon" },
    { id: 3, title: "Tue" },
    { id: 4, title: "Wed" },
    { id: 5, title: "Thu" },
    { id: 6, title: "Fri" },
    { id: 7, title: "Sat" },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date(initialYear, initialMonth, 1));
  const [displayedMonth, setDisplayedMonth] = useState(initialMonth);
  const [displayedYear, setDisplayedYear] = useState(initialYear);

  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(displayedYear, displayedMonth, 1).getDay();

  const weeks = [];
  let days = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  };

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
    if (days.length === 7) {
      weeks.push([...days]);
      days = [];
    }
  };

  if (days.length > 0) {
    weeks.push([...days]);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(displayedYear, displayedMonth - 1, 1);
    setDisplayedMonth(newDate.getMonth());
    setDisplayedYear(newDate.getFullYear());
    setSelectedDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(displayedYear, displayedMonth + 1, 1);
    setDisplayedMonth(newDate.getMonth());
    setDisplayedYear(newDate.getFullYear());
    setSelectedDate(newDate);
  };

  const currentDate = new Date();
  const [getDay, setGetDay] = useState(null);
  const [dayNow, setDayNow] = useState(currentDate.getDate());
  const handleChooseDay = (day: any) => {
      setGetDay(day);
      setDayNow(0);
  }

  return (
    <div className={clsx(style.calendar)}>
      <div className={clsx(style.changeDate)}>
        <button onClick={handlePrevMonth}>&#60;</button>
        {`Tháng ${displayedMonth + 1} năm ${displayedYear}`}
        <button onClick={handleNextMonth}>&#62;</button>
      </div>
      <table className={clsx(style.dataDate)}>
        <thead className={clsx(style.headTable)}>
          <tr>
            {dataRank.map((data, index) => (
              <th key={index}>{data.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className={clsx(style.dataTable)}>
          {weeks.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td 
                  key={index} 
                  onClick={() => handleChooseDay(day)}
                  className={clsx(dayNow === day ? style.getDay : "", getDay === day && style.getDay)}
                  id="dayData"
                >
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
