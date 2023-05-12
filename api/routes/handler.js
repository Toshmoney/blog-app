const express = require("express");
const { home, login, register, test } = require("../controller/controller");
const router = express.Router();

router.route("/").get(home);
router.route("/test").get(test)
router.route("/login").post(login);
router.route("/register").post(register)

module.exports = router;