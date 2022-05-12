const express = require('express');
const dotenv = require('dotenv');
const formidable = require('express-formidable');
const swaggerUi = require('swagger-ui-express');
const app = express();
const PORT = 8989;
const userController = require('./controller/users.controller.js');
const carController = require('./controller/cars.controller.js');

// Load env variable
dotenv.config();

// Load swagger json
swaggerDocument = require('./swagger.json');

app.use(formidable());

app.get('/', (request, response) => {
    response.json("Index page");
});

// SWAGGER API DOCS
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

// AUTH ENDPOINT
app.post('/auth/signup', userController.createNewUserApi);
app.post('/auth/signin', userController.signUserApi);
app.get("/profile", userController.userProfileApi);

// CAR ENDPOINT
app.get('/cars', carController.findAllCarsApi);
app.get('/cars/:id', carController.findCarByIdApi);
app.post('/cars', carController.createNewCarApi);
app.put('/cars/:id', carController.updateCarApi);
app.delete('/cars/:id', carController.deleteCar);


app.listen(PORT, () => {
    console.info(`Server running at locahost:${PORT}`);
});