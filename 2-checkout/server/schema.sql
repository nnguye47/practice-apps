CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  cookie VARCHAR(50) NOT NULL PRIMARY KEY,
  username VARCHAR(20),
  email VARCHAR(50),
  pw VARCHAR(18),
  line1 VARCHAR(50),
  line2 VARCHAR(50),
  city VARCHAR(20),
  currentState VARCHAR(20),
  zipcode INT,
  cardnum INT,
  cvv INT,
  expiration INT
);



