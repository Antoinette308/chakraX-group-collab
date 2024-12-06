// My original code:
/*
import Header from "../components/Header"
import { Text } from "@chakra-ui/react";
import ToDoList from "../components/ToDoList";
import AddToDo from "../components/AddToDo";
import {VStack, IconButton } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react'


// Made by Antoinette. TodoList component 

function TodoList(){
      // A. Sample todos within an array
      const initialTodos = [
        {
            id: 1,
            body: 'Homework'
        },
        {
            id: 2,
            body: 'Laundry',
        },
        ];


        // A. Holds the state for todos using useState hook. Initial data is fetched from local storage or initial todos.
        const [todos, setTodos] = useState(
            () => JSON.parse(localStorage.getItem('todos')) || initialTodos
        );

        // A. Commented out useEffect
        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos])

        // A. deleteTodo function that takes in the id of the todo to delete
        function deleteTodo(id) {
            // Create a new array of todos. If the id's mtach, do not return the todo
            const newTodos = todos.filter(todo => {
                return todo.id !== id
            })
            setTodos(newTodos); // A. Passing a new to dos array that is filtered.
        }

        // A. Function to add a new to do 
        // A. Call setTodos()
        function addTodo(todo) {
            setTodos([...todos, todo]);
        }

     // A. Passing addTodo function as a prop to <AddToDo>   
     // A. Passing todos as a prop to <ToDoList>   
     // A. Passing the deleteTodo function as a prop to <ToDoList>
     
    return (
        <>
        <Header size="6xl" bg="teal.500" color="gray.900" text="Your ToDo List"/>
        <Text textAlign={"center"} fontSize={20}>What's on the agenda?</Text>
        <VStack>
            <AddToDo addTodo={addTodo} />
            <ToDoList todos={todos} deleteTodo={deleteTodo} />
        </VStack>
    </>
)
}

export default TodoList;  
*/


// New code:


/*
import React, { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('/todo/all-tasks')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <VStack>
            <AddToDo setTodos={setTodos} todos={todos} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </VStack>
    );
}

export default TodoList;
*/




// New code 01/12/24


import { useOutletContext } from "react-router-dom";
import Header from "../components/Header"
// import AddToDoForm from '../components/todo-list/AddToDoForm';
import ToDoListItems from '../components/todo-list/ToDoListItems';

function TodoListPage() {
    const theme = useOutletContext();
    return (
        <>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Your ToDo List"/>
            <h1>This is your Todo List! 📝</h1>
            <ToDoListItems theme={theme} />
        </>

    );
}

export default TodoListPage;
