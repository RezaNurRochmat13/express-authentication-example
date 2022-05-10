const userRepository = require('../repository/users.repository.js');
const bcrypt = require('bcrypt');

exports.createUser = async(payload) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(payload.body.password, salt);

    const user = {
        email: payload.body.email,
        password: encryptedPassword
    };

    if (payload.body.role == "superadmin") {
        user.id_role = 2;

        return await userRepository.save(user);
    }

    if (payload.body.role == "member") {
        user.id_role = 3;

        return await userRepository.save(user);
    }
};

exports.signInUser = async(payload) => {
    const user = await userRepository.findByEmail(payload.body.email);

    if (user != null) {
        const checkPassword = await bcrypt.compare(
            payload.body.password, user.password
        );

        if (checkPassword) {
            return user;
        } else {
            return null;
        }
    } else {
        return null;
    }
}