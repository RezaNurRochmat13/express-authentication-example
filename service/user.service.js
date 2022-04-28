const userRepository = require('../repository/users.repository.js');
const bcrypt = require('bcrypt');

exports.createUser = async(payload) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(payload.body.password, salt);

    const user = {
        email: payload.body.email,
        password: encryptedPassword
    };

    return await userRepository.save(user);
}