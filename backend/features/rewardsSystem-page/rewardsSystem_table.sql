USE exec_function_db;

CREATE TABLE user_rewards (
    reward_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    forks INT NOT NULL,
    reward_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--daily login table

CREATE TABLE daily_login (
    login_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    streak INT DEFAULT 0,
    last_visit TIMESTAMP,
    weeks INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
