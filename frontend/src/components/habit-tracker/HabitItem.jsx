import React, { useState } from 'react';
import DeleteHabit from './DeleteHabit';

function HabitItem({ habit, deleteHabit }) {
    //Add # to colour, as colour picker only includes 6 digits
    const habitColour = `#${habit.colour}`;
    console.log("Colour with # is ", habitColour);

    // When habit is added, create coloured icon, paragraph, and delete button.
    return (
        <div className='habit-item'>
            <i
                className='pi pi-circle-fill'
                style={{ color: habitColour }} 
            />
            <p style={{ color: habitColour }}>{habit.text} {habit.frequency} {habit.frequency == 1 ? "time per" : "times per"} {habit.unit}</p>
            <DeleteHabit
                habitId={habit.id}
                deleteHabit={deleteHabit} 
            />
        </div>
    );
}

export default HabitItem;