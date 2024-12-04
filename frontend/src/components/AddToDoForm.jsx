// My original code:

/* 
import React, { useState } from 'react';
import { HStack, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import styles from '../styles/AddToDo.module.css'

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <HStack> 
                <Input
                    type="text"
                    placeholder="Write new task"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    colorPalette='cyan'
                />
                <button type='submit' className={styles.button}>Add Task</button>
            </HStack>
        </form>
    );
}

export default AddToDo;
*/




// New code 01/12/24


import React from 'react';
import styles from '../styles/AddToDoForm.module.css';


function AddToDoForm() {
    console.log('AddToDoForm and Add Task button component rendered');

    return (
        <form classname={styles.form}>
            <input 
            type="text"
            placeholder="Write a new task"
            className={styles.input} />
            <button type='submit' className={styles.button}>Add Task</button>
        </form>
    );
}

export default AddToDoForm;