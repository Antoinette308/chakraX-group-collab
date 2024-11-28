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
                <HStack key={todo.id} p={2} borderWidth={1} borderRadius="md">
                    <input type="checkbox" className={styles.checkbox} />
                    <Text>{todo.body}</Text>
                    <Spacer />
                    {/*<IconButton
                        onClick={() => deleteTodo(todo.id)}
                        aria-label="Delete Task"
                        size="sm"
                        variant="surface"
                        icon={<FaRegTrashCan />}
                    /> */}
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
