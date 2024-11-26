import React, { useState } from 'react';
import HabitItem from './HabitItem';
import AddHabitButton from './AddHabitButton';
import './Habit.css';

function HabitTracker() {
    const [habits, setHabits] = useState([{id: 1, colour: {"r": 20, "g": 184, "b": 166, "a": 1}, text: 'Go running', frequency: 3, unit: "week"}]);
    const [nextId, setNextId] = useState(2);
        
    function addHabit(habitDetails) {
        const newHabit = {
            id: nextId,
            ...habitDetails,
        };
        setHabits([...habits, newHabit]);
        setNextId(nextId + 1);
    };

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