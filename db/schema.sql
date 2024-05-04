DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;

\c techblog_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(30),
    password VARCHAR(100)
);

CREATE TABLE post (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER,
    title VARCHAR(50),
    content VARCHAR(500),
    date_created DATE,
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    post_id INTEGER,
    user_id INTEGER,
    content VARCHAR(250), 
    date_created DATE,
    FOREIGN KEY (post_id)
    REFERENCES post (id), 
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);
