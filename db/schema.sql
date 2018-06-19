DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id int(10) not null auto_increment,
  burger_name varchar(25) not null,
  devoured boolean,
  primary key(id)
);

INSERT INTO burgers(burger_name, devoured)
values("The Biggin'", false);

INSERT INTO burgers(burger_name, devoured)
values("1000 Whopper", false);

INSERT INTO burgers(burger_name, devoured)
values("Toilet Devestator", false);

INSERT INTO burgers(burger_name, devoured)
values("Giant Beef", false);

SELECT * FROM burgers;