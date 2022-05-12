const express = require('express');
const router = express.Router();
const userController = require('../controller/users.controller.js');
const carController = require('../controller/cars.controller.js');

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (request, response) => {
    response.json("Index page");
});

// AUTH ENDPOINT
/**
 * @openapi
 * /auth/signup:
 *   post:
 *     description: Signup User
 *     responses:
 *       200:
 *         description: Returns a created new user
 */
router.post('/auth/signup', userController.createNewUserApi);

/**
 * @openapi
 * /auth/signin:
 *   post:
 *     description: Signup User
 *     responses:
 *       200:
 *         description: Returns a logged in user
 */
router.post('/auth/signin', userController.signUserApi);

/**
 * @openapi
 * /auth/profile:
 *   get:
 *     description: Signup User
 *     responses:
 *       200:
 *         description: Returns a current user
 */
router.get("/auth/profile", userController.userProfileApi);

// CAR ENDPOINT
/**
 * @openapi
 * /cars:
 *   get:
 *     description: All Cars
 *     responses:
 *       200:
 *         description: Returns a all cars data
 */
router.get('/cars', carController.findAllCarsApi);

/**
 * @openapi
 * /cars/:id:
 *   get:
 *     description: Detail Cars By ID
 *     responses:
 *       200:
 *         description: Returns a single cars by id
 */
router.get('/cars/:id', carController.findCarByIdApi);

/**
 * @openapi
 * /cars:
 *   post:
 *     description: Create new car
 *     responses:
 *       200:
 *         description: Returns a created new car
 */
router.post('/cars', carController.createNewCarApi);

/**
 * @openapi
 * /cars/:id:
 *   put:
 *     description: Update car by id
 *     responses:
 *       200:
 *         description: Returns a update car
 */
router.put('/cars/:id', carController.updateCarApi);

/**
 * @openapi
 * /cars/:id:
 *   delete:
 *     description: Delete car
 *     responses:
 *       200:
 *         description: Returns a delete car
 */
router.delete('/cars/:id', carController.deleteCar);

module.exports = router;