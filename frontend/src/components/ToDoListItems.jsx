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





// New code 01/12/24


import React from 'react';
import { VStack, HStack } from "@chakra-ui/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";
import { Spacer } from "@chakra-ui/react";
// Trying to add functionality 
import { useState, useEffect } from 'react';



function ToDoListItems() {
    console.log('ToDoListItems component rendered'); 


        // My code

                // readAllTodos(); // Call the function to test if it works

        const [todos, setTodos] = useState([]);
        const [isLoading, setIsLoading] = useState(true); // Add loading state // from google
        
        // async/await to attempt fetching all todos.    
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
        useEffect(() => {
            readAllTodos()
            .then((data) => {
                setTodos(data); // Initially I was setting the todos to an empty array, but I've now set the todos to the data
                setIsLoading(false); 
            });
        }, []); 

        // If the data is still loading, display a loading message.
        if (isLoading) {
            return <p>Loading...</p>;
        }


        

        return (
            <VStack width='100%' alignItems='stretch'>
                {todos.map((todo, index) => (    // Initially I was mapping over the todos array, but I've now added an index to the map function. This also a key for the HStack
                    <HStack key={index} p={2} borderWidth={1} borderRadius="30px">  {/* Initially I was using the todo.id as the key, but I've now used the index as the key */}
                    <input type="checkbox" />
                    <text>{todo.tasks}</text>   {/* Initially I was using todo.body, but I've now used todo.tasks */}
                    <Spacer />
                    <HiOutlinePencilSquare />
                    <FaRegTrashCan />
                </HStack>
            ))}
            </VStack>
        );
    }
    
    export default ToDoListItems;
    