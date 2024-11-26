-- to be integrated into the main sql database file

USE exec_function_db;

CREATE TABLE habits ( 
    id INT PRIMARY KEY, 
    habit_name VARCHAR(255) NOT NULL, 
    description TEXT, 
    frequency INT, -- Number of times the habit should be done 
    recurrence ENUM('daily', 'weekly', 'monthly', 'yearly'), -- Time period in which the frequency applies 
    start_date DATE, 
    last_completed DATE 
);