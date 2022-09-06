DROP DATABASE IF EXISTS data_dev;
CREATE DATABASE data_dev;

\c data_dev

--data for the current Porsche generation, the 992 

CREATE TABLE carrera_models (    
    model_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT,
    model_image TEXT DEFAULT NULL
);

CREATE TABLE carrera_body_stats (
    technical_id SERIAL PRIMARY KEY,
    model_name TEXT,
    height TEXT,
    width TEXT,
    length TEXT,
    curb_weight TEXT,
    wheelbase TEXT
);

CREATE TABLE carrera_technical (
    technical_id SERIAL PRIMARY KEY,
    motor TEXT,
    bore TEXT,
    stroke TEXT,
    displacement TEXT,
    max_power TEXT,
    max_power_at_rpm TEXT,
    max_engine_speed TEXT,
    max_torque TEXT,
    max_torque_at_rpm TEXT,
    max_power_per_liter TEXT,
    power_to_weight TEXT
);


--data for the TURBO models 

CREATE TABLE turbo_models (
    turbo_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT
);

CREATE TABLE turbo_body_stats (
    technical_id SERIAL PRIMARY KEY,
    height TEXT,
    width TEXT,
    length TEXT,
    curb_weight TEXT,
    wheelbase TEXT
);

CREATE TABLE turbo_technical (
    technical_id SERIAL PRIMARY KEY,
    motor TEXT,
    bore TEXT,
    stroke TEXT,
    displacement TEXT,
    max_power TEXT,
    max_power_at_rpm TEXT,
    max_engine_speed TEXT,
    max_torque TEXT,
    max_torque_at_rpm TEXT,
    max_power_per_liter TEXT,
    power_to_weight TEXT
);

--data for the GTS models

CREATE TABLE gt3_models (
    gt3_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT
);

CREATE TABLE gt3_body_stats (
    technical_id SERIAL PRIMARY KEY,
    height TEXT,
    width TEXT,
    length TEXT,
    curb_weight TEXT,
    wheelbase TEXT
);

CREATE TABLE gt3_technical (
    technical_id SERIAL PRIMARY KEY,
    motor TEXT,
    bore TEXT,
    stroke TEXT,
    displacement TEXT,
    max_power TEXT,
    max_power_at_rpm TEXT,
    max_engine_speed TEXT,
    max_torque TEXT,
    max_torque_at_rpm TEXT,
    max_power_per_liter TEXT,
    power_to_weight TEXT
);

--data for the porsches for sale
CREATE TABLE porsches_4_sale(
    porsche_id SERIAL PRIMARY KEY,
    model_name TEXT,
    year INT,
    body_style TEXT,
    price INT,
    generation TEXT,
    color TEXT,
    description TEXT 
);

--data for the porsche generations 
CREATE TABLE porsche_911_gens(
    gen_id SERIAL PRIMARY KEY,
    gen_name TEXT,
    year_began TEXT,
    year_ended TEXT,
    description TEXT
);