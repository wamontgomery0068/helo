CREATE TABLE helo_user
(
  id SERIAL PRIMARY KEY,
  username VARCHAR (100) UNIQUE NOT NULL,
  password VARCHAR (100) NOT NULL,
  profile_picture VARCHAR (500)
);