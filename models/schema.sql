
-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS tv_show_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE tv_show_db;

USE tv_show_db;

-- Create the table tasks.
CREATE TABLE tvShows (
  id int NOT NULL AUTO_INCREMENT,
  season INTEGER(255) NOT NULL,
  episode INTEGER(255) NOT NULL,
  episode_name varchar(255) NOT NULL,
  episode_plot varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.

