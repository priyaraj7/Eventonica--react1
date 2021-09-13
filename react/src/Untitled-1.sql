

     create table users (
  id serial primary key,
  name text not null,
  email citext not null unique
);

create table events (
  id serial primary key,
  name text not null,
  email citext not null unique
);

INSERT INTO 
    users (name, email)
VALUES
    ('jon', 'jon@gmail.com'),
    ('jack', 'jack@gmail.com'),
    ('jill', 'jill@yahoo.com'),
    ('nemo', 'nemo@yahoo.com'),
    ('dora', 'dora@yahoo.com');

    CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    description VARCHAR(255),
    catagory VARCHAR(255) NOT NULL
);

INSERT INTO 
    events (name, date, description, catagory)
VALUES
    ('jon', '2020-10-01', 'birthday party of my best frient', 'celebration'),
    ('jack', '2020-09-30', 'marriage', 'celebration'),
    ('jill', '2020-12-01', 'learning js', 'education'),
    ('nemo', '2020-10-15', 'hiking team', 'recreation'),
    ('dora', '2021-05-01', 'learning react', 'education');