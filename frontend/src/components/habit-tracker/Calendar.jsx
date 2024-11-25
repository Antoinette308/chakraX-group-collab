import React, { useState } from "react";
import CalendarDays from "./CalendarDays";
import './Calendar.css';

function Calendar() {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [currentDay, setCurrentDay] = useState(new Date());

    return (
        <div className="calendar">
            <header className="calendar-header">
                <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
            </header>
            <div className="calendar-body">
                <div className="table-header">
                    {weekdays.map((weekday, index) => {
                            return <div className="weekday" key={index}><p>{weekday}</p></div>
                        })}
                </div>
                <div className="table">
                    <CalendarDays day={currentDay} />
                </div>
            </div>
        </div>
        
    )
}

export default Calendar;