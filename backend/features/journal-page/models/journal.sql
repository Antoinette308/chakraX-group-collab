-- CREATE TABLE journal ( 
--     entryId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(100) NOT NULL UNIQUE,
--     entry TEXT NOT NULL,
--     date DATE DEFAULT (CURDATE()),
--     userId INT NOT NULL 
-- )

CREATE TABLE journal ( 
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL UNIQUE,
    entry TEXT NOT NULL,
    date DATE DEFAULT (CURDATE()),
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);
