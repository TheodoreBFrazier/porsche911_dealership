DROP DATABASE IF EXISTS data_dev;
CREATE DATABASE data_dev;

\c data_dev

--data for the current Porsche generation, the 992 

CREATE TABLE carrera_models_992 (
    model_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT

)

--data for the TURBO models 

CREATE TABLE turbo_models_992 (
    turbo_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT
)

--data for the GTS models

CREATE TABLE gt3_models_992 (
    gts_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT
)


--data for the porsches for sale
CREATE TABLE porsches_4_sale(
    porsche_id SERIAL PRIMARY KEY,
    model_name TEXT,
    year INT,
    body_style TEXT,
    generation INT,
    color TEXT,
    description TEXT 
)

--data for the porsche generations 
CREATE TABLE porsche_911_gens(
    gen_id SERIAL PRIMARY KEY,
    gen_name INT,
    year_began INT,
    year_ended INT,
    description TEXT
)