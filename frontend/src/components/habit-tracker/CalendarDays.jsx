/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa";

function CalendarDays({ day, completedHabits, changeCurrentDay }) {
    let firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1); // frist day of month will have Date format of { year:<year> month: <month> date: 1 }
    let weekdayOfFirstDay = firstDayOfMonth.getDay(); //Get what day of the week the 1st of the current month is on
    let currentDays = []; 

    // Adjust the starting date of calendar grid, ensuring it starts on a Monday
    if (weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6); //If the first day of month is a Sunday, set firstDayOfMonth/calendar starting point to previous Monday
    } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - weekdayOfFirstDay + 1); //Move date
    } 


    for (let i = 0; i < 42; i++) {
        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === day.getMonth()),
            date: new Date(firstDayOfMonth),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: firstDayOfMonth.toDateString() === day.toDateString(),
            year: firstDayOfMonth.getFullYear()
        };

        currentDays.push(calendarDay);
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    };

    const currentDay = new Date().toISOString().split('T')[0];
    const habitsForDay = completedHabits ? completedHabits[currentDay] || []: [];

    return (
        <div className='table-content'>
            {currentDays.map((day, index) => {
                return (
                    <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                        onClick={() => changeCurrentDay(day)} key={index}>
                        <p>{day.number}</p>
                        <div className='habit-icons'>
                            {habitsForDay.map((colour, index) => (
                                <FaCircle key={index} style={{ color: colour }} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CalendarDays;