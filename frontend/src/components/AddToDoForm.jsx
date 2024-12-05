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




// New code 01/12/24 onwards


import React from 'react';
import styles from '../styles/AddToDoForm.module.css';
// Trying to add functionality
import { useState } from 'react';
import ToDoListItems from './ToDoListItems';


function AddToDoForm({ onTaskAdded }) {   // Extract onTaskAdded as a prop for fetching the new tasks. This calls the handleNewTaskCreatedByUser function in ToDoListItems.jsx
    console.log('AddToDoForm and Add Task button component rendered');


    const [content, setContent] = useState(''); // Store the content of the input field

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents a default form submission

        if (!content.trim()) {
            console.error('Content is empty'); // Return an error and message if content is empty
            return; 
        }

        console.log('Submitting:', { content }); // Log the content of the input field for viweing errors

        // Creating a function to create a new task
        fetch('http://localhost:3000/todo/new-task', {  // Fetching the data from the API, and sending the data to the server
            method: 'POST',  // Using the POST method to send data to the server
            headers: {   // Setting the headers to accept JSON data
                'Content-Type': 'application/json',   // Setting the content type to JSON
            },
            body: JSON.stringify({ tasks: content, completed: false }),   // Stringify the content of the input field. Set tasks to be the content. Set completed to false.
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');  // Throw an error if the response is not ok
            }
            return response.json(); // Return the response as JSON
        })
        .then(data => {
            console.log('Success:', data);
            setContent(''); // Clear the input field after successful submission
            onTaskAdded(); // Trigger data fetch in ToDoListItems
        })
        .catch(error => {
            console.error('Error:', error);
            onTaskAdded(); // Trigger the data fetch in ToDoListItems
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={content} 
                onChange={e => setContent(e.target.value)}
                placeholder="Write a new task"
                className={styles.form}
            />
            <button type='submit' className={styles.button}>Add Task</button>
        </form>
    );
};

export default AddToDoForm;

