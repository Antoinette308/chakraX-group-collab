/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import AddHabit from './AddHabit'

function AddHabitButton({ addHabit, theme}) {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible((prev) => !prev)
    };
    
    return (
        <div>
            <div>
                <Button className='add-habit-button' onClick={toggleVisibility} bg={theme.pageButtons} size="lg" color={theme.ButtonColor}>Add a new habit</Button>
            </div>
            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <AddHabit addHabit={addHabit} bg={theme.accentColor}/>
            </div>
        </div>
    );
}

export default AddHabitButton;