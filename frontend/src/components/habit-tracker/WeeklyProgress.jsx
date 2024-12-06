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
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, frequency, unit } = habit;
        const weekDays = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
        const completed = weekDays.filter(day => day === true).length;

        let percentageCompleted = 0;
        if (habit.unit === "day") {
            percentageCompleted = (completed / 7) * 100;
        } else {
            percentageCompleted = (completed / habit.frequency) * 100;
        }
        return Math.min(percentageCompleted, 100);
    }

    return (
        <div className="weekly-progress">
            {habits.map((habit) => {
                const percentageCompleted = calculateProgress(habit);

                return (
                    <div className="weekly-progress-bars">
                        <ProgressRoot
                            key={habit.id}
                            value={percentageCompleted}
                            maxW="sm"
                        >
                            <HStack gap="5">
                                <ProgressLabel>{habit.text}</ProgressLabel>
                                <ProgressBar
                                    flex="1"
                                    sx={{
                                        "& div[role='progressbar']": {
                                        backgroundColor: habit.color, // Use the rgba() color directly
                                        },
                                        backgroundColor: "rgba(0, 0, 0, 0.1)", // Progress track background
                                    }}
                                />
                                <ProgressValueText>
                                    {percentageCompleted === 100 ? "Complete" : `${percentageCompleted.toFixed(0)}%`}
                                </ProgressValueText>
                            </HStack>
                        </ProgressRoot>
                    </div>
                );
            })}
        </div>
    );
}

export default WeeklyProgress;