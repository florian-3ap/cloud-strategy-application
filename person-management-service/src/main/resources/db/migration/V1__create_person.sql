DROP TABLE IF EXISTS person;

CREATE TABLE IF NOT EXISTS person
(
    id         BIGSERIAL NOT NULL PRIMARY KEY,
    first_name TEXT      NOT NULL,
    last_name  TEXT      NOT NULL,
    birthdate  DATE      NOT NULL,
    city       TEXT      NOT NULL
);
