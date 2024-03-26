const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("your user/token validation middleware here...");
  next();
});

module.exports = router;
