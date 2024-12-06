import React, { useState} from 'react';
import Header from "../components/Header"
import { Text } from "@chakra-ui/react";
import HabitTracker from '../components/habit-tracker/HabitTracker';
import { useOutletContext } from 'react-router-dom';

function HabitTrackerPage(){
    const [currentDay, setCurrentDay] = useState(new Date());
    const theme = useOutletContext();

    return (
    <>
        <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Habit Tracker"/>
        {/*<Text id="habit-text" textAlign={"center"} fontSize={20}>What habits would you like to track?</Text>*/}
        <HabitTracker theme={theme} />
    </>
    );
}

export default HabitTrackerPage;