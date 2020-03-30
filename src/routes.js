const express = require ('express');
const routes = express.Router();

const UserController = require('./controllers/UserController')

//List
routes.get('/users', UserController.list);

//Create
routes.post('/users', UserController.create);

//Detail
routes.get('/users/:_id', UserController.filter);

//Update
routes.put('/users/:id', UserController.update);

//Delete
routes.delete('/users/:id', UserController.delete);

module.exports = routes;