import React, { useState } from 'react';
import { FaCircle, FaTimes } from 'react-icons/fa';
import './HabitTracker.css'

function ViewWeekly({ habits, setHabits }) {

const toggleStatus = (habitIndex,day) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].status[day] = !updatedHabits[habitIndex].status[day];
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
};

    // Get week dates starting from Monday
    function getWeekDates() {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Adjust to find Monday
        const mondayDate = new Date(currentDate);
        mondayDate.setDate(currentDate.getDate() - ((dayOfWeek + 6) % 7)); // Move to last Monday

        // Generate week dates
        const weekDates = Array.from({ length: 7 }, (_, i) => {
            const tempDate = new Date(mondayDate);
            tempDate.setDate(mondayDate.getDate() + i);

            return {
                dayName: days[tempDate.getDay()],
                date: tempDate.getDate(),
                month: tempDate.getMonth() + 1, // Months are 0-indexed
            };
        });
        return weekDates;
    }

    const weekDates = getWeekDates();

return (
    <div className='view-weekly'>
        <h1>Weekly Habits Progress:</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Habit</th>
                    {weekDates.map((date, index) => (
                        <th key={index}>{date.dayName} {date.date}/{date.month}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {habits.map((habit, habitIndex) => (
                    <tr key={habitIndex}>
                        <td>
                            <h4 style={{ color: habit.colour}}>{habit.text}</h4>
                        </td>
                        {Object.keys(habit.status).map((day) => (
                            <td
                                key={day}
                                className='text-center'
                                style={{ cursor: 'pointer' }}
                                onClick={() => toggleStatus(habitIndex, day)}
                            ><div className='icons-div'>
                                {habit.status[day] ? (
                                    <FaCircle className='text-sucess' title='Mark undone' size={30} style={{color: habit.colour}}/>
                                ) : (
                                    <FaTimes className='text-danger' title="Mark done" size={40} style={{ opacity: 0 }}/>
                                )}</div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default ViewWeekly;