const userService = require("../services/user.service");

class UserController {

    async getProfile(req, res) {

        try {

            const user =
                await userService.getProfile(req.user.id);

            return res.status(200).json({
                success: true,
                user
            });

        } catch (error) {

            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getDashboard(req, res) {

        try {

            const userId = req.user.id;

            return res.status(200).json({
                success: true,
                message: `Welcome User ${userId}`
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new UserController();