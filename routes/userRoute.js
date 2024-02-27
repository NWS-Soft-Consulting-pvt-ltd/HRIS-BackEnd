const express = require("express");
const { authenticateUser, signupUser } = require("../controllers/user");
const router = express.Router();

router.post("/api/login", authenticateUser);

router.post("/api/signup", signupUser);

module.exports = router;
