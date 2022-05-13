const jwt = require('jsonwebtoken');

exports.authorizationToken = (request, response, next) => {
    const authHeader = request.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    console.info(token);

    if (token == null) return response.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return response.sendStatus(401)

        request.user = user

        next();
    })
};