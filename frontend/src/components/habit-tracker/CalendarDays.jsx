/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function CalendarDays(props) {
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    if (weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6);
    } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - weekdayOfFirstDay + 1);
    } 

    for (let day = 0; day < 42; day++) {
        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
            date: new Date(firstDayOfMonth),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
            year: firstDayOfMonth.getFullYear()
        };

        currentDays.push(calendarDay);
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    };



    return (
        <div className='table-content'>
            {currentDays.map((day, index) => {
                return (
                    <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                        onClick={() => props.changeCurrentDay(day)} key={index}>
                        <p>{day.number}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default CalendarDays;