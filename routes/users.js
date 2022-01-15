var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

router.post("/new", async function (req, res, next) {
  try {
    var user = await userController.createUser(req, res);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.put("/update", async function (req, res, next) {
  try {
    var user = await userController.updateUser(req, res);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete", async function (req, res, next) {
  try {
    var user = await userController.deleteUser(req, res);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
