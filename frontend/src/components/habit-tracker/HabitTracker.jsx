import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HabitItem from './HabitItem';
import AddHabitButton from './AddHabitButton';
import './HabitTracker.css';
import ViewWeekly from './ViewWeekly';
import WeeklyProgress from './WeeklyProgress'

function HabitTracker() {

    const [habits, setHabits] = useState(() => {
        try {
            const storedHabits = localStorage.getItem('habits');
            return storedHabits ? JSON.parse(storedHabits) : []; // Start with an empty array if no habits are found
        } catch (error) {
            console.error("Failed to parse habits from localStorage", error);
            return []; // Default to an empty array on error
        }
    });

    //Save habits to local storage on state change
    useEffect(() => {
        if (Array.isArray(habits)) {
            localStorage.setItem('habits', JSON.stringify(habits)); // If habits is an array, not null or undefined, save to localStorage
        } else {
            console.error("Invalid habits state; not saving to localStorage:", habits);
        }
    }, [habits]);
    
    //Function to add new habit, a unique id is created with uuid
    function addHabit(habitDetails) {
        const status = {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false,
        };

        const newHabit = {
            id: uuidv4(),
            ...habitDetails,
            status,
        };

        setHabits((prevHabits) => [...prevHabits, newHabit]);   
    };


    //Function to delete a habit by id
    function deleteHabit(id) {
        setHabits(habits.filter((habit) => habit.id !== id));
    };

    return (
        <div className='habit-tracker'>
            <header>
                <AddHabitButton addHabit={addHabit}/>
            </header>
            <div className='habit-items'>
                {habits.map(habit => (
                    <HabitItem
                        key={habit.id}
                        habit={habit}
                        deleteHabit={deleteHabit}
                    />
                ))}
            </div>
            <ViewWeekly habits={habits} setHabits={setHabits} />
            <WeeklyProgress habits={habits} />
        </div>
    );
}


export default HabitTracker;