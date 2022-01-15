var Comment = require("../model/commentModel");
var User = require("../model/userModel");
var Post = require("../model/postModel");

exports.createComment = async (req, res) => {
  await Post.findById(req.body.postId)
    .then((data) => {
      if (data === null) throw new Error("Post doesn't Exist");
    })
    .then(
      User.findById(req.body.userId).then((data) => {
        if (data === null) throw new Error("Post doesn't Exist");
      })
    );
  return Comment.create({
    postId: req.body.postId,
    userId: req.body.userId,
    title: req.body.title,
  });
};

exports.updateComment = async (req, res) => {
  await Comment.findById(req.query.commentId).then((data) => {
    if (data === null) throw new Error("Comment doesn't Exist");
  });
  return Comment.updateOne({
    id: req.query.commentId,
    title: req.body.title,
  });
};

exports.deleteComment = async (req, res) => {
  await Comment.findById(req.query.commentId).then((data) => {
    if (data === null) throw new Error("Comment doesn't Exist");
  });
  return Comment.deleteOne({ _id: req.query.commentId });
};

exports.getCommentsbyPost = async (req, res) => {
  await Post.findById(req.query.postId).then((data) => {
    if (data === null) throw new Error("Post doesn't Exist");
  });
  return Comment.find({ postId: req.query.postId });
};
