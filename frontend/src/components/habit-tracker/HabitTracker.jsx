import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HabitItem from './HabitItem';
import AddHabitButton from './AddHabitButton';
import './Habit.css';

function HabitTracker() {

    //Initialising state and checking local storage. If no habits are stored, it defaults to one prewritten habit
    const [habits, setHabits] = useState(() => {
        
        //error with storedHabits continuing to be null, using try-catch statement to handle
        try {
            const storedHabits = localStorage.getItem('habits');
             //if no data, returns null
            return storedHabits ? JSON.parse(storedHabits) : []; //not null then parse, else save as empty array
        } catch (error) {
            console.log("Failed to parse habits from localStorage:", error);
            return [{id: 1, colour: {r: 0, g: 0, b: 0, a: 1}, text: "Do laundry", frequency: 1, unit: "week"}]; //if failed, habits state initialised with one default habit
        }
    });

    //Save habits to local storage on state change
    useEffect(() => {
        if (Array.isArray(habits)) {
            localStorage.setItem('habits', JSON.stringify(habits)); // Save to localStorage
        } else {
            console.error("Invalid habits state; not saving to localStorage:", habits);
        }
    }, [habits]);
    
    //Function to add new habit, a unique id is created with uuid
    function addHabit(habitDetails) {
        //const colourString = habitDetails.colour.toString('rgba');
        //const colourString = `rgba(${habitDetails.colour.r}, ${habitDetails.colour.g}, ${habitDetails.colour.b}, ${habitDetails.colour.a})`
        //console.log(habitDetails.colour)
        
        const colourString = `rgba(${habitDetails.colour.red}, ${habitDetails.colour.green}, ${habitDetails.colour.blue}, ${habitDetails.colour.alpha})`;
        //console.log(colourString)

        const newHabit = {
            id: uuidv4(),
            colour: colourString,
            ...habitDetails,
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
            <div>
                {habits.map(habit => (
                    <HabitItem
                        key={habit.id}
                        habit={habit}
                        deleteHabit={deleteHabit}
                    />
                ))}
            </div>
        </div>
    );
}


export default HabitTracker;