var express = require("express");
var router = express.Router();
var commentController = require("../controllers/commentController");

router.get("/", async function (req, res, next) {
  try {
    var post = await commentController.getCommentsbyPost(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.post("/new", async function (req, res, next) {
  try {
    var post = await commentController.createComment(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.put("/update", async function (req, res, next) {
  try {
    var post = await commentController.updateComment(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete", async function (req, res, next) {
  try {
    var post = await commentController.deleteComment(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
