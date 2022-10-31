const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users");
        console.log(allUsers)
        return allUsers;
    } catch (error) {
        return error;
    }
}

const getUser = async (id) => {
    try {
        const getUser = await db.one("SELECT * FROM users WHERE user_id=$1", id);
        return getUser
    } catch (error) {
        return error
    }
}

const createUser = async (user) => {
    try {
        const createdUser = await db.one(
            "INSERT INTO users(first_name, last_name, age, email, user_name, password, image ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
                user.first_name,
                user.last_name,
                user.age,
                user.email,
                user.user_name,
                user.password,
                user.image,
            ]
        );
        return createdUser;
    } catch (error) {
        return error
    }
};

module.exports = { getAllUsers, getUser, createUser }



