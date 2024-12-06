USE exec_function_db;

CREATE TABLE user_rewards (
    user_id INT NOT NULL,
    reward_id INT PRIMARY KEY AUTO_INCREMENT,
    reward VARCHAR(255) NOT NULL,
    forks_cost INT NOT NULL,
    streak INT,
    total_forks INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE daily_login (
    user_id INT NOT NULL,
    date DATE PRIMARY KEY,
    logged_in BOOLEAN,
    last_visited DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

