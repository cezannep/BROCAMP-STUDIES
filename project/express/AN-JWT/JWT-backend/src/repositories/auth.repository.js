const User = require("../models/user.model");

class AuthRepository {

    async findUserByEmail(email) {
        return await User.findOne({ email });
    }

    async createUser(userData) {
        return await User.create(userData);
    }
}

module.exports = new AuthRepository();