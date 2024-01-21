"use client"
import React from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import style from "./calendar.module.css";

export default function Calendar () {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const getDaysInMonth = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  };
  return (
    <div>
      <div>
        <button onClick={prevMonth}>&#60;</button>
        <span> {format(currentMonth, 'MMMM yyyy')} </span>
        <button onClick={nextMonth}>&#62;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {getDaysInMonth().map((day: any) => (
            <tr key={day}>
              {eachDayOfInterval({ start: day, end: day }).map((date) => (
                <td key={date} className={isToday(date) ? 'today' : ''}>
                  {format(date, 'd')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

