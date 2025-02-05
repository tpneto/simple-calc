CREATE DATABASE simple_calc_db;
USE simple_calc_db;
CREATE TABLE calculations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    operation VARCHAR(255),
    result FLOAT
);
