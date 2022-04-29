const userService = require('../service/user.service.js');

exports.createNewUserApi = async(request, response) => {
    const user = await userService.createUser(request);

    response.status(201).json({ data: user });
}

exports.signUserApi = async(request, response) => {
    const user = await userService.signInUser(request);

    if (user) {
        response.status(200).json({ token: "token generated here" });
    } else {
        response.status(401).json({ error: "Unauthorized access" });
    }
}