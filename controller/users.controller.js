const userService = require('../service/user.service.js');
const jwtUtil = require('../util/jwt.util.js');

exports.createNewUserApi = async(request, response) => {
    const user = await userService.createUser(request);

    response.status(201).json({ data: user });
}

exports.signUserApi = async(request, response) => {
    const user = await userService.signInUser(request);

    const payloadToken = {
        id: user.id,
        email: user.email
    };

    const tokens = await jwtUtil.generateToken(payloadToken);

    if (user) {
        response.status(200).json({ token: tokens });
    } else {
        response.status(401).json({ error: "Unauthorized access" });
    }
}