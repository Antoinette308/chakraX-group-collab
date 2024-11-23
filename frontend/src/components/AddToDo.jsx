import React, { useState } from 'react';
import { HStack, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

// Made by Antoinette. AddToDo component

function AddToDo({ addTodo }) { // A. Extract addTodo function as a prop
    const [content, setContent] = useState('');

    // A. Function to handle the submitting of the form
    function handleSubmit(e) {
        e.preventDefault();


        // A. Use nanoid to generate a unique identifier for todo.id
        const todo = {
            id: nanoid(),
            body: content,
        };

        // A. Call the addTodo function and pass the individual todo
        // A. Once you've added the todo, setContent('') sets the content back to an empty string
        addTodo(todo);
        setContent('');
    }

    // A. Return form. Pass handleSubmit function as a prop
    // A. Submit button 

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <HStack> 
                <Input
                    type="text"
                    placeholder="Write new task"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type='submit' className='todobutton'>Add Task</button>
            </HStack>
        </form>
    );
}

export default AddToDo;
