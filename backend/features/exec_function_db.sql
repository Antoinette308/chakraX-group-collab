CREATE DATABASE exec_function_db;

USE exec_function_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    reset_password_token VARCHAR(255),
    reset_password_expires DATETIME
);

CREATE TABLE energy_activity (
    activity_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id FOREIGN KEY INT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    spoons INT NOT NULL CHECK (spoon >= 1 AND spoon <= 5),
    is_active BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE habits ( 
    habits_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_id FOREIGN KEY INT NOT NULL,
    habit_name VARCHAR(255) NOT NULL, 
    description TEXT, 
    frequency INT, 
    recurrence ENUM('daily', 'weekly', 'monthly', 'yearly'), 
    start_date DATE, 
    last_completed DATE 
);

CREATE TABLE journal ( 
    entry_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id FOREIGN KEY INT NOT NULL,
    title VARCHAR(100) NOT NULL UNIQUE,
    entry TEXT NOT NULL,
    date DATE DEFAULT (CURDATE())
);

CREATE TABLE todos (
    todo_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id FOREIGN KEY INT NOT NULL,
    tasks text NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE
);