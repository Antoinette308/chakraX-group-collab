/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {  parseColor } from "@chakra-ui/react"
import ColourPicker from './ColourPicker'
import { IoMdAdd } from "react-icons/io";

function AddHabit({ addHabit, bg }) {
    const [colour, setColour] = useState(parseColor('#14B8A6'));
    const [text, setText] = useState('');
    const [frequency, setFrequency] = useState(1);
    const [unit, setUnit] = useState('day');

    function handleAddHabit() {
        if (!text || !frequency) 
            return; //Prevent empty habit text and frequency
        console.log(colour)
        const habit_name = text;
    
        addHabit({ colour, habit_name, frequency, unit });

        
        //Reset inputs after habit is added
        setText(''); //resets input
        setFrequency(''); //resets frequency
        setUnit('day');
        setColour(parseColor('#14B8A6'));
    }

    // Render the form to add a habit
    return (
        <div className='add-habit-div-div'>
            <div className='add-habit-div' style={{backgroundColor: bg}}>
                <ColourPicker
                    colour={colour}
                    setColour={setColour}
                />
                <input
                    value={text}
                    id="text"
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Write new habit here'
                />
                <input
                    type="number"
                    id = "frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    placeholder='1'
                    min="1"
                />
                <label htmlFor="number">{frequency === 1 ? " time" : " times"}</label>
                <label htmlFor="select">per</label>
                <select
                    id="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                >
                    <option value="day">day</option>
                    <option value="week">week</option>
                    <option value="month">month</option>
                </select>
                <button id="add" onClick={handleAddHabit}><IoMdAdd /></button>
            </div>
        </div>
    );
}

export default AddHabit;