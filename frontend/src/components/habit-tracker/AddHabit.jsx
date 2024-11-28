/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {  parseColor } from "@chakra-ui/react"
import ColourPicker from './ColourPicker'

function AddHabit({ addHabit }) {
    const [colour, setColour] = useState(parseColor('#14B8A6'));
    const [text, setText] = useState('');
    const [frequency, setFrequency] = useState('');
    const [unit, setUnit] = useState('day');

    function handleAddHabit() {
        if (!text || !frequency) return; //Prevent empty habit text and frequency
        addHabit({ colour, text, frequency, unit });

        //Reset inputs after habit is added
        setText(''); //resets input
        setFrequency(''); //resets frequency
        setUnit('day');
        setColour(parseColor('#14B8A6'));
    }

    // Render the form to add a habit
    return (
        <div className='addHabit'>
            <ColourPicker
                colour={colour}
                setColour={setColour}
            />
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Write new habit here'
            />
            <input
                type="number"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                placeholder='2'
            />
            <label htmlFor="number">{frequency == 1 ? " time" : " times"} per</label>
            <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
            >
                <option value="day">day</option>
                <option value="week">week</option>
                <option value="month">month</option>
            </select>
            <button onClick={handleAddHabit}>Add</button>
        </div>
    );
}

export default AddHabit;