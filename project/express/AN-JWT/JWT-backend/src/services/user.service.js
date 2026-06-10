const userRepository = require("../repositories/user.repository");

class UserService {

    async getProfile(userId) {

        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
}

module.exports = new UserService();