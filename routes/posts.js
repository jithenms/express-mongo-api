var express = require("express");
var router = express.Router();
var postController = require("../controllers/postController");

router.get("/all", async function (req, res, next) {
  try {
    var post = await postController.getPostsbyUser(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.post("/new", async function (req, res, next) {
  try {
    var post = await postController.createPost(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.put("/update", async function (req, res, next) {
  try {
    var post = await postController.updatePost(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/user", async function (req, res, next) {
  try {
    var post = await postController.deletePostsByUser(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete", async function (req, res, next) {
  try {
    var post = await postController.deletePost(req, res);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
