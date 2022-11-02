const express = require("express");
const db = require("../db/dbConfig");
const authorization = express.Router();
const { authorizeUser } = require("../queries/authorizationQueries.js")
const bcrypt = require("bcrypt");
const { createUser } = require("../queries/userQueries");

//Create an authorization

authorization.post("/sign_up", async (request, response) => {
    const { password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = request.body;
    user.password = hashedPassword

    const createdUser = await createUser(user)
    if (createdUser.user_id) {
        response.json({ success: true, result: createdUser });
    } else
        response.status(500)
            .json({ success: false, error: "User already exists" })
});

authorization.post("/login", async (request, response) => {
    const { user_name, password } = request.body;
    const userInfo = await authorizeUser(user_name, password);
    try {
        if (!(userInfo.user_id)) response.json({ sucess: true, result: userInfo});
        else response.status(500).json({ sucess: false, error: userInfo.error});
    } catch (error) {
        response.status(500).json({ sucess: false, error: "Incorrect Password"})
    }
});

module.exports = authorization;