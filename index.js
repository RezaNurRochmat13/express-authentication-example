const express = require('express');
const dotenv = require('dotenv');
const formidable = require('express-formidable');
const app = express();
const PORT = 8989;
const userController = require('./controller/users.controller.js');
const carController = require('./controller/cars.controller.js');

// Load env variable
dotenv.config();

app.use(formidable());

app.get('/', (request, response) => {
    response.json("Index page");
});

// AUTH ENDPOINT
app.post('/auth/signup', userController.createNewUserApi);
app.post('/auth/signin', userController.signUserApi);

// CAR ENDPOINT
app.get('/cars', carController.findAllCarsApi);
app.get('/cars/:id', carController.findCarByIdApi);
app.post('/cars', carController.createNewCarApi);


app.listen(PORT, () => {
    console.info(`Server running at locahost:${PORT}`);
});