CREATE DATABASE checkout;

USE checkout;

CREATE TABLE cards (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  num INT,
  cvv INT NOT NULL,
  expiration INT NOT NULL
);

CREATE TABLE locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  line1 VARCHAR(50) NOT NULL,
  line2 VARCHAR(50) DEFAULT '',
  city TEXT NOT NULL,
  currentState TEXT NOT NULL,
  zipcode INT NOT NULL
);

CREATE TABLE users (
  cookie VARCHAR(50) NOT NULL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  pw VARCHAR(18) NOT NULL,
  addressID INT,
  cardNumber INT,
  FOREIGN KEY(cardNumber) REFERENCES cards(id),
  FOREIGN KEY(addressID) REFERENCES locations(id)
);



