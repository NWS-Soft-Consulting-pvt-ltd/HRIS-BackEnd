const express = require("express");
const router = express.Router();
const passport = require("passport");
const microsoftAuthentication = require("../middlewares/microsoftAuthentication");
const { redirectToLogin } = require("../middlewares/authenticationMiddleware");

router.get("/authenticate", microsoftAuthentication);

router.get(
  "/callback",
  passport.authenticate("microsoft", {
    failureRedirect: `${process.env.FRONT_END_BASE_URL}/login`,
  }),
  redirectToLogin
);

module.exports = router;
