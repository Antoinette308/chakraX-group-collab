-- to be integrated into the main sql database file

USE exec_function_db;

CREATE TABLE habits ( 
    id INT PRIMARY KEY AUTO_INCREMENT, 
    text VARCHAR(255) NOT NULL,
    colour VARCHAR(255) NOT NULL,
    frequency INT, -- Number of times the habit should be done 
    unit ENUM('day', 'week'), -- Time period in which the frequency applies 
    monday BOOLEAN,
    tuesday BOOLEAN,
    wednesday BOOLEAN,
    thursday BOOLEAN,
    friday BOOLEAN,
    saturday BOOLEAN,
    sunday BOOLEAN 
);