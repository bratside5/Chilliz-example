const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/user", userController.getUser);

module.exports = router;
