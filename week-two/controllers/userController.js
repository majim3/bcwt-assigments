'use strict';
const userModel = require('../models/userModel')
const users = userModel.users

const getUsers = (req, res) => {

    //removes password from the users that no one else can see them

    users.map(user => {
        delete user.password;
        return user;
    });
    res.json(users)
}

const getUser = (req,res) =>{
    //matches the user
    const user = users.filter(user => req.params.userId == user.id)[0];
    if(user){
        delete user.password
        res.json(user);

    }else{
        res.sendStatus(404);
    }
    };
  
const modifyUser = (req,res) => {}
const createUser = (req,res) => {
    console.log(req.body)

    const message = `username: ${req.body.name}, email: ${req.body.email}`
    res.send('adding new user' + message)
}
const deleteUser = (req,res) => {}

module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser
};