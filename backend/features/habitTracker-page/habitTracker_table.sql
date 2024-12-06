-- to be integrated into the main sql database file

USE exec_function_db;

-- ==================================
        -- ORIGINAL DO NOT USE
-- ==================================
-- CREATE TABLE habits ( 
--     id INT PRIMARY KEY AUTO_INCREMENT, 
--     habit_name VARCHAR(255) NOT NULL, 
--     description TEXT, 
--     frequency INT, -- Number of times the habit should be done 
--     recurrence ENUM('daily', 'weekly', 'monthly', 'yearly'), -- Time period in which the frequency applies 
--     start_date DATE, 
--     last_completed DATE 
-- );

/*
CREATE TABLE habits ( 
    habits_id INT AUTO_INCREMENT PRIMARY KEY, 
    user_id INT NOT NULL,
    habit_name VARCHAR(255) NOT NULL, 
    description TEXT, 
    frequency INT, 
    recurrence ENUM('daily', 'weekly', 'monthly', 'yearly'), 
    start_date DATE, 
    last_completed DATE,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);
*/

   CREATE TABLE habits (  
    habits_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_id INT NOT NULL,
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
    sunday BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
);