import React from "react";
import { HStack } from "@chakra-ui/react";
import { ProgressBar, ProgressLabel, ProgressRoot, ProgressValueText } from "../ui/progress"

function WeeklyProgress({ habits }) {
    //Calculate value based on amount of true readings/user target for week * 100
    //targets:
    //check habit.status
    //loop/forEach through object
    // Per day: no of true for each day/7 * 100
    //Per week: no true for each day/frequency * 100
    //cap percent at 100%
    //If 100%, display complete instead
    // map for each habit in local storage
    // target = 

    function calculateProgress(habit) {
        const { status, frequency, unit } = habit;

        let completed = 0;
        for (const [day, value] of Object.entries(status)) {
            if (value === true) {
                completed++
            }
        }
        
        let percentageCompleted;
        if (habit.unit === "day") {
            percentageCompleted = (completed / 7) * 100;
        } else {
            percentageCompleted = (completed / habit.frequency) * 100;
        }
        return Math.min(percentageCompleted, 100);

    }
    return (
        <>
            {habits.map((habit) => {
                const percentageCompleted = calculateProgress(habit);

                return (
                    <ProgressRoot key={habit.id} value={percentageCompleted} maxW="sm">
                        <HStack gap="5">
                            <ProgressLabel>{habit.text}</ProgressLabel>
                            <ProgressBar flex="1" />
                            <ProgressValueText>
                                {percentageCompleted === 100 ? "Complete" : `${percentageCompleted.toFixed(0)}%`}
                            </ProgressValueText>
                        </HStack>
                    </ProgressRoot>
                );
            })}
        </>
    );
}

export default WeeklyProgress;