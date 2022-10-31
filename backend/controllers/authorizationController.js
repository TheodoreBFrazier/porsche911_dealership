const express = require("express");
const db = require("../db/dbConfig");
const authorization = express.Router();
const { authorizeUser } = require("../queries/authorizationQueries.js")
const bcrypt = require("bcrypt");
const { createUser } = require("../queries/userQueries");

//Create an authorization

authorization.post("/sign/up", async (request, response) => {
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

module.exports = authorization;