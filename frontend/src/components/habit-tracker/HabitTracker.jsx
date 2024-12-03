import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HabitItem from './HabitItem';
import AddHabitButton from './AddHabitButton';
import './HabitTracker.css';
import ViewWeekly from './ViewWeekly';
import WeeklyProgress from './WeeklyProgress'

// fetch habits from API
const fetchHabits = async () => {
    try {
        const response = await fetch('http://localhost:3000/habit');
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error fetching habits:", error);
        return [];
    }
}

// add habits via API
const addHabits = async () => {
    try {
        const response = await fetch('http://localhost:3000/new-habit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(habitDetails),
        });
        const newHabit = await response.json();
        return newHabit;
    } catch (error) {
        console.log("Error adding a new habit", error);
        return null;
    }
};

//delete habits vua API
const deleteHabits = async () => {
    try {
        const response = await fetch (`http://localhost:3000/delete-habit/${id}`, {
            method: 'DELETE',
        });
        return id;
    } catch (error) {
        console.log("Error deleting habit:", error);
        return null;
    }
}

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
        const Monday = false;
        const Tuesday = false;
        const Wednesday = false;
        const Thursday = false;
        const Friday = false;
        const Saturday = false;
        const Sunday = false;
        

        const newHabit = {
            id: uuidv4(),
            ...habitDetails,
            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
        };

        setHabits((prevHabits) => [...prevHabits, newHabit]);   
    };


    //Function to delete a habit by id (from databse and local storage)
    const deleteHabit = async (id) => {
        const deletedId = await deleteHabits(id);
        if (deletedId) {
            setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== deletedId)); //remove habit from state

            const updatedHabits = habits.filer((habit) => habit.id !== deletedId) // create new array without deleted habit
            localStorage.setItem('habits', JSON.stringify(updatedHabits)); //update local storage to new array, deleting old habit
        }
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
            <div className='weekly-progress-div'>
                <ViewWeekly habits={habits} setHabits={setHabits} />
                <WeeklyProgress habits={habits} />
            </div>
        </div>
    );
}


export default HabitTracker;