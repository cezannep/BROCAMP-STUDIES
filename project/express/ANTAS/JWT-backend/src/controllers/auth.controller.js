const authService =
    require("../services/auth.service");

class AuthController {

    async register(req, res) {
        try {

            const { name, email, password } = req.body;

            const user =
                await authService.register(
                    name,
                    email,
                    password
                );

            res.status(201).json({
                success: true,
                user
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async login(req, res) {

        try {

            const { email, password } = req.body;

            const {
                accessToken,
                refreshToken
            } = await authService.login(
                email,
                password
            );

            res.cookie(
                "refreshToken",
                refreshToken,
                {
                    httpOnly: true,
                    secure: false, // true in production
                    sameSite: "strict",
                    maxAge: 7 * 24 * 60 * 60 * 1000
                }
            );

            return res.status(200).json({
                success: true,
                accessToken
            });

        } catch (error) {

            return res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }

    async refreshToken(req, res) {

        try {

            const refreshToken = req.cookies.refreshToken;

            const accessToken =
                await authService.refreshToken(
                    refreshToken
                );

            res.status(200).json({
                accessToken
            });

        } catch (error) {

            res.status(401).json({
                message: error.message
            });
        }
    }
    async logout(req, res) {

        await authService.logout(
            req.user.id
        );
        res.clearCookie("refreshToken");
        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    }

}

module.exports = new AuthController();