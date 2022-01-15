var Post = require("../model/postModel");
var User = require("../model/userModel");
var Comment = require("../model/commentModel");

exports.createPost = async (req, res) => {
  await User.findById(req.body.userId).then((data) => {
    if (data === null) throw new Error("User Doesn't Exist");
  });

  return Post.create({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
  });
};

exports.updatePost = async (req, res) => {
  await Post.findById(req.query.postId).then((data) => {
    if (data === null) throw new Error("Post Not Found");
  });

  return Post.updateOne({
    id: req.query.postId,
    title: req.body.title,
    description: req.body.description,
  });
};

exports.deletePost = async (req, res) => {
  await Post.findById(req.query.postId)
    .then((data) => {
      if (data === null) throw new Error("Post doesn't Exist");
    })
    .then(Comment.deleteMany({ postId: req.query.postId }));

  return Post.findByIdAndDelete(req.query.postId);
};

exports.deletePostsByUser = async (req, res) => {
  await User.findById(req.query.userId).then((data) => {
    if (data === null) throw new Error("User doesn't Exist");
  });

  return Post.deleteMany({ userId: req.query.userId });
};

exports.getPostsbyUser = async (req, res) => {
  await User.findById(req.query.userId).then((data) => {
    if (data === null) throw new Error("User doesn't Exist");
  });

  return Post.find({ userId: req.query.userId });
};
