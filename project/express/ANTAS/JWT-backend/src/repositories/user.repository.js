const User = require("../models/user.model");

class UserRepository {

    async findById(userId) {
        return await User.findById(userId).select("-password");
    }

    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async createUser(userData) {
        return await User.create(userData);
    }

    async saveRefreshToken(userId, refreshToken) {

        return await User.findByIdAndUpdate(
            userId,
            { refreshToken },
            { returnDocument: "after" }
        );
    }

    async findByRefreshToken(refreshToken) {

        return await User.findOne({
            refreshToken
        });
    }

    async removeRefreshToken(userId) {
        return await User.findByIdAndUpdate(
            userId,
            {
                refreshToken: null
            },
            {
                returnDocument: "after"
            }
        );
    }
    
}

module.exports = new UserRepository();