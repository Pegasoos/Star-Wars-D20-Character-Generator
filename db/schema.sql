DROP DATABASE IF EXISTS character_db;
CREATE DATABASE character_db;
USE character_db;

CREATE TABLE IF NOT EXISTS user(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
username VARCHAR(30) NOT NULL,
password VARCHAR(1000) NOT NULL,
email VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS d20_character(
 id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
 creator_id INTEGER NOT NULL,
 FOREIGN KEY (creator_id) REFERENCES user (id),
 char_name VARCHAR(30) NOT NULL,
 char_level INT DEFAULT 1 NOT NULL,
 strength TINYINT NOT NULL,
 dexterity TINYINT NOT NULL,
 constitution TINYINT NOT NULL,
 intelligence TINYINT NOT NULL, 
 wisdom TINYINT NOT NULL, 
 charisma TINYINT NOT NULL,
 defense TINYINT,
 vitality_points TINYINT,
 wound_points TINYINT,
 fortitude_save TINYINT,
 reflex_save TINYINT,
 will_save TINYINT,
 species VARCHAR(40),
 class VARCHAR(40),
 feats JSON,
 skills JSON,
 inventory JSON,
 languages VARCHAR(500),
 char_description TEXT(50000)
);