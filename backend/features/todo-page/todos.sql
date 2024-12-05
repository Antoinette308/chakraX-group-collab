-- ==================================
        -- ORIGINAL DO NOT USE
-- ==================================
-- CREATE TABLE todos (
-- ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- tasks text NOT NULL,
-- completed BOOLEAN NOT NULL DEFAULT FALSE
-- );

CREATE TABLE todos (
    todo_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id FOREIGN KEY INT NOT NULL,
    tasks text NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO todos 
    (tasks) 
VALUES 
    ("Build the todo api");

INSERT INTO todos 
    (tasks) 
VALUES 
    ("Strong arm Jest to accept ES6");

UPDATE todos
SET completed = TRUE
WHERE id = 2;

INSERT INTO todos 
    (tasks) 
VALUES 
    ("This is a nonsense task");