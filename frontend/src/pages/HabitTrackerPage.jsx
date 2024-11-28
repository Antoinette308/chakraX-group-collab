import React, { useState} from 'react';
import Header from "../components/Header"
import { Text } from "@chakra-ui/react";
import HabitTracker from '../components/habit-tracker/HabitTracker';

function HabitTrackerPage(){
    const [currentDay, setCurrentDay] = useState(new Date());

    return (
    <>
        <Header size="6xl" bg="teal.500" color="gray.900" text="Hello World"/>
        <Text textAlign={"center"} fontSize={20}>What habits would you like to track?</Text>
        <HabitTracker />
    </>
    );
}

export default HabitTrackerPage;