import React, { useState } from 'react';
import AddHabit from './AddHabit'

function AddHabitButton({ addHabit}) {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible((prev) => !prev)
    };
    
    return (
        <div>
            <div>
                <button onClick={toggleVisibility}>Add new habit</button>
            </div>
            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <AddHabit addHabit={addHabit}/>
            </div>
        </div>
    );
}

export default AddHabitButton;