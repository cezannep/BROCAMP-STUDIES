const express = require("express");

const router = express.Router();

const authenticate =
require("../middlewares/auth.middleware");

const authorize =
require("../middlewares/role.middleware");

const adminController =
require("../controllers/admin.controller");

router.get(
    "/dashboard",
    authenticate,
    authorize("admin"),
    adminController.dashboard
);

module.exports = router;