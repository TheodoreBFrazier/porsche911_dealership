DROP DATABASE IF EXISTS data_dev;

CREATE DATABASE data_dev;

\ c data_dev;

--data for the current Porsche generation, the 992 
CREATE TABLE carrera_models (
    model_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT,
    model_image TEXT DEFAULT NULL,
    height TEXT,
    width TEXT,
    length TEXT,
    curb_weight TEXT,
    wheelbase TEXT,
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
    power_to_weight TEXT,
    image TEXT
);

--data for the TURBO models 
CREATE TABLE turbo_models (
    turbo_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT,
    height TEXT,
    width TEXT,
    length TEXT,
    curb_weight TEXT,
    wheelbase TEXT,
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
    power_to_weight TEXT,
    image TEXT
);

--data for the GT3 models
CREATE TABLE gt3_models (
    gt3_id SERIAL PRIMARY KEY,
    model_name TEXT,
    price INT,
    power_in_hp INT,
    top_speed_mph INT,
    zero_to_sixty INT,
    description TEXT,
    height TEXT,
    width TEXT,
    length TEXT,
    curb_weight TEXT,
    wheelbase TEXT,
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
    power_to_weight TEXT,
    image TEXT
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
    transmission TEXT,
    description TEXT,
    main_image TEXT,
    second_image TEXT,
    third_image TEXT,
    fourth_image TEXT,
    fifth_image TEXT
);

--data for the porsche generations 
CREATE TABLE porsche_911_gens(
    gen_id SERIAL PRIMARY KEY,
    gen_name TEXT,
    year_began TEXT,
    year_ended TEXT,
    description TEXT,
    image TEXT
);

--data for a user
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INT NOT NULL,
    email TEXT,
    user_name VARCHAR(50) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    favorite_porsches TEXT REFERENCES porsches_4_sale(porsche_id),
    users_name TEXT DEFAULT NULL
)