const express = require('express');
const app = express();
const PORT = 8989;
const userController = require('./controller/users.controller.js');

app.use(express.json());

app.get('/', (request, response) => {
    response.json("Index page");
});

// AUTH ENDPOINT
app.post('/auth/signup', userController.createNewUserApi);


app.listen(PORT, () => {
    console.info(`Server running at locahost:${PORT}`);
});