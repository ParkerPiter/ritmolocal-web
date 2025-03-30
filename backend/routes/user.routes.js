const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/user.controller');

userRoutes.get('/', userController.getAllUsers); //Admin Route

userRoutes.post('/create', userController.createUser); //User Route

userRoutes.post('/login', userController.loginUser); //User Route

userRoutes.put('/update', userController.updateUser); //User and Admin Route

userRoutes.delete('/delete', userController.deleteUser); //Admin Route

module.exports = userRoutes;