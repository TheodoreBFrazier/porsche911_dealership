const { request } = require("express");
const express = require("express");
const users = express.Router();

const { getAllUsers, getUser, createUser, savedPorsche } = require("../queries/userQueries");


// /users/

users.get("/", async (request, response) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
        response.status(200).json(allUsers)
        console.log(allUsers)
    } else {
        response.status(500).json({ error: "server error!!" })
    }
});

//View of one user  /users/1

users.get("/:id", async (request, response) => {
    const { id } = request.params;
    const user = await getUser(id)
    if (user.user_id) {
        response.json(user)
    } else {
        response.status(404).json({ error: "not found" })
    }
});


//Create a user

users.post("/", async (request, response) => {
    const user = request.body;
    const createdUser = await createUser(user);
    if (createdUser.user_id) {
        response.json( { success: true, result: createdUser});    
    } else
    response.status(500).json({ success: false, error: "unable to create user"})
});


// ----------- user adds a porsche from porsche store that they like

users.post("/:uid/favoriteporsches", async (request, response) => {
    const { user_id, porsche_id } = request.body;

    const saved_porsche = await savedPorsche(user_id, porsche_id);
    if(saved_porsche.user_id) response.json({ success: true, result: saved_porsche});
    else
    response.status(500).json({ sucess: false, error: "Already saved"});
});

module.exports = users;