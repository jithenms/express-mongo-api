var User = require("../model/userModel");
var Post = require("../model/postModel");
var Comment = require("../model/commentModel");

exports.createUser = async (req, res) => {
  await User.findOne({ email: req.body.email }).then((data) => {
    if (data !== null) throw new Error("User Already Exists");
  });
  return User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    birthday: req.body.birthday,
  });
};

exports.updateUser = async (req, res) => {
  await User.findById(req.query.userId).then((data) => {
    if (data === null) throw new Error("User doesn't Exist");
  });
  return User.updateOne({
    id: req.query.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    birthday: req.body.birthday,
  });
};

exports.deleteUser = async (req, res) => {
  await User.findById(req.query.userId)
    .then((data) => {
      if (data === null) throw new Error("User doesn't Exist");
    })
    .then(Post.deleteMany({ userId: req.query.userId }))
    .then(Comment.deleteMany({ userId: req.query.userId }));

  return User.findByIdAndDelete(req.query.userId);
};
