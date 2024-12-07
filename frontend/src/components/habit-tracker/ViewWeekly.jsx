/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FaCircle, FaTimes } from 'react-icons/fa';
import './HabitTracker.css'

const token = JSON.parse(localStorage.getItem("token"))

async function updateHabitAPI(habit) {
    console.log(habit)
    try {
        await fetch(`http://localhost:3000/habit-tracker/update-habit/${habit.habits_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 
                        "Authorization": `Bearer ${token.token}`
            },
            body: JSON.stringify(habit),
        });
    } catch (error) {
        console.error('Error updating habit via API:', error)
    }
};

function ViewWeekly({ habits, setHabits }) {

    const toggleStatus = async (habitId, habitIndex, day) => {
        console.log(habitId, habitIndex, day)
        const updatedHabits = [...habits];
        console.log(updatedHabits)
        const habitToUpdate = updatedHabits[habitIndex];
        const dayKey = day.toLowerCase();
        habitToUpdate[dayKey] = !habitToUpdate[dayKey];
        
        const updatedHabitFromAPI = await updateHabitAPI(habitToUpdate);
        try {
            await updateHabitAPI(habitToUpdate);
            setHabits(updatedHabits);
            localStorage.setItem('habits', JSON.stringify(updatedHabits))
        } catch (error) {
            console.error("Error toggling habit status:", error);
        }
    };

    // Set all completed days to false when logging on for the first time in a new week
    async function NewWeekReset() {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const monday = (new Date(currentDate.setDate(currentDate.getDate() + diff))).toISOString().slice(0, 10);

        let latestMonday = localStorage.getItem("latestMonday");
        if (monday !== latestMonday) {
            // Reset all completed habit days to false
            const updatedHabits = habits.map(habit => {
                const resetHabit = { ...habit };
                ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].forEach(day => {
                    resetHabit[day] = false;
                });
                return resetHabit;
            });
            //update habits in database
            try {
                await Promise.all(updatedHabits.map((habit) => updateHabitAPI(habit)));
                setHabits(updatedHabits);
                localStorage.setItem('habits', JSON.stringify(updatedHabits));
                localStorage.setItem('latestMonday', monday);
            } catch (error) {
                console.error("Error resetting habits for the new week:", error)
            }
        }
    };

    useEffect(() => {
        NewWeekReset();
    }, [])

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
                        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                            <td
                                key={day}
                                className='text-center'
                                style={{ cursor: 'pointer' }}
                                onClick={() => toggleStatus(habit.habits_id, habitIndex, day)}
                            >
                                <div className='icons-div'>
                                {habit[day] ? (
                                    <FaCircle className='text-sucess' title='Mark undone' size={30} style={{color: habit.colour}}/>
                                ) : (
                                    <FaTimes className='text-danger' title="Mark done" size={40} style={{ opacity: 0 }}/>
                                )}
                                </div>
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