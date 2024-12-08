/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HabitItem from './HabitItem';
import AddHabitButton from './AddHabitButton';
import './HabitTracker.css';
import ViewWeekly from './ViewWeekly';
import WeeklyProgress from './WeeklyProgress'

const token = JSON.parse(localStorage.getItem("token"));

//save habits to storage
// const saveHabitsToLocalStorage = (habits) => {
//     try {
//         localStorage.setItem('habits', JSON.stringify(habits));
//     } catch (error) {
//         console.error("Error saving habits to local storage:", error);
//     }
// };

// fetch habits from API
const fetchHabits = async () => {
    try {
        const response = await fetch('http://localhost:3000/habit-tracker/habit', {
            header: {"Authorization": `Bearer ${token}`}
        });
        const data = await response.json();
        return data.map(habit => ({
            ...habit,
            monday: habit.monday ?? false,
            tuesday: habit.tuesday ?? false,
            wednesday: habit.wednesday ?? false,
            thursday: habit.thursday ?? false,
            friday: habit.friday ?? false,
            saturday: habit.saturday ?? false,
            sunday: habit.sunday ?? false,
        }));
    } catch (error) {
        console.error("Error fetching habits:", error);
        return [];
    }
};

// add habits via API
const addHabitAPI = async (habitDetails) => {

    try {
        const response = await fetch('http://localhost:3000/habit-tracker/new-habit', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                "Authorization": `Bearer ${token}` },
            body: JSON.stringify(habitDetails),
        });
        return await response.json();
    } catch (error) {
        console.log("Error adding a new habit via API", error);
        throw error;
        return null;
    }
};

//delete habits via API
const deleteHabitAPI = async (id) => {
    try {
        const response = await fetch (`http://localhost:3000/habit-tracker/delete-habit/${id}`, {
            method: 'DELETE',
            headers: {"Authorization": `Bearer ${token}`
                    }
        });
        return id;
    } catch (error) {
        console.log("Error deleting habit via API", error);
        return null;
    }
}

// update habits via API
const updateHabitAPI = async (habit) => {
    try {
        console.log(habit)
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(`http://localhost:3000/habit-tracker/update-habit/${habit.habits_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 
                        "Authorization": `Bearer ${token}` },
            body: JSON.stringify(habit),
        });
    } catch (error) {
        console.log('Error updating habit via API', error);
    }
};

function HabitTracker({theme}) {
    const user = JSON.parse(localStorage.getItem('user'))

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
        const initialiseHabits = async () => {
            const apiHabits = await fetchHabits();
            setHabits(apiHabits);
            // saveHabitsToLocalStorage(apiHabits);
        };
        initialiseHabits();
    }, []);

    //sync local storage whenever habit state changes
    useEffect(() => {
        // saveHabitsToLocalStorage(habits);
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
            user_id: user,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        };

        const savedHabit = await addHabitAPI(newHabit);
        if (savedHabit) {
            console.log(savedHabit)
            setHabits((prevHabits) => [...prevHabits, savedHabit]);  
        }
    };


    //Delete a habit by id (via API and local storage)
    const deleteHabit = async (id) => {
        
        const deletedId = await deleteHabitAPI(id);
        if (deletedId) {
            setHabits((prevHabits) => prevHabits.filter((habit) => habit.habits_id !== deletedId)); //remove habit from state

            const updatedHabits = habits.filter((habit) => habit.id !== deletedId) // create new array without deleted habit
            localStorage.setItem('habits', JSON.stringify(updatedHabits)); //update local storage to new array, deleting old habit
        }
    };

    //Toggle habit status (update API and local storage)
    const toggleStatus = async (habitIndex, day) => {
        const updatedHabits = [...habits];
        updatedHabits[habitIndex][day] = !updatedHabits[habitIndex][day];

        const habitToUpdate = updatedHabits[habitIndex];
        await updateHabitAPI(habitToUpdate);

        setHabits(updatedHabits);
    }

    return (
        <div className='habit-tracker'>
            <header>
                <AddHabitButton theme={theme}addHabit={addHabit}/>
            </header>
            <div className='habit-items'>
                {habits.map(habit => (
                    <HabitItem
                        key={habit.habits_id}
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