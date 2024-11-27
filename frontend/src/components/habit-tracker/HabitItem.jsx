/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import DeleteHabit from './DeleteHabit';


function HabitItem({ habit, deleteHabit }) {
    //console.log("habit:", habit)

    // Converting from rgba object to string format, e.g. rgba(0, 0, 0, 1)
    //const colourString = habit.colour.toString('rgba');
    //console.log("colourString: ", colourString)

    

    // When habit is added, create coloured icon, paragraph, and delete button.
    return (
        <div className='habit-item' style={{ color: habit.colour }}>
            <FaCircle style={{ color: habit.colour }} />
            <p>{habit.text} {habit.frequency} {habit.frequency == 1 ? "time per" : "times per"} {habit.unit}</p>
            <DeleteHabit
                habitId={habit.id}
                deleteHabit={deleteHabit}
            />
        </div>
    );
}

export default HabitItem;