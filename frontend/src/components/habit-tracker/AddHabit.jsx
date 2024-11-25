import React, { useState } from 'react';
import ColourPicker from './ColourPicker'

function AddHabit({ addHabit }) {
    const [colour, setColour] = useState('#000000');
    const [text, setText] = useState('');
    const [frequency, setFrequency] = useState('');
    const [unit, setUnit] = useState('day');

    function handleAddHabit() {
        if (!text) return; //Prevent empty habits
        addHabit({ colour, text, frequency, unit});

        //Reset inputs after habit is added
        setText(''); //resets input
        setFrequency(''); //resets frequency
        setUnit('day');
        setColour('000000')
    }

    return (
        <div className='addHabit'>
            <ColourPicker
                colour={colour}
                setColour={setColour}
            />
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Add a habit'
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