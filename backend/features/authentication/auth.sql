USE exec_function_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- password reset columns
ALTER TABLE users 
ADD (
    reset_password_token VARCHAR(255),
    reset_password_expires DATETIME
);