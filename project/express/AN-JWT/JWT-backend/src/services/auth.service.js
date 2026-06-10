const bcrypt = require("bcryptjs");
const authRepository = require("../repositories/auth.repository");
const userRepository = require("../repositories/user.repository");
// const generateToken = require("../utils/generateToken");
const generateAccessToken = require("../utils/generateAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");
const jwt = require("jsonwebtoken");

class AuthService {

    async register(name, email, password) {

        const existingUser =
            await authRepository.findUserByEmail(email);

        if (existingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const user =
            await authRepository.createUser({
                name,
                email,
                password: hashedPassword
            });

        return user;
    }

    async login(email, password) {

        const user =
            await authRepository.findUserByEmail(email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isMatch =
            await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        const accessToken =
            generateAccessToken(user);

        const refreshToken =
            generateRefreshToken(user);

        await userRepository.saveRefreshToken(
            user._id,
            refreshToken
        );

        return {
            accessToken,
            refreshToken
        };
    }

    async refreshToken(refreshToken) {

    if (!refreshToken) {
        throw new Error("Refresh token required");
    }

    const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET
    );

    const user =
        await userRepository.findByRefreshToken(
            refreshToken
        );

    if (!user) {
        throw new Error("Invalid refresh token");
    }

    const accessToken =
        generateAccessToken(user);

    return accessToken;
}

async logout(userId) {

    await userRepository.removeRefreshToken(
        userId
    );

    return true;
}
}

module.exports = new AuthService();