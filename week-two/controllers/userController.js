'use strict';
const userModel = require('../models/userModel');


const getUsers = async (req, res) => {
    const users = await userModel.getAllUsers();
    res.json(users)
}

const getuser = async (req, res) => {
    const user = await userModel.getUserById(res, req.params.userId)
    console.log(req.params.userId)
    if (user) {
        res.json(user);

    } else {
        res.sendStatus(404);
    }
};

const modifyUser = (req, res) => { }
const createUser = (req, res) => {
    console.log(req.body);
    res.send('adding user')
};
const deleteUser = (req, res) => { }


module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser
};