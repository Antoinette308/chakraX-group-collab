import React, { useState } from "react";
import CalendarDays from "./CalendarDays";
import './Calendar.css';

function Calendar() {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [currentDay, setCurrentDay] = useState(new Date()); //sets current day

    return (
        <div className="calendar">
            <header className="calendar-header">
                <h2>Today: {currentDay.getDate()} {months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2> {/*Return current date, month and year*/}
            </header>
            <div className="calendar-body">
                <div className="table-header">
                    {weekdays.map((weekday, index) => {
                            return <div className="weekday" key={index}><p>{weekday}</p></div> 
                        })} {/*Create header of weekdays by mapping over each day in weekday and creating new div for each*/}
                </div>
                <div className="table">
                    <CalendarDays day={currentDay} /> 
                </div> {/*render calendar days, pass currentDay as prop*/}
            </div>
        </div>
        
    )
}

export default Calendar;