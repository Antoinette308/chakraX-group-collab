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


        
        // async/await to attempt fetching all todos.    
        async function readAllTodos() {
            console.log('Calling API to read all todos');
            const url = 'http://localhost:3000/todo-list'
            try {   // Wrap code in a try block to catch any errors
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        readAllTodos(); // Call the function to test if it works

        // Create a useEffect function here to call readAllTodos() when the component mounts.
        useEffect(() => {
            readAllTodos();
        }, []);
        

        return (
            <VStack width='100%' alignItems='stretch'>
                <HStack p={2} borderWidth={1} borderRadius="30px">
                    <input type="checkbox" />
                    <p>task</p>
                    <Spacer />
                    <HiOutlinePencilSquare />
                    <FaRegTrashCan />
                </HStack>
            </VStack>
        );
    }
    
    export default ToDoListItems;