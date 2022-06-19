DROP DATABASE IF EXISTS data_dev;
CREATE DATABASE data_dev;

\c data_dev

--data for the current Porsche generation, the 992 
CREATE TABLE carreramodels992 (
    model_id SERIAL PRIMARY KEY,
    model TEXT,
    body_style TEXT,
    price INT,
    power_in_hp INT,
    zero_to_sixty INT,
    description TEXT,
    image varbinary(max)
)

--data for the GTS models


--data for the porsches for sale
CREATE TABLE porsches4sale(
    porsche_id SERIAL PRIMARY KEY,
    model TEXT,
    year INT,
    body_style TEXT,
    generation INT,
    color TEXT,
    description   
)