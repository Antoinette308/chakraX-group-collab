// My original code:

/*
import React from 'react';
import { HStack, VStack, Text, IconButton, Spacer, Badge } from "@chakra-ui/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import styles from '../styles/ToDoList.module.css';




// Made by Antoinette. ToDoList component

function ToDoList({ todos, deleteTodo }) {  // A. Extract todos and deleteToDos as props for the ToDoList function
    if (!todos.length) {    // A. If not todos.length (if length of todos array is less than zero) then return a badge with a message
        return (
            <Badge colorScheme="green" p={4} borderRadius='lg'>
                No Todos, yay!
            </Badge>
        );
    }

    // A. Display todos inside the VStack 
    // A. Trying to pass the IoTrashOutline icon in a prop to the IconButton
    // A. Using chakra ui props to style the HStack
    // A. Passing an arrow function to deleteTodo on click. Passing todo.id as argument for this function.
    return (
        <VStack width='100%' alignItems='stretch'>
            {todos.map(todo => (
                <HStack key={todo.id} p={2} borderWidth={1} borderRadius="30px">
                    <input type="checkbox" className={styles.checkbox} />
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <HiOutlinePencilSquare />
                    <FaRegTrashCan 
                    onClick={() => deleteTodo(todo.id)}
                    />
                </HStack>
            ))}
        </VStack>
    );
}

export default ToDoList;
*/





// New code 01/12/24 onwards


import React from 'react';
import { VStack, HStack } from "@chakra-ui/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";
import { Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"
// Adding functionality 
import { useState, useEffect } from 'react';
import AddToDoForm from './AddToDoForm';



function ToDoListItems() {
    console.log('ToDoListItems component rendered'); 

        // readAllTodos(); // Call the function to test if it works
        const [todos, setTodos] = useState([]);
        const [isLoading, setIsLoading] = useState(true); // Add loading state to display a loading message while fetching data
        const [fetchTrigger, setFetchTrigger] = useState(false); // State to fetch new tasks created by the user
        
        // async/await to fetch all todos from exec_function_db    
        async function readAllTodos() {
            console.log('Calling API to read all todos');
            const url = 'http://localhost:3000/todo/all-tasks'; // Initially, I was calling the wrong local host and the wrong endpoint. The correct endpoints are in todo.routes.js
            try {   // Wrap code in a try block to catch any errors
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                return data; // Initially I wasn't returning the data, but I've now added a return statement to return the data
            } catch (error) {
                console.error('Error fetching tasks:', error.message);
                return []; // Initially I wasn't returning an empty array, but I've now added a return statement to return an empty array
            }
        }


        // Create a useEffect function here to call readAllTodos() when the component mounts.
        // This also fetches any new tasks created by the user.
        useEffect(() => {
            readAllTodos()
            .then((data) => {
                setTodos(data); // Initially I was setting the todos to an empty array, but I've now set the todos to the data
                setIsLoading(false); 
            });
        }, [fetchTrigger]); // Run useEffect on mount and when fetchTrigger changes (when a new task is created by the user)


        // If a new task has been created by the user, fetch the todos again from exec_function_db
        // Created this FetchTrigger to avoid infinite loops when fetching data. Initially I was passing data as a dependency to the useEffect function, but it caused an infinite loop
        const handleNewTaskCreatedByUser = () => {
            setFetchTrigger(prev => !prev); // Toggle fetchTrigger to re-fetch todos
        };




        
        // Function to delete a todo by ID
        const deleteTodoById = async (id) => {
            console.log('Deleting todo:', id);
            const url = `http://localhost:3000/todo/delete-task/${id}`; // Declare the URL to delete a todo by ID
            try {   // Wrap code in a try block to catch any errors
                const response = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    const errorDetails = await response.json();
                    throw new Error(`Network response was not ok: ${response.status} - ${errorDetails.message}`); // Throw an error if the response is not ok
                }
                setFetchTrigger(prev => !prev); // Toggle fetchTrigger to re-fetch todos
            } catch (error) {
                console.error('Error deleting todo:', error.message);
            }
        };
         
        

        // If the data is still loading, display a loading message.
        if (isLoading) {
            return <p>Loading...</p>;
        }
            

    


        

    return (
        <>
            <AddToDoForm onTaskAdded={handleNewTaskCreatedByUser} /> {/* Returning the AddToDoForm component here, and not in the todopage retrurn statement. This is to avoid the form & button rendering duplicates*/}
            <VStack width='100%' alignItems='stretch'>
                {todos.map((todo) => (    // Initially I was mapping over the todos array, but I've now added an index to the map function. This also a key for the HStack
                    <HStack key={todo.id} p={2} borderWidth={1} borderRadius="30px">  {/* Initially I was using the todo.id as the key, but I've now used the index as the key */}
                        <input type="checkbox" />
                        <Text>{todo.tasks}</Text>   {/* Initially I was using todo.body, but I've now used todo.tasks */}
                        <Spacer />
                        <HiOutlinePencilSquare />
                        <FaRegTrashCan onClick={() => {
                            console.log(`Clicked delete for todo with id: ${todo.id}`);
                            deleteTodoById(todo.id);
                        }} />
                    </HStack>
                ))}
            </VStack>
        </>
    );
};
    
    export default ToDoListItems;
    